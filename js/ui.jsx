const {Eyebrow,Badge}=DS;

/* Cached Lucide renderer. The DS Icon component calls lucide.createIcons(), which rescans the
   whole document on every mount — with 100+ icons on the page that blocks the main thread.
   This builds the glyph markup once per name and patches DS.Icon so every module benefits. */
const _icoCache={};
function _serialize(children){
  return (children||[]).map(c=>{
    if(!Array.isArray(c))return "";
    const [tag,attrs,kids]=c;
    const a=Object.entries(attrs||{}).map(([k,v])=>`${k}="${v}"`).join(" ");
    return `<${tag} ${a}>${_serialize(kids)}</${tag}>`;
  }).join("");
}
function _glyph(name){
  if(_icoCache[name]!==undefined)return _icoCache[name];
  const pas=String(name).split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join("");
  const set=window.lucide&&window.lucide.icons;
  const node=set&&(set[pas]||set[name]);
  let inner="";
  if(node){ try{ inner=_serialize(node[2]||node); }catch(e){ inner=""; } }
  _icoCache[name]=inner;
  return inner;
}
function Icon({name,size=16,strokeWidth=1.5,color="currentColor",style}){
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display:"block",flexShrink:0,...style}} dangerouslySetInnerHTML={{__html:_glyph(name)}}></svg>;
}
DS.Icon=Icon;

const mono={fontFamily:"var(--font-mono)",fontSize:12,lineHeight:"16px",letterSpacing:"1.2px",textTransform:"uppercase"};

/* per-surface accent pairs — used for icon tiles, auras, charts */
const ACCENT={
  crm:["var(--c-indigo)","var(--c-violet)"],
  calendar:["var(--c-violet)","var(--c-indigo)"],
  email:["var(--c-cyan)","var(--c-blue)"],
  funnel:["var(--c-gold)","var(--c-violet)"],
  analytics:["var(--c-teal)","var(--c-cyan)"],
  website:["var(--c-blue)","var(--c-violet)"],
  whatsapp:["var(--c-teal)","var(--c-blue)"],
  payments:["var(--c-gold)","var(--c-gold-soft)"],
  automation:["var(--c-violet)","var(--c-cyan)"],
  clients:["var(--c-blue)","var(--c-cyan)"],
  ai:["var(--c-violet)","var(--c-cyan)"],
  gold:["var(--c-gold)","var(--c-gold-soft)"],
};

/* dimensional icon tile — the site's premium icon primitive */
function Tile({icon,size=44,accent="ai",glow=true,radius,style,children}){
  const [a,b]=ACCENT[accent]||ACCENT.ai;
  return <span className={"vx-tile"+(glow?" vx-tile-glow":"")} style={{"--t1":a,"--t2":b,width:size,height:size,borderRadius:radius||Math.round(size*0.32),flexShrink:0,...style}}>
    {children||<Icon name={icon} size={Math.round(size*0.44)} color="#ffffff"/>}
  </span>;
}

function Aura({accent="ai",size="130%",opacity=.5,style}){
  const [a,b]=ACCENT[accent]||ACCENT.ai;
  return <span aria-hidden="true" className="vx-aura vx-pulse" style={{left:"50%",top:"50%",width:size,aspectRatio:"1",transform:"translate(-50%,-50%)",background:`radial-gradient(circle, color-mix(in oklab, ${a} 42%, transparent), color-mix(in oklab, ${b} 20%, transparent) 45%, transparent 70%)`,opacity,...style}}></span>;
}

