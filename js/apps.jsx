const {Icon:GI,Eyebrow:GEy}=DS;

/* Apps — an editorial index, not eight identical cards: two rules-and-numbers
   columns beside one tall photograph with a live product moment on it. */
const APPS=[
  ["Funnel & Landing Page Builder","filter","funnel"],
  ["CRM & Pipeline Tracking","users","crm"],
  ["Course & Membership Hosting","graduation-cap","clients"],
  ["Calendar & Booking System","calendar","calendar"],
  ["Email & SMS Automation","mail","email"],
  ["Payments & Invoicing","credit-card","payments"],
  ["Website Builder","globe","website"],
  ["Reporting Dashboard","bar-chart-3","analytics"],
];

function Apps(){
  const [ref,p]=useProgress("through");
  const d=(p-0.5)*2;
  return <Shell label="Apps">
    <div className="apps-wrap" style={{display:"grid",gridTemplateColumns:"1.35fr .65fr",gap:"clamp(32px,6vw,88px)",alignItems:"start"}}>
      <div>
        <Reveal><Head eyebrow="WHAT IS INCLUDED" title="20+ apps. One dashboard. Zero tool chaos." lead="VelorixAI puts about 20 AI-powered apps in one dashboard, so you can launch and run your coaching or agency business without hiring a tech team or juggling a dozen tools." max={620}/></Reveal>
        <div className="apps-index" style={{marginTop:"clamp(28px,4vw,48px)",display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"clamp(28px,4vw,56px)"}}>
          {APPS.map(([name,icon,acc],n)=>
            <Reveal key={name} delay={(n%2)*70} className="app-row" style={{display:"flex",alignItems:"center",gap:14,padding:"var(--space-lg) 0",borderTop:"1px solid var(--color-hairline)"}}>
              <span style={{...mono,fontSize:10,color:"var(--color-body-mid)",width:20,flexShrink:0}}>{String(n+1).padStart(2,"0")}</span>
              <Tile icon={icon} size={32} accent={acc}/>
              <span className="vx-body-md" style={{color:"var(--color-ink)",textWrap:"pretty"}}>{name}</span>
            </Reveal>)}
        </div>
      </div>
      <div ref={ref} className="apps-photo" style={{position:"relative",transform:`translate3d(0,${-d*44}px,0)`,willChange:"transform"}}>
        <Photo id="apps-desk" ratio="3 / 4.6" radius={18} placeholder="Business owner at their desk, one screen open"/>
        <div className="scene-ui c" style={{transform:`translate3d(0,${d*28}px,0)`}}><LeadMoment name="Priya Shah" stage="Proposal sent" when="Yesterday"/></div>
        <div className="scene-ui d" style={{transform:`translate3d(0,${-d*24}px,0)`}}><StatMoment value="One login" label="Twenty apps" accent="ai" icon="layout-grid"/></div>
        <DemoNote/>
      </div>
    </div>
  </Shell>;
}

Object.assign(window,{Apps,APPS});
