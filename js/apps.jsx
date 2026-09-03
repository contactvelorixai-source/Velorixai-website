const {Icon:GI,Eyebrow:GEy}=DS;

/* Apps — an editorial index driven entirely by site/config.js.
   The package tabs switch the list; counts are derived, never typed by hand. */
function Apps(){
  const S=window.SITE;
  const [ref,p]=useProgress("through");
  const d=(p-0.5)*2;
  const [tab,setTab]=React.useState("all");
  const pkgs=S.packages;
  const list=tab==="all"?S.apps:packageApps(pkgs.find(x=>x.id===tab));
  const tabs=[["all","All current apps",S.apps.length],...pkgs.map(k=>[k.id,k.name,appCount(k)])];

  return <Shell label="Apps">
    <div className="apps-wrap" style={{display:"grid",gridTemplateColumns:"1.35fr .65fr",gap:"clamp(32px,6vw,88px)",alignItems:"start"}}>
      <div>
        <Reveal><Head eyebrow="WHAT IS INCLUDED" title={`${S.apps.length}+ apps. One dashboard. Zero tool chaos.`} lead={`${S.brand.name} puts ${S.apps.length}+ AI-powered apps in one dashboard, so you can launch and run your coaching or agency business without hiring a tech team or juggling a dozen tools.`} max={620}/></Reveal>

        <Reveal delay={60} className="app-tabs" role="tablist" aria-label="Choose a package" style={{display:"flex",gap:"var(--space-sm)",flexWrap:"wrap",marginTop:"clamp(24px,3.4vw,36px)"}}>
          {tabs.map(([id,label,n])=>{
            const on=tab===id;
            return <button key={id} type="button" role="tab" aria-selected={on} data-no-lead onClick={()=>setTab(id)}
              style={{display:"inline-flex",alignItems:"center",gap:9,padding:"9px 16px",borderRadius:999,cursor:"pointer",font:"inherit",fontSize:13,whiteSpace:"nowrap",
                border:"1px solid "+(on?"var(--border-translucent-strong)":"var(--border-translucent)"),
                background:on?"linear-gradient(135deg,color-mix(in oklab,var(--c-violet) 30%,transparent),color-mix(in oklab,var(--c-cyan) 22%,transparent))":"rgba(255,255,255,.04)",
                color:on?"#fff":"var(--color-body)",transition:"background 200ms cubic-bezier(.4,0,.2,1),border-color 200ms,color 200ms"}}>
              {label}
              <span style={{...mono,fontSize:10,padding:"2px 8px",borderRadius:999,background:"rgba(255,255,255,.1)",color:on?"#fff":"var(--color-body-mid)",whiteSpace:"nowrap"}}>{n}</span>
            </button>;
          })}
        </Reveal>

        <div className="apps-index" key={tab} style={{marginTop:"clamp(20px,3vw,32px)",display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"clamp(28px,4vw,56px)"}}>
          {list.map((a,n)=>
            <Reveal key={a.id} delay={(n%2)*60} className="app-row" style={{display:"flex",alignItems:"flex-start",gap:14,padding:"var(--space-lg) 0",borderTop:"1px solid var(--color-hairline)"}}>
              <span style={{...mono,fontSize:10,color:"var(--color-body-mid)",width:20,flexShrink:0,paddingTop:9}}>{String(n+1).padStart(2,"0")}</span>
              <Tile icon={a.icon} size={32} accent={a.accent}/>
              <span style={{display:"grid",gap:3,minWidth:0}}>
                <span className="vx-body-md" style={{color:"var(--color-ink)",textWrap:"pretty"}}>{a.name}</span>
                <span className="vx-body-sm" style={{color:"var(--color-body-mid)",fontSize:13,lineHeight:"19px",textWrap:"pretty"}}>{a.desc}</span>
              </span>
            </Reveal>)}
        </div>
      </div>
      <div ref={ref} className="apps-photo" style={{transform:`translate3d(0,${-d*44}px,0)`,willChange:"transform"}}>
        <Photo id="apps-desk" ratio="3 / 4.6" radius={18} placeholder="Business owner at their desk, one screen open"/>
        <div className="scene-ui c" style={{transform:`translate3d(0,${d*28}px,0)`}}><LeadMoment name="Priya Shah" stage="Proposal sent" when="Yesterday"/></div>
        <div className="scene-ui d" style={{transform:`translate3d(0,${-d*24}px,0)`}}><StatMoment value="One login" label={`${S.apps.length}+ apps`} accent="ai" icon="layout-grid"/></div>
        <DemoNote/>
      </div>
    </div>
  </Shell>;
}

/* Upcoming apps — clearly separate, never counted in a package total. */
function UpcomingApps(){
  const S=window.SITE;
  if(!S.upcomingApps||!S.upcomingApps.length)return null;
  return <Shell label="Upcoming apps" style={{paddingTop:0}}>
    <Reveal style={{display:"flex",alignItems:"center",gap:12,marginBottom:"var(--space-lg)"}}>
      <Tile icon="sparkles" size={34} accent="ai"/>
      <GEy color="var(--c-cyan)">UPCOMING APPS</GEy>
      <span style={{...mono,fontSize:10,padding:"3px 10px",borderRadius:999,border:"1px solid var(--border-translucent)",background:"rgba(255,255,255,.04)",color:"var(--color-body-mid)"}}>NOT INCLUDED IN CURRENT COUNTS</span>
    </Reveal>
    <Reveal delay={60}><Head title="More apps on the way." lead={`New apps are added to ${S.brand.name} over time. These are in build and will join the platform as they ship — your plan grows with them.`} max={640}/></Reveal>
    <div className="upcoming-grid" style={{marginTop:"clamp(24px,3.4vw,40px)",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"var(--space-lg)"}}>
      {S.upcomingApps.map((a,i)=>
        <Reveal key={a.id} delay={i*70} className="vx-lift" style={{display:"grid",gap:"var(--space-md)",alignContent:"start",padding:"var(--space-lg)",borderRadius:12,border:"1px dashed var(--color-mid)",background:"rgba(255,255,255,.02)","--glow":`color-mix(in oklab, ${ACCENT[a.accent][1]} 45%, transparent)`}}>
          <Tile icon={a.icon} size={34} accent={a.accent}/>
          <span className="vx-body-md" style={{color:"var(--color-ink)"}}>{a.name}</span>
          <span className="vx-body-sm" style={{color:"var(--color-body-mid)",fontSize:13,lineHeight:"19px"}}>{a.desc}</span>
          <span style={{...mono,fontSize:9,color:"var(--c-cyan)"}}>COMING SOON</span>
        </Reveal>)}
    </div>
  </Shell>;
}

Object.assign(window,{Apps,UpcomingApps});
