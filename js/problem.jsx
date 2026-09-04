const {Icon:PI,Eyebrow:PEy,Button:PB}=DS;

const TOOLS=[
  ["CRM","users","crm",-38,-30],["EMAIL","mail","email",34,-36],["CALENDAR","calendar","calendar",-46,4],
  ["FUNNEL","filter","funnel",44,2],["WEBSITE","globe","website",-30,34],["WHATSAPP","message-circle","whatsapp",30,36],
  ["PAYMENTS","credit-card","payments",-8,-44],["ANALYTICS","bar-chart-3","analytics",8,46],
  ["AUTOMATION","workflow","automation",48,-14],["CLIENTS","contact","clients",-48,-8],
];

function ToolChip({label,icon,accent,x,y,t,i}){
  const e=ease(t);
  const drift=REDUCED?0:Math.sin((i*1.7)+t*6)*3.2*(1-e);
  const tx=lerp(x,0,e), ty=lerp(y,0,e)+drift;
  return <div style={{position:"absolute",left:"50%",top:"50%",transform:`translate3d(calc(-50% + ${tx}%), calc(-50% + ${ty}%), 0) scale(${lerp(1,0.5,e)}) rotate(${lerp(0,i%2?12:-12,e)}deg)`,opacity:lerp(1,0,clamp((t-0.74)/0.26)),willChange:"transform"}}>
    <div className="vx-lift" style={{display:"flex",alignItems:"center",gap:9,padding:"7px 14px 7px 8px",borderRadius:"var(--radius-full)",border:"1px solid var(--color-hairline)",background:"linear-gradient(180deg,rgba(25,25,25,.95),rgba(15,16,19,.95))",whiteSpace:"nowrap"}}>
      <Tile icon={icon} size={28} accent={accent} radius={999}/>
      <span style={{...mono,color:"var(--color-body)"}}>{label}</span>
    </div>
  </div>;
}