function Panel({label,icon,accent="ai",children,style,foot,className=""}){
  const [a,b]=ACCENT[accent]||ACCENT.ai;
  return <div className={"vx-lift "+className} style={{position:"relative",background:"linear-gradient(180deg,#191919,#141519)",border:"1px solid var(--color-hairline)",borderRadius:"var(--radius-sm)",overflow:"hidden",color:"var(--color-ink)","--glow":`color-mix(in oklab, ${b} 60%, transparent)`,...style}}>
    <span aria-hidden="true" style={{position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(90deg,transparent,${a},${b},transparent)`,opacity:.85}}></span>
    <div style={{display:"flex",alignItems:"center",gap:"var(--space-sm)",padding:"11px 14px",borderBottom:"1px solid var(--color-hairline)"}}>
      <Tile icon={icon} size={24} accent={accent} glow={false}/>
      <span style={{...mono,color:"var(--color-body)"}}>{label}</span>
      <span style={{flex:1}}></span>
      <span style={{display:"flex",gap:4}}>{[a,b,"rgba(255,255,255,.25)"].map((c,i)=><span key={i} style={{width:5,height:5,borderRadius:"var(--radius-full)",background:c}}></span>)}</span>
    </div>
    <div>{children}</div>
    {foot?<div style={{padding:"10px 14px",borderTop:"1px solid var(--color-hairline)",...mono,color:"var(--color-body-mid)"}}>{foot}</div>:null}
  </div>;
}

function Pill({children,dot,tone}){
  return <span style={{display:"inline-flex",alignItems:"center",gap:6,padding:"3px 10px",borderRadius:"var(--radius-full)",border:"1px solid "+(tone?`color-mix(in oklab, ${tone} 45%, transparent)`:"var(--border-translucent)"),background:tone?`color-mix(in oklab, ${tone} 14%, transparent)`:"transparent",...mono,color:tone?"#fff":"var(--color-body)"}}>
    {dot?<span style={{width:5,height:5,borderRadius:"var(--radius-full)",background:dot,boxShadow:`0 0 8px ${dot}`}}></span>:null}{children}
  </span>;
}

const rowStyle={display:"grid",gridTemplateColumns:"1.4fr 1fr .8fr",gap:"var(--space-md)",alignItems:"center",padding:"10px 14px",borderTop:"1px solid var(--color-hairline)"};

function CRMPanel({t=0}){
  const leads=[["Sarah Mehta","Discovery call · Today 10:00","QUALIFIED","var(--c-blue)"],["Rohan Kapoor","Follow-up · Tomorrow 2:30","HOT","var(--c-gold)"],["Priya Shah","Proposal sent · Yesterday","WON","var(--c-teal)"],["Dev Sharma","New lead · 2h ago","NEW","var(--c-violet)"]];
  const live=Math.floor((t*4))%4;
  return <Panel label="CRM · Pipeline" icon="users" accent="crm" foot="Sample pipeline · 4 of 26 open leads">
    <div style={{...rowStyle,borderTop:"none",...mono,color:"var(--color-body-mid)"}}><span>Lead</span><span>Last activity</span><span>Status</span></div>
    {leads.map(([n,a,s,c],i)=>
      <div key={n} style={{...rowStyle,background:i===live?`color-mix(in oklab, ${c} 10%, transparent)`:"transparent",transition:"background 400ms"}}>
        <span style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{width:26,height:26,borderRadius:"var(--radius-full)",background:`linear-gradient(145deg, ${c}, color-mix(in oklab, ${c} 40%, #0a0a0a))`,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:11,fontFamily:"var(--font-mono)",color:"#fff"}}>{n[0]}</span>
          <span className="vx-body-sm">{n}</span>
        </span>
        <span className="vx-body-sm" style={{color:"var(--color-body-mid)"}}>{a}</span>
        <span><Pill dot={c} tone={c}>{s}</Pill></span>
      </div>)}
  </Panel>;
}

function CalendarPanel(){
  const days=["M","T","W","T","F","S","S"];
  return <Panel label="Calendar · Bookings" icon="calendar-check" accent="calendar" foot="Auto-confirmed on WhatsApp">
    <div style={{padding:"14px",display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6}}>
      {days.map((d,i)=><div key={i} style={{...mono,fontSize:10,color:"var(--color-body-mid)",textAlign:"center"}}>{d}</div>)}
      {Array.from({length:21}).map((_,i)=>{
        const on=[9,12,16].includes(i);
        return <div key={i} style={{height:24,borderRadius:6,border:"1px solid "+(on?"transparent":"var(--color-hairline)"),background:on?"linear-gradient(145deg,var(--c-violet),var(--c-indigo))":"rgba(255,255,255,.02)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-mono)",fontSize:10,color:on?"#fff":"var(--color-body-mid)",boxShadow:on?"0 6px 18px -8px var(--c-violet)":"none"}}>{i+4}</div>;
      })}
    </div>
    <div style={{padding:"0 14px 14px",display:"grid",gap:8}}>
      {[["10:00","Strategy call · Riya M.","var(--c-violet)"],["15:30","Onboarding · Aman S.","var(--c-cyan)"]].map(([t,c,col])=>
        <div key={t} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 12px",border:"1px solid var(--color-hairline)",borderRadius:"var(--radius-sm)",background:`linear-gradient(90deg, color-mix(in oklab, ${col} 12%, transparent), rgba(26,28,32,.6))`}}>
          <span style={{width:3,height:26,borderRadius:99,background:col,boxShadow:`0 0 12px ${col}`}}></span>
          <span style={{...mono,color:"var(--color-ink)"}}>{t}</span>
          <span className="vx-body-sm" style={{flex:1,color:"var(--color-body)"}}>{c}</span>
          <Pill dot="var(--c-teal)" tone="var(--c-teal)">CONFIRMED</Pill>
        </div>)}
    </div>
  </Panel>;
}

function EmailPanel(){
  const bars=[["Sent",100,"var(--c-cyan)"],["Delivered",94,"var(--c-blue)"],["Opened",57,"var(--c-violet)"],["Clicked",23,"var(--c-gold)"]];
  return <Panel label="Email · Campaign" icon="mail" accent="email" foot="Sequence · 4 steps · running">
    <div style={{padding:14,display:"grid",gap:13}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <Tile icon="send" size={30} accent="email"/>
        <div>
          <div className="vx-body-sm" style={{color:"var(--color-ink)"}}>“2-Hour Launch” nurture</div>
          <div style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>148 RECIPIENTS · STEP 2 OF 4</div>
        </div>
      </div>
      {bars.map(([l,v,c])=>
        <div key={l} style={{display:"grid",gap:6}}>
          <div style={{display:"flex",justifyContent:"space-between",...mono,color:"var(--color-body-mid)"}}><span>{l}</span><span style={{color:"#fff"}}>{v}%</span></div>
          <div style={{height:5,borderRadius:"var(--radius-full)",background:"rgba(255,255,255,0.08)"}}><div style={{width:v+"%",height:"100%",borderRadius:"var(--radius-full)",background:`linear-gradient(90deg, color-mix(in oklab, ${c} 55%, #0a0a0a), ${c})`,boxShadow:`0 0 14px -2px ${c}`}}></div></div>
        </div>)}
    </div>
  </Panel>;
}

function FunnelPanel(){
  const steps=[["Visitors","612",100,"var(--c-blue)"],["Leads","148",62,"var(--c-cyan)"],["Calls","31",34,"var(--c-violet)"],["Clients","9",16,"var(--c-gold)"]];
  return <Panel label="Funnel · Conversion" icon="filter" accent="funnel" foot="Landing page → booking → payment">
    <div style={{padding:14,display:"grid",gap:10}}>
      {steps.map(([l,v,w,c])=>
        <div key={l} style={{display:"flex",alignItems:"center",gap:12}}>
          <span style={{...mono,width:80,color:"var(--color-body-mid)"}}>{l}</span>
          <span style={{flex:1,height:30,borderRadius:8,border:"1px solid var(--color-hairline)",overflow:"hidden",background:"rgba(255,255,255,.02)",position:"relative"}}>
            <span style={{display:"block",width:w+"%",height:"100%",background:`linear-gradient(90deg, color-mix(in oklab, ${c} 70%, #0a0a0a), ${c})`,boxShadow:`0 0 20px -6px ${c}`}}></span>
          </span>
          <span style={{fontFamily:"var(--font-mono)",fontSize:13,color:"#fff",width:56,textAlign:"right"}}>{v}</span>
        </div>)}
    </div>
  </Panel>;
}

function AnalyticsPanel({t=0}){
  const pts=[18,26,22,34,40,38,52,60,58,72,80,94];
  const d=pts.map((v,i)=>`${(i/(pts.length-1))*100},${100-v}`).join(" ");
  const [ref,leads]=useCountUp(42,1400);
  return <Panel label="Analytics · Growth" icon="trending-up" accent="analytics" foot="Sample data · last 12 weeks">
    <div ref={ref} style={{padding:14,display:"grid",gap:14}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
        {[["New leads",leads.toLocaleString(),"var(--c-cyan)"],["Calls booked","8","var(--c-teal)"],["Growth","+18%","var(--c-gold)"]].map(([l,v,c])=>
          <div key={l} style={{border:"1px solid var(--color-hairline)",borderRadius:"var(--radius-sm)",padding:"10px 12px",background:`linear-gradient(160deg, color-mix(in oklab, ${c} 12%, transparent), rgba(26,28,32,.5))`}}>
            <div style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>{l}</div>
            <div style={{fontFamily:"var(--font-mono)",fontSize:19,letterSpacing:"-0.6px",marginTop:4,color:"#fff"}}>{v}</div>
            <div style={{height:2,marginTop:8,borderRadius:99,background:`linear-gradient(90deg,${c},transparent)`}}></div>
          </div>)}
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{width:"100%",height:124,display:"block",overflow:"visible"}}>
        <defs>
          <linearGradient id="aStroke" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="var(--c-teal)"/><stop offset="55%" stopColor="var(--c-cyan)"/><stop offset="100%" stopColor="var(--c-violet)"/></linearGradient>
          <linearGradient id="aFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--c-cyan)" stopOpacity=".34"/><stop offset="100%" stopColor="var(--c-cyan)" stopOpacity="0"/></linearGradient>
        </defs>
        {[25,50,75].map(y=><line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.09)" strokeWidth="0.4"/>)}
        <polyline points={`0,100 ${d} 100,100`} fill="url(#aFill)" stroke="none"/>
        <polyline points={d} fill="none" stroke="url(#aStroke)" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round"/>
        <circle cx="100" cy={100-pts[pts.length-1]} r="2.4" fill="#fff" style={{filter:"drop-shadow(0 0 6px var(--c-cyan))"}}/>
      </svg>
    </div>
  </Panel>;
}

function WebsitePanel(){
  return <Panel label="Website · Live" icon="globe" accent="website" foot="yourbrand.com · published">
    <div style={{padding:14}}>
      <div style={{border:"1px solid var(--color-hairline)",borderRadius:"var(--radius-sm)",overflow:"hidden",background:"linear-gradient(165deg,var(--deep-2),var(--deep))",position:"relative"}}>
        <div style={{display:"flex",gap:6,alignItems:"center",padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,.08)"}}>
          {["var(--c-gold)","var(--c-teal)","var(--c-blue)"].map((c,i)=><span key={i} style={{width:6,height:6,borderRadius:"var(--radius-full)",background:c}}></span>)}
          <span style={{...mono,fontSize:10,color:"var(--color-body-mid)",marginLeft:8}}>yourbrand.com</span>
        </div>
        <div style={{padding:"22px 18px",display:"grid",gap:10,position:"relative"}}>
          <span aria-hidden="true" style={{position:"absolute",right:-30,top:-30,width:180,height:180,borderRadius:999,background:"radial-gradient(circle,color-mix(in oklab,var(--c-violet) 45%,transparent),transparent 68%)"}}></span>
          <div style={{...mono,fontSize:10,color:"var(--c-gold-soft)"}}>Coaching</div>
          <div className="vx-display-xs" style={{maxWidth:260,position:"relative"}}>Work with me. Book a free call.</div>
          <div style={{display:"flex",gap:8,marginTop:4,position:"relative"}}>
            <span style={{padding:"6px 14px",borderRadius:"var(--radius-full)",background:"linear-gradient(135deg,var(--c-blue),var(--c-violet))",color:"#fff",...mono,fontSize:10}}>Book now</span>
            <span style={{padding:"6px 14px",borderRadius:"var(--radius-full)",border:"1px solid var(--border-translucent)",...mono,fontSize:10}}>Programs</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginTop:8}}>
            {["var(--c-cyan)","var(--c-violet)","var(--c-gold)"].map((c,i)=><div key={i} style={{height:36,borderRadius:6,border:"1px solid rgba(255,255,255,.08)",background:`linear-gradient(160deg, color-mix(in oklab, ${c} 22%, transparent), rgba(255,255,255,.03))`}}></div>)}
          </div>
        </div>
      </div>
    </div>
  </Panel>;
}

function Notice({icon,label,text,accent="ai",style}){
  const [a,b]=ACCENT[accent]||ACCENT.ai;
  return <div className="vx-lift" style={{display:"flex",gap:10,alignItems:"center",padding:"9px 16px 9px 10px",background:"linear-gradient(180deg,rgba(25,25,25,.96),rgba(16,17,20,.96))",border:"1px solid var(--color-hairline)",borderRadius:"var(--radius-full)",whiteSpace:"nowrap","--glow":`color-mix(in oklab, ${b} 60%, transparent)`,...style}}>
    <Tile icon={icon} size={30} accent={accent} radius={999}/>
    <span style={{display:"grid"}}>
      <span style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>{label}</span>
      <span className="vx-body-sm" style={{color:"var(--color-ink)"}}>{text}</span>
    </span>
  </div>;
}

const PANELS={crm:CRMPanel,calendar:CalendarPanel,email:EmailPanel,funnel:FunnelPanel,analytics:AnalyticsPanel,website:WebsitePanel};

Object.assign(window,{Icon,Panel,Pill,Notice,Tile,Aura,ACCENT,CRMPanel,CalendarPanel,EmailPanel,FunnelPanel,AnalyticsPanel,WebsitePanel,PANELS,mono});
