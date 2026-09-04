const {Button:B,Icon:I,Eyebrow:Ey}=DS;

/* ---------- the VelorixAI dashboard mock: sidebar + widgets, fully coloured ---------- */
const DASH_NAV=[["Dashboard","layout-dashboard","analytics"],["CRM","users","crm"],["Funnels","filter","funnel"],["Calendar","calendar","calendar"],["Email","mail","email"],["Website","globe","website"],["Payments","credit-card","payments"]];

function DashboardMock({active=1,compact=false}){
  const [ref,leads]=useCountUp(42,1500);
  const [ref2,rev]=useCountUp(18,1700);
  const bars=[38,52,44,66,58,78,72,92,84,100];
  return <div className="vx-lift" style={{position:"relative",background:"linear-gradient(168deg,#1b1d22,#111216)",border:"1px solid var(--color-hairline)",borderRadius:12,overflow:"hidden","--glow":"color-mix(in oklab, var(--c-violet) 60%, transparent)"}}>
    <span aria-hidden="true" style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,var(--c-cyan),var(--c-violet),transparent)"}}></span>
    <div style={{display:"grid",gridTemplateColumns:compact?"1fr":"188px 1fr"}}>
      {compact?null:<div style={{borderRight:"1px solid var(--color-hairline)",padding:"14px 12px",display:"grid",gap:6,alignContent:"start",background:"rgba(255,255,255,.015)"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,padding:"2px 4px 12px"}}>
          <Tile size={24} accent="ai" radius={999}><span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--tile-fg)"}}>V</span></Tile>
          <span style={{...mono,color:"var(--color-body)",whiteSpace:"nowrap"}}>{window.SITE.brand.nameCaps}</span>
        </div>
        {DASH_NAV.map(([l,ic,acc],i)=>
          <div key={l} style={{display:"flex",alignItems:"center",gap:9,padding:"7px 9px",borderRadius:8,background:i===active?"linear-gradient(90deg,rgba(255,255,255,.09),transparent)":"transparent"}}>
            <Tile icon={ic} size={22} accent={acc} glow={i===active}/>
            <span className="vx-body-sm" style={{color:i===active?"#fff":"var(--color-body-mid)"}}>{l}</span>
            {i===active?<span style={{marginLeft:"auto",width:5,height:5,borderRadius:99,background:"var(--c-cyan)",boxShadow:"0 0 8px var(--c-cyan)"}}></span>:null}
          </div>)}
      </div>}
      <div style={{padding:16,display:"grid",gap:12}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <span className="vx-display-xs" style={{fontSize:16}}>Growth overview</span>
          <Pill dot="var(--c-teal)" tone="var(--c-teal)">SAMPLE</Pill>
          <span style={{flex:1}}></span>
          <Pill>LAST 30 DAYS</Pill>
        </div>
        <div ref={ref} style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
          {[["New leads",leads.toLocaleString(),"var(--c-cyan)","LAST 30 DAYS"],["Calls booked","8","var(--c-violet)","THIS WEEK"],["Growth","+"+rev+"%","var(--c-gold)","VS LAST MONTH"]].map(([l,v,c,d])=>
            <div key={l} style={{border:"1px solid var(--color-hairline)",borderRadius:10,padding:"11px 12px",background:`linear-gradient(160deg, color-mix(in oklab, ${c} 16%, transparent), rgba(11,22,48,.6))`}}>
              <div style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>{l}</div>
              <div style={{fontFamily:"var(--font-mono)",fontSize:20,letterSpacing:"-0.6px",marginTop:3,color:"#fff"}}>{v}</div>
              <div style={{...mono,fontSize:9,color:"var(--brand-yellow)",marginTop:4}}>{d}</div>
            </div>)}
        </div>
        <div style={{display:"grid",gridTemplateColumns:compact?"1fr":"1.35fr .65fr",gap:10}}>
          <div ref={ref2} style={{border:"1px solid var(--color-hairline)",borderRadius:10,padding:"12px 14px",background:"rgba(255,255,255,.02)"}}>
            <div style={{display:"flex",justifyContent:"space-between",...mono,fontSize:10,color:"var(--color-body-mid)"}}><span>PIPELINE VALUE</span><span style={{color:"var(--c-cyan)"}}>WEEKLY</span></div>
            <div style={{display:"flex",alignItems:"flex-end",gap:6,height:86,marginTop:12}}>
              {bars.map((h,i)=><span key={i} style={{flex:1,height:`${h}%`,borderRadius:4,background:`linear-gradient(180deg, ${i>6?"var(--c-cyan)":"var(--c-violet)"}, color-mix(in oklab, var(--c-indigo) 45%, #0a0a0a))`,boxShadow:i===bars.length-1?"0 0 18px -4px var(--c-cyan)":"none"}}></span>)}
            </div>
          </div>
          {compact?null:<div style={{border:"1px solid var(--color-hairline)",borderRadius:10,padding:"12px",background:"rgba(255,255,255,.02)",display:"grid",gap:9,alignContent:"start"}}>
            <div style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>AUTOMATIONS</div>
            {[["WhatsApp follow-up","whatsapp","message-circle"],["Lead scoring","ai","sparkles"],["Payment reminder","payments","credit-card"]].map(([l,acc,ic])=>
              <div key={l} style={{display:"flex",alignItems:"center",gap:8}}>
                <Tile icon={ic} size={22} accent={acc} glow={false}/>
                <span className="vx-body-sm" style={{fontSize:12,color:"var(--color-body)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{l}</span>
                <span style={{marginLeft:"auto",width:22,height:12,borderRadius:99,background:"linear-gradient(90deg,var(--c-teal),var(--c-cyan))",position:"relative"}}><span style={{position:"absolute",right:1,top:1,width:10,height:10,borderRadius:99,background:"#fff"}}></span></span>
              </div>)}
          </div>}
        </div>
      </div>
    </div>
  </div>;
}

/* ---------- hero backdrop: glows, grid, rotating ring, particles ---------- */
function HeroBackdrop({p}){
  return <React.Fragment>
    <span aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(120% 80% at 50% 6%, color-mix(in oklab, var(--c-indigo) 26%, transparent), transparent 60%), radial-gradient(80% 60% at 12% 30%, color-mix(in oklab, var(--c-violet) 22%, transparent), transparent 65%), radial-gradient(70% 60% at 88% 42%, color-mix(in oklab, var(--c-cyan) 16%, transparent), transparent 62%)",pointerEvents:"none"}}></span>
    <span aria-hidden="true" style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",backgroundSize:"72px 72px",maskImage:"radial-gradient(90% 70% at 50% 20%,#000,transparent 75%)",WebkitMaskImage:"radial-gradient(90% 70% at 50% 20%,#000,transparent 75%)",pointerEvents:"none"}}></span>
    <svg aria-hidden="true" viewBox="0 0 800 800" style={{position:"absolute",left:"50%",top:"58%",width:"min(160%,1280px)",transform:`translate(-50%,-50%) rotate(${p*30}deg)`,opacity:.75,pointerEvents:"none"}}>
      <defs>
        <linearGradient id="ringA" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7c3aed" stopOpacity=".9"/><stop offset="50%" stopColor="#22d3ee" stopOpacity=".55"/><stop offset="100%" stopColor="#ff7a17" stopOpacity=".35"/></linearGradient>
      </defs>
      {[200,280,360].map((r,i)=><circle key={r} cx="400" cy="400" r={r} fill="none" stroke="url(#ringA)" strokeWidth={i===1?"1.4":"0.8"} strokeDasharray={i===2?"3 10":"none"} opacity={.7-i*.15}/>)}
      {Array.from({length:36}).map((_,i)=>{const a=(i/36)*Math.PI*2;return <line key={i} x1={400+Math.cos(a)*360} y1={400+Math.sin(a)*360} x2={400+Math.cos(a)*372} y2={400+Math.sin(a)*372} stroke="url(#ringA)" strokeWidth="1.4" opacity=".55"/>})}
    </svg>
    {REDUCED?null:<span aria-hidden="true" style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}}>
      {Array.from({length:6}).map((_,i)=>{
        const c=["var(--c-cyan)","var(--c-violet)","var(--c-gold)"][i%3];
        return <span key={i} style={{position:"absolute",left:`${(i*37)%100}%`,bottom:`${(i*13)%40}%`,width:3,height:3,borderRadius:99,background:c,boxShadow:`0 0 10px ${c}`,opacity:.6,animation:`vxRise ${7+(i%5)}s linear ${i*0.7}s infinite`}}></span>;
      })}
    </span>}
  </React.Fragment>;
}

function Hero(){
  const [ref,p]=useProgress("through");
  const s=REDUCED?0.5:p;
  const up=(s-0.5)*2;
  const [load,setLoad]=React.useState(false);
  React.useEffect(()=>{const t=setTimeout(()=>setLoad(true),90);return()=>clearTimeout(t)},[]);
  const enter=(d,y=28)=>({opacity:load?1:0,transform:load?"none":`translate3d(0,${y}px,0)`,transition:`opacity 900ms cubic-bezier(.4,0,.2,1) ${d}ms, transform 900ms cubic-bezier(.4,0,.2,1) ${d}ms`});
  const par=(v,h=0)=>({transform:`translate3d(${-up*h}px,${-up*v}px,0) scale(${1-Math.abs(up)*0.02})`,willChange:"transform"});

  return <section id="top" ref={ref} style={{position:"relative",overflow:"hidden",borderBottom:"1px solid var(--color-hairline)",padding:"clamp(40px,6vw,80px) var(--space-xl) clamp(80px,10vw,140px)",background:"var(--color-canvas)"}}>
    <HeroBackdrop p={s}/>
    <div style={{maxWidth:"var(--container-max)",margin:"0 auto",position:"relative",zIndex:2}}>
      <div style={{maxWidth:1040,display:"grid",gap:"var(--space-xl)",justifyItems:"start"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,...enter(0,16)}}>
          <Tile icon="sparkles" size={30} accent="ai" radius={999}/>
          <Ey color="var(--color-body)">AI BUSINESS GROWTH PLATFORM</Ey>
        </div>
        <h1 className="vx-display-xl" style={{margin:0,color:"var(--color-ink)",textWrap:"pretty",...enter(90)}}>Launch Your Coaching or Agency Business in 2&nbsp;Hours, and Keep Growing It.</h1>
        <p className="vx-body-lg" style={{margin:0,color:"var(--color-body)",maxWidth:680,...enter(200)}}>Everything you need to launch, market, manage and grow your business, powered by AI in one connected platform.</p>
        <div style={{display:"flex",gap:"var(--space-md)",flexWrap:"wrap",alignItems:"center",...enter(300)}}>
          <a href="#demo" className="vx-cta">BOOK YOUR FREE DEMO</a>
          <B href="#how-it-works">SEE HOW IT WORKS</B>
        </div>
        <div style={{display:"flex",gap:"var(--space-xl)",flexWrap:"wrap",paddingTop:"var(--space-sm)",...enter(400)}}>
          {window.SITE.hero.points.map(([t,ic,acc])=>
            <span key={t} style={{display:"flex",alignItems:"center",gap:9,...mono,color:"var(--color-body)"}}><Tile icon={ic} size={24} accent={acc} glow={false}/><span style={{whiteSpace:"nowrap"}}>{t}</span></span>)}
        </div>
      </div>
    </div>

    <div className="hero-stage" style={{position:"relative",maxWidth:1280,margin:"clamp(44px,6vw,80px) auto 0",zIndex:3,...enter(520,44)}}>
      <Aura accent="ai" size="86%" opacity={.55} style={{top:"46%"}}/>
      <div className="hero-core" style={{position:"relative",zIndex:3,width:"min(100%,760px)",margin:"0 auto",...par(46)}}>
        <DashboardMock active={0}/>
      </div>
      <div className="hero-float f1" style={par(96,-26)}><CRMPanel t={s*2}/></div>
      <div className="hero-float f2" style={par(72,26)}><CalendarPanel/></div>
      <div className="hero-float f3" style={par(124,18)}><Notice icon="bell" label="New lead" text="Sarah M. booked a call" accent="crm"/></div>
      <div className="hero-float f4" style={par(108,-18)}><Notice icon="message-circle" label="Automation" text="WhatsApp follow-up sent" accent="whatsapp"/></div>
      <div className="hero-float f5" style={par(84)}><LiveMetric/></div>
      <div className="hero-float f6" style={par(140,-10)}><Notice icon="credit-card" label="Invoice" text="Payment received" accent="payments"/></div>
    </div>
  </section>;
}

function LiveMetric(){
  const [v,setV]=React.useState(42);
  React.useEffect(()=>{if(REDUCED)return;const t=setInterval(()=>setV(x=>x+Math.floor(Math.random()*3)),2400);return()=>clearInterval(t)},[]);
  return <div className="vx-lift" style={{padding:"14px 18px",background:"linear-gradient(160deg,rgba(25,25,25,.96),rgba(16,17,20,.96))",border:"1px solid var(--color-hairline)",borderRadius:"var(--radius-sm)",display:"flex",gap:14,alignItems:"center","--glow":"color-mix(in oklab, var(--c-cyan) 60%, transparent)"}}>
    <Tile icon="trending-up" size={34} accent="analytics"/>
    <span style={{display:"grid",gap:2}}>
      <span style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>New leads · 30 days</span>
      <span style={{fontFamily:"var(--font-mono)",fontSize:26,letterSpacing:"-0.6px",color:"#fff"}}>{v.toLocaleString()}</span>
    </span>
  </div>;
}

Object.assign(window,{Hero,HeroBackdrop,DashboardMock,LiveMetric});
