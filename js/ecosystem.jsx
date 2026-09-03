const {Icon:EI,Eyebrow:EEy}=DS;

const ORBIT=[
  ["CRM","users","crm","Every lead and client tracked without a spreadsheet."],
  ["ANALYTICS","bar-chart-3","analytics","Leads, revenue and client activity in real time."],
  ["CALENDAR","calendar","calendar","Clients book straight into your calendar."],
  ["EMAIL","mail","email","Nurture sequences and reminders sent on schedule."],
  ["FUNNEL","filter","funnel","Drag-and-drop pages built for conversion."],
  ["WEBSITE","globe","website","Your public brand presence, live in minutes."],
];
const PANEL_OF={crm:"crm",analytics:"analytics",calendar:"calendar",email:"email",funnel:"funnel",website:"website"};

function Ecosystem(){
  const narrow=useNarrow();
  const [ref,p]=useProgress(narrow?"through":"sticky");
  const rot=p*84;
  const idx=Math.min(ORBIT.length-1,Math.floor(seg(p,0.04,0.98)*ORBIT.length));
  const [label,icon,accentKey,blurb]=ORBIT[idx];
  const ActivePanel=PANELS[PANEL_OF[accentKey]];
  const [a1,a2]=ACCENT[accentKey];
  return <div id="features" ref={ref} data-screen-label="Ecosystem" style={{height:narrow?"auto":"460vh",position:"relative",background:"linear-gradient(180deg,var(--color-canvas),var(--deep-2) 40%,var(--deep) 100%)",borderBottom:"1px solid var(--color-hairline)"}}>
    <div style={{position:narrow?"static":"sticky",top:0,minHeight:narrow?0:"100vh",display:"grid",alignContent:"center",overflow:"hidden",padding:"clamp(48px,7vh,88px) var(--space-xl)"}}>
      <div className="eco-photo" aria-hidden="false" style={{position:"absolute",left:"-6%",bottom:"-8%",width:"min(42%,520px)",height:"min(64%,520px)",opacity:.34,pointerEvents:"none"}}>
        <Photo id="eco-context" placeholder="Business owner in their workspace" mask="polygon(0 0,100% 12%,86% 100%,0 100%)" grade="cool"/>
      </div>
      <span aria-hidden="true" style={{position:"absolute",inset:0,background:`radial-gradient(50% 45% at 28% 55%, color-mix(in oklab, ${a1} 24%, transparent), transparent 70%)`,transition:"background 500ms",pointerEvents:"none"}}></span>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",width:"100%",position:"relative"}}>
        <Head eyebrow="THE ECOSYSTEM" title="Everything your business needs. One intelligent platform." max={720}/>
        <div className="eco-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(28px,5vw,64px)",alignItems:"center",marginTop:"clamp(28px,4vw,48px)"}}>
          <div style={{position:"relative",aspectRatio:"1",maxWidth:narrow?300:520,margin:"0 auto",width:"100%"}}>
            <svg viewBox="0 0 200 200" aria-hidden="true" style={{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"}}>
              <defs>
                <linearGradient id="orbA" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#22d3ee" stopOpacity=".9"/><stop offset="100%" stopColor="#7c3aed" stopOpacity=".5"/></linearGradient>
                <linearGradient id="orbB" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#ff7a17" stopOpacity=".7"/><stop offset="100%" stopColor="#7c3aed" stopOpacity=".2"/></linearGradient>
              </defs>
              <circle cx="100" cy="100" r="78" fill="none" stroke="url(#orbA)" strokeWidth="0.7" opacity=".8"/>
              <circle cx="100" cy="100" r="58" fill="none" stroke="url(#orbB)" strokeWidth="0.6" strokeDasharray="1.5 4" opacity=".8"/>
              {ORBIT.map((o,i)=>{
                const a=((i/ORBIT.length)*360+rot-90)*Math.PI/180;
                const x=100+Math.cos(a)*78,y=100+Math.sin(a)*78;
                const [c1,c2]=ACCENT[o[2]];
                return <line key={o[0]} x1="100" y1="100" x2={x} y2={y} stroke={i===idx?c2:"rgba(255,255,255,0.12)"} strokeWidth={i===idx?"1":"0.4"} strokeDasharray={i===idx?"3 3":"none"} style={{animation:i===idx&&!REDUCED?"vxDash 6s linear infinite":"none"}}/>;
              })}
              <circle cx="100" cy="100" r="92" fill="none" stroke="#fff" strokeWidth="0.8" strokeDasharray={`${p*578} 578`} transform="rotate(-90 100 100)" opacity=".55"/>
            </svg>
            <div style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:"46%",aspectRatio:"1"}}>
              <Aura accent={accentKey} size="180%" opacity={.9}/>
              <div style={{position:"relative",width:"100%",height:"100%",borderRadius:"var(--radius-full)",border:"1px solid var(--border-translucent)",background:"linear-gradient(168deg,rgba(28,30,36,.96),rgba(14,15,19,.96))",display:"grid",placeItems:"center",textAlign:"center",boxShadow:"0 24px 70px -30px rgba(124,58,237,.8)"}}>
                <div>
                  <Tile size={38} accent="ai" radius={999} style={{margin:"0 auto 8px"}}><span style={{fontFamily:"var(--font-mono)",fontSize:16,color:"#fff"}}>V</span></Tile>
                  <div className="vx-display-xs" style={{fontSize:17}}>Velorix AI</div>
                  <div style={{...mono,fontSize:10,color:a2,marginTop:4}}>{label}</div>
                </div>
              </div>
            </div>
            {ORBIT.map((o,i)=>{
              const a=((i/ORBIT.length)*360+rot-90)*Math.PI/180;
              const on=i===idx;
              return <div key={o[0]} style={{position:"absolute",left:`${50+Math.cos(a)*39}%`,top:`${50+Math.sin(a)*39}%`,transform:`translate(-50%,-50%) scale(${on?1.22:0.94})`,transition:"transform 340ms cubic-bezier(.4,0,.2,1)"}}>
                <div style={{display:"grid",placeItems:"center",gap:7}}>
                  <Tile icon={o[1]} size={54} accent={o[2]} glow={on} style={{opacity:on?1:.72,boxShadow:on?`0 12px 40px -8px ${ACCENT[o[2]][1]}`:"none"}}/>
                  <span style={{...mono,fontSize:10,color:on?"#fff":"var(--color-body-mid)",whiteSpace:"nowrap"}}>{o[0]}</span>
                </div>
              </div>;
            })}
          </div>
          <div style={{display:"grid",gap:"var(--space-lg)"}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <Tile icon={icon} size={38} accent={accentKey}/>
              <div>
                <EEy color={a2}>NOW SHOWING · {label}</EEy>
                <p className="vx-body-md" style={{color:"var(--color-ink)",margin:"4px 0 0",maxWidth:420}}>{blurb}</p>
              </div>
            </div>
            <div key={accentKey} style={{animation:REDUCED?"none":"vxPanelIn 460ms cubic-bezier(.4,0,.2,1)"}}><ActivePanel/></div>
            <div style={{display:"flex",gap:6}}>
              {ORBIT.map((o,i)=><span key={o[0]} style={{flex:1,height:3,borderRadius:99,background:i<=idx?`linear-gradient(90deg,${ACCENT[o[2]][0]},${ACCENT[o[2]][1]})`:"rgba(255,255,255,.12)",transition:"background 300ms"}}></span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

Object.assign(window,{Ecosystem,ORBIT});
