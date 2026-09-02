const {Icon:AI2,Eyebrow:AEy2}=DS;

function Automation(){
  const narrow=useNarrow();
  const [ref,p]=useProgress(narrow?"through":"sticky");
  const t=seg(p,0.05,0.95);
  const active=Math.min(FLOW.length-1,Math.floor(t*FLOW.length));
  const [a1,a2]=ACCENT[FLOW[active][2]];
  return <div id="how-it-works" ref={ref} data-screen-label="AI automation" style={{height:narrow?"auto":"420vh",position:"relative",background:"linear-gradient(180deg,var(--color-canvas),var(--deep-2) 60%,var(--color-canvas))",borderBottom:"1px solid var(--color-hairline)"}}>
    <div style={{position:narrow?"static":"sticky",top:0,minHeight:narrow?0:"100vh",display:"grid",alignContent:"center",padding:"clamp(48px,7vh,88px) var(--space-xl)",overflow:"hidden"}}>
      <span aria-hidden="true" style={{position:"absolute",inset:0,background:`radial-gradient(55% 50% at 72% 50%, color-mix(in oklab, ${a1} 22%, transparent), transparent 70%)`,transition:"background 600ms",pointerEvents:"none"}}></span>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",width:"100%",position:"relative"}}>
        <div className="split-2" style={{display:"grid",gridTemplateColumns:".85fr 1.15fr",gap:"clamp(32px,6vw,80px)",alignItems:"center"}}>
          <div>
            <AEy2 color="var(--c-violet-soft)">AI AUTOMATION</AEy2>
            <h2 className="vx-display-md" style={{margin:"var(--space-lg) 0",textWrap:"pretty"}}>A lead arrives. The system does the rest.</h2>
            <p className="vx-body-lg" style={{color:"var(--color-body)",margin:0,maxWidth:420}}>Smart AI tools find and qualify your ideal clients 24/7 while you focus on delivering results. Email sequences, WhatsApp follow-ups and lead nurturing run on complete autopilot.</p>
            <div className="vx-lift" style={{marginTop:"var(--space-2xl)",border:"1px solid var(--color-hairline)",borderRadius:12,padding:"var(--space-lg)",background:"linear-gradient(168deg,rgba(28,30,36,.9),rgba(15,16,20,.9))",maxWidth:360,display:narrow?"none":"block","--glow":`color-mix(in oklab, ${a2} 60%, transparent)`}}>
              {narrow?null:<EventCard i={active}/>}
            </div>
            <div style={{marginTop:"var(--space-xl)",display:"flex",gap:"var(--space-lg)",alignItems:"center"}}>
              <span style={{...mono,color:"var(--color-body-mid)"}}>STEP {String(active+1).padStart(2,"0")} / 07</span>
              <span style={{flex:1,height:2,borderRadius:99,background:"rgba(255,255,255,0.1)",position:"relative"}}><span style={{position:"absolute",inset:0,width:`${t*100}%`,borderRadius:99,background:"linear-gradient(90deg,var(--c-violet),var(--c-cyan))"}}></span></span>
            </div>
          </div>
          <div style={{position:"relative",display:"grid",gap:"var(--space-md)"}}>
            <span aria-hidden="true" style={{position:"absolute",left:29,top:24,bottom:24,width:2,borderRadius:99,background:"rgba(255,255,255,0.09)"}}></span>
            <span aria-hidden="true" style={{position:"absolute",left:29,top:24,height:`calc(${t*100}% - 48px)`,width:2,borderRadius:99,background:"linear-gradient(180deg,var(--c-violet),var(--c-cyan),var(--c-teal))"}}></span>
            {FLOW.map(([label,icon,acc,event],i)=>{
              const on=i===active, past=i<active;
              const [c1,c2]=ACCENT[acc];
              return <div key={label} className={on?"vx-lift":""} style={{position:"relative",display:"flex",alignItems:"center",gap:"var(--space-lg)",padding:"8px 14px 8px 8px",borderRadius:"var(--radius-full)",border:"1px solid "+(on?"var(--border-translucent)":"transparent"),background:on?`linear-gradient(90deg, color-mix(in oklab, ${c1} 18%, transparent), rgba(20,21,25,.5))`:"transparent",opacity:on?1:past?.8:.4,transition:"opacity 260ms,background 300ms"}}>
                <Tile icon={icon} size={narrow?42:54} accent={acc} glow={on} radius={999} style={{boxShadow:on?`0 12px 40px -10px ${c2}`:"none"}}/>
                <span style={{display:"grid",gap:2,minWidth:0}}>
                  <span style={{...mono,color:"#fff"}}>{label}</span>
                  <span className="vx-body-sm" style={{color:"var(--color-body-mid)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{event}</span>
                </span>
                {on?<span style={{marginLeft:"auto"}}><Pill dot={c2} tone={c2}>RUNNING</Pill></span>:past?<span style={{marginLeft:"auto",color:"var(--c-teal)"}}><AI2 name="check" size={15}/></span>:null}
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  </div>;
}
Object.assign(window,{Automation});
