const {Icon:SI,Eyebrow:SEy}=DS;

const FEATURES=[
  ["CRM","crm","CRM & Pipeline Tracking","Track every lead and client without a spreadsheet.","users"],
  ["Calendar","calendar","Calendar & Booking System","Clients book directly into your calendar for calls and sessions.","calendar"],
  ["Email","email","Email & SMS Automation","Automated nurture sequences and reminders sent on schedule.","mail"],
  ["Funnels","funnel","Funnel & Landing Page Builder","Drag-and-drop pages and funnels built for conversion and lead capture.","filter"],
  ["Analytics","analytics","Reporting Dashboard","Track leads, revenue and client activity in real-time.","bar-chart-3"],
  ["Website","website","Website Builder","Your public-facing brand presence built and managed in minutes.","globe"],
];

function Showcase(){
  const narrow=useNarrow();
  const [ref,p]=useProgress(narrow?"through":"sticky");
  const raw=seg(p,0.02,0.99)*FEATURES.length;
  const i=Math.min(FEATURES.length-1,Math.floor(raw));
  const frac=raw-i;                                  /* 0..1 within the current feature */
  const [tab,key,title,copy,icon]=FEATURES[i];
  const Active=PANELS[key];
  const [a1,a2]=ACCENT[key];
  /* the visual transforms rather than swapping: it rotates/scales through each step */
  const tilt=lerp(3.5,-3.5,frac), lift=lerp(18,-18,frac), sc=1-Math.abs(frac-0.5)*0.03;
  return <div ref={ref} data-screen-label="Product showcase" style={{height:narrow?"auto":`${FEATURES.length*95}vh`,position:"relative",background:"var(--color-canvas)",borderBottom:"1px solid var(--color-hairline)"}}>
    <div style={{position:narrow?"static":"sticky",top:0,minHeight:narrow?0:"100vh",display:"grid",alignContent:"center",padding:"clamp(48px,7vh,88px) var(--space-xl)",overflow:"hidden"}}>
      <span aria-hidden="true" style={{position:"absolute",inset:0,background:`radial-gradient(55% 55% at 76% 50%, color-mix(in oklab, ${a1} 22%, transparent), transparent 70%)`,transition:"background 600ms",pointerEvents:"none"}}></span>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",width:"100%",position:"relative"}}>
        <div className="show-grid" style={{display:"grid",gridTemplateColumns:".78fr 1.22fr",gap:"clamp(32px,6vw,80px)",alignItems:"center"}}>
          <div>
            <SEy color="var(--c-cyan)">INSIDE THE PLATFORM</SEy>
            <h2 className="vx-display-md" style={{margin:"var(--space-lg) 0 var(--space-xl)",textWrap:"pretty"}}>Six surfaces. One connected dashboard.</h2>
            <ul style={{listStyle:"none",margin:0,padding:0,display:"grid",gap:6}}>
              {FEATURES.map(([t,k,,,ic],n)=>{
                const on=n===i;
                return <li key={t} style={{display:"flex",alignItems:"center",gap:12,padding:"9px 12px",borderRadius:10,border:"1px solid "+(on?"var(--border-translucent)":"transparent"),background:on?`linear-gradient(90deg, color-mix(in oklab, ${ACCENT[k][0]} 16%, transparent), transparent)`:"transparent",opacity:on?1:.5,transition:"opacity 260ms,background 260ms,border-color 260ms"}}>
                  <Tile icon={ic} size={34} accent={k} glow={on}/>
                  <span className="vx-display-xs" style={{fontSize:17,color:"var(--color-ink)"}}>{t}</span>
                  <span style={{flex:1,height:1,background:on?`linear-gradient(90deg,${ACCENT[k][1]},transparent)`:"transparent"}}></span>
                  {on?<span style={{...mono,fontSize:9,color:ACCENT[k][1]}}>{String(n+1).padStart(2,"0")}/06</span>:null}
                </li>;
              })}
            </ul>
          </div>
          <div style={{display:"grid",gap:"var(--space-lg)",perspective:"1400px"}}>
            <div style={{transform:REDUCED?"none":`translate3d(0,${lift}px,0) rotateX(${tilt}deg) scale(${sc})`,transformStyle:"preserve-3d",willChange:"transform"}}>
              <div key={key} style={{animation:REDUCED?"none":"vxPanelIn 520ms cubic-bezier(.4,0,.2,1)"}}><Active/></div>
            </div>
            {narrow?null:<div style={{display:"flex",gap:14,alignItems:"center"}}>
              <Tile icon={icon} size={40} accent={key}/>
              <div>
                <div className="vx-display-xs">{title}</div>
                <p className="vx-body-sm" style={{color:"var(--color-body-mid)",margin:"4px 0 0",maxWidth:520}}>{copy}</p>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  </div>;
}

Object.assign(window,{Showcase,FEATURES});