function Converge(){
  const narrow=useNarrow();
  const [ref,p]=useProgress("sticky");
  const t=seg(p,0.08,0.78);
  const core=seg(p,0.58,0.95);
  return <div ref={ref} style={{height:narrow?"240vh":"320vh",position:"relative",background:"linear-gradient(180deg,var(--color-canvas),var(--deep) 55%,var(--color-canvas))",borderBottom:"1px solid var(--color-hairline)"}}>
    <div style={{position:"sticky",top:0,height:"100vh",display:"grid",placeItems:"center",overflow:"hidden"}}>
      <span aria-hidden="true" style={{position:"absolute",inset:0,background:`radial-gradient(60% 50% at 50% 50%, color-mix(in oklab, var(--c-violet) ${18+core*22}%, transparent), transparent 70%)`,pointerEvents:"none"}}></span>
      <div style={{position:"absolute",top:"clamp(24px,6vh,64px)",left:0,right:0,textAlign:"center",padding:"0 var(--space-xl)",zIndex:5}}>
        <PEy color={t<0.5?"var(--c-gold-soft)":"var(--c-cyan)"}>{t<0.5?"TEN DISCONNECTED TOOLS":"ONE CONNECTED SYSTEM"}</PEy>
        <p className="vx-body-md" style={{color:"var(--color-body-mid)",marginTop:8}}>Keep scrolling</p>
      </div>
      <div style={{position:"relative",width:"min(92vw,940px,116vh)",aspectRatio:"1 / 0.78"}}>
        <div aria-hidden="true" style={{position:"absolute",left:"50%",top:"50%",width:"min(46%,340px)",transform:"translate(-50%,-50%)",opacity:lerp(0.7,0.12,ease(t)),transition:"opacity 200ms"}}>
          <Photo id="chaos-person" ratio="3 / 3.6" radius={16} placeholder="Business owner surrounded by too many tools"/>
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
          <defs><linearGradient id="cLine" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#22d3ee"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
          {TOOLS.map(([l,ic,acc,x,y],i)=>{
            const e=ease(t);const X=50+lerp(x,0,e),Y=50+lerp(y,0,e);
            return <line key={l} x1={X} y1={Y} x2="50" y2="50" stroke="url(#cLine)" strokeWidth="0.35" strokeDasharray="1.4 1.8" style={{opacity:clamp(t*1.7)*0.9}}/>;
          })}
        </svg>
        {TOOLS.map(([l,ic,acc,x,y],i)=><ToolChip key={l} label={l} icon={ic} accent={acc} x={x} y={y} t={t} i={i}/>)}
        <div style={{position:"absolute",left:"50%",top:"50%",transform:`translate(-50%,-50%) scale(${lerp(0.72,1,ease(core))})`,opacity:core,textAlign:"center",width:"min(84vw,520px)"}}>
          <Aura accent="ai" size="150%" opacity={.85}/>
          <div className="vx-lift" style={{position:"relative",padding:"clamp(20px,3vw,32px)",border:"1px solid var(--border-translucent)",borderRadius:12,background:"linear-gradient(168deg,#1b1d22,#111216)"}}>
            <span aria-hidden="true" style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,var(--c-cyan),var(--c-violet),transparent)"}}></span>
            <div style={{display:"flex",alignItems:"center",gap:12,justifyContent:"center"}}>
              <Tile size={40} accent="ai" radius={999}><span style={{fontFamily:"var(--font-mono)",fontSize:17,color:"var(--tile-fg)"}}>V</span></Tile>
              <div className="vx-display-sm" style={{letterSpacing:"-0.6px",whiteSpace:"nowrap"}}>{window.SITE.brand.name}</div>
            </div>
            <p className="vx-body-sm" style={{color:"var(--color-body)",margin:"var(--space-md) 0 var(--space-lg)"}}>One login. One dashboard. {window.SITE.apps.length}+ connected apps.</p>
            <div style={{display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap"}}>
              {TOOLS.slice(0,6).map(([l,ic,acc])=><Tile key={l} icon={ic} size={30} accent={acc}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

function Problem(){
  const bullets=[
    ["Stop paying for 6-10 separate tools that don’t sync with each other","layers","funnel"],
    ["Skip the learning curve of hiring or managing a developer","code","clients"],
    ["Launch offers, funnels and client portals the same day you sign up","rocket","gold"],
    ["Manage your whole business from one dashboard: leads, clients and payments","layout-dashboard","crm"],
    ["Scale to a full agency setup without rebuilding your tech from scratch","trending-up","analytics"],
  ];
  return <React.Fragment>
    <Shell id="platform" label="Problem">
      <div className="split-2" style={{display:"grid",gridTemplateColumns:"1.05fr .95fr",gap:"clamp(32px,6vw,80px)",alignItems:"start"}}>
        <Reveal><Head eyebrow="THE PROBLEM" title="Your business shouldn’t require 10 different tools." lead="Most coaches and agency owners lose weeks stitching together a website builder, a CRM, an email tool, a course platform and a scheduling app that refuse to talk to each other. VelorixAI replaces that entire stack with one connected system."/></Reveal>
        <Reveal delay={120}>
          <p className="vx-body-lg" style={{color:"var(--color-ink)",margin:"0 0 var(--space-xl)"}}>Everything you need to sell, deliver and support your clients, live in a single login.</p>
          <ul style={{listStyle:"none",margin:0,padding:0,display:"grid",gap:"var(--space-md)"}}>
            {bullets.map(([b,ic,acc])=><li key={b} className="vx-lift" style={{display:"flex",gap:14,alignItems:"center",border:"1px solid var(--color-hairline)",borderRadius:10,padding:"var(--space-md) var(--space-lg)",background:"rgba(255,255,255,.02)"}}>
              <Tile icon={ic} size={34} accent={acc}/>
              <span className="vx-body-md" style={{color:"var(--color-body)"}}>{b}</span>
            </li>)}
          </ul>
        </Reveal>
      </div>
    </Shell>
    <Converge/>
  </React.Fragment>;
}

Object.assign(window,{Problem,Converge,TOOLS});
