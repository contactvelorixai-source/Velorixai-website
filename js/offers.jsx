const {Icon:OI,Eyebrow:OEy}=DS;

function PlanCard({p}){
  const [a1,a2]=ACCENT[p.accent];
  const apps=packageApps(p), n=appCount(p);
  const [open,setOpen]=React.useState(false);
  return <div className="vx-lift" style={{position:"relative",display:"flex",flexDirection:"column",gap:"var(--space-lg)",minHeight:"100%",border:"1px solid "+(p.featured?"var(--border-translucent-strong)":"var(--color-hairline)"),borderRadius:14,padding:"clamp(22px,3vw,32px)",background:`linear-gradient(168deg, color-mix(in oklab, ${a1} ${p.featured?18:11}%, #191919), #121317)`,"--glow":`color-mix(in oklab, ${a2} 60%, transparent)`,overflow:"hidden"}}>
    <span aria-hidden="true" style={{position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(90deg,transparent,${a1},${a2},transparent)`}}></span>
    <div style={{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
      <Tile icon={p.icon} size={40} accent={p.accent}/>
      <span style={{...mono,color:"var(--color-body-mid)"}}>{p.tag}</span>
      {p.featured?<span style={{...mono,fontSize:10,padding:"3px 10px",borderRadius:999,background:`color-mix(in oklab, ${a1} 26%, transparent)`,border:`1px solid color-mix(in oklab, ${a2} 45%, transparent)`,color:"#fff",whiteSpace:"nowrap"}}>BEST VALUE</span>:null}
    </div>
    <div>
      <h3 className="vx-display-sm" style={{margin:0,fontSize:"clamp(24px,3vw,30px)"}}>{p.name}</h3>
      <p className="vx-body-sm" style={{color:"var(--color-body-mid)",margin:"6px 0 0"}}><span style={{whiteSpace:"nowrap"}}>{n} current apps</span> · {p.term}</p>
    </div>
    <div style={{display:"inline-flex",alignItems:"center",gap:9,alignSelf:"flex-start",padding:"7px 14px",borderRadius:999,border:`1px solid color-mix(in oklab, ${a2} 40%, transparent)`,background:`color-mix(in oklab, ${a1} 14%, transparent)`}}>
      <Tile icon="coins" size={22} accent={p.accent} glow={false}/>
      <span style={{...mono,fontSize:11,color:"#fff",whiteSpace:"nowrap"}}>{p.tokens}</span>
    </div>
    <ul style={{listStyle:"none",margin:0,padding:0,display:"grid",gap:"var(--space-md)"}}>
      <li style={{display:"flex",gap:11,alignItems:"flex-start"}}>
        <span style={{marginTop:2,color:a2,flexShrink:0}}><OI name="check" size={15}/></span>
        <span className="vx-body-sm" style={{color:"var(--color-body)"}}><span style={{whiteSpace:"nowrap"}}>{n} current apps</span> in one dashboard</span>
      </li>
      {p.benefits.map(t=><li key={t} style={{display:"flex",gap:11,alignItems:"flex-start"}}>
        <span style={{marginTop:2,color:a2,flexShrink:0}}><OI name="check" size={15}/></span>
        <span className="vx-body-sm" style={{color:"var(--color-body)"}}>{t}</span>
      </li>)}
    </ul>
    <div>
      <button type="button" data-no-lead onClick={()=>setOpen(o=>!o)} aria-expanded={open}
        style={{display:"inline-flex",alignItems:"center",gap:8,padding:"7px 14px",borderRadius:999,border:"1px solid var(--border-translucent)",background:"rgba(255,255,255,.04)",color:"var(--color-body)",cursor:"pointer",font:"inherit",...mono,fontSize:10}}>
        <OI name={open?"chevron-up":"chevron-down"} size={13}/>{open?"HIDE APPS":`SEE ALL ${n} APPS`}
      </button>
      <div style={{overflow:"hidden",maxHeight:open?900:0,opacity:open?1:0,transition:REDUCED?"none":"max-height 400ms cubic-bezier(.4,0,.2,1),opacity 260ms"}}>
        <ul style={{listStyle:"none",margin:"var(--space-md) 0 0",padding:0,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-sm) var(--space-md)"}} className="plan-apps">
          {apps.map(a=><li key={a.id} style={{display:"flex",gap:9,alignItems:"center"}}>
            <Tile icon={a.icon} size={22} accent={a.accent} glow={false}/>
            <span className="vx-body-sm" style={{color:"var(--color-body)",fontSize:13,textWrap:"pretty"}}>{a.name}</span>
          </li>)}
        </ul>
      </div>
    </div>
    <div style={{marginTop:"auto",paddingTop:"var(--space-md)",display:"flex",flexWrap:"wrap",gap:"var(--space-sm)"}}>
      <button type="button" data-lead-cta className="vx-cta" style={{cursor:"pointer",font:"inherit",fontSize:14}}>{window.SITE.cta.plan}</button>
    </div>
  </div>;
}

function Pricing(){
  const S=window.SITE;
  return <Shell id="pricing" label="Pricing">
    <Reveal><Head eyebrow="PRICING" title="Pricing tailored to you — confirmed on your free demo." lead="Because every coaching or agency business is unique, we use your free demo to tailor a plan that matches your actual business size and app usage — no generic pricing." max={780}/></Reveal>

    <Reveal delay={80} style={{marginTop:"clamp(36px,5vw,56px)"}}>
      <div className="price-range" style={{display:"grid",gridTemplateColumns:"auto 1fr auto",gap:"clamp(20px,3vw,40px)",alignItems:"center",border:"1px solid var(--color-hairline)",borderRadius:14,padding:"clamp(20px,3vw,28px) clamp(22px,3vw,32px)",background:"linear-gradient(120deg, color-mix(in oklab, var(--c-violet) 14%, #191919), #121317)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <Tile icon="wallet" size={38} accent="gold"/>
          <span style={{...mono,color:"var(--color-body-mid)"}}>INVESTMENT<br/>RANGE</span>
        </div>
        <div style={{fontFamily:"var(--font-mono)",fontSize:"clamp(24px,4vw,40px)",letterSpacing:"-0.6px",color:"#fff",whiteSpace:"nowrap"}}>{S.pricing.range}</div>
        <p className="vx-body-sm" style={{color:"var(--color-body-mid)",margin:0,maxWidth:280}}>{S.pricing.note}</p>
      </div>
    </Reveal>

    <div className="plan-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(20px,3vw,32px)",marginTop:"clamp(24px,3vw,32px)",alignItems:"stretch"}}>
      {S.packages.map((p,i)=><Reveal key={p.id} delay={i*110} style={{display:"flex"}}><PlanCard p={p}/></Reveal>)}
    </div>

    <Reveal delay={80} style={{marginTop:"clamp(28px,4vw,44px)",display:"grid",gap:"var(--space-lg)"}}>
      <ul style={{listStyle:"none",margin:0,padding:0,display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"var(--space-lg)"}} className="price-notes">
        {[["Plans scale with your business — from solo coach to full agency","layers","crm"],["Cancel or change your plan anytime after sign-up","refresh-cw","clients"],["No cost, no obligation — just your time for 30 minutes.","clock","analytics"]].map(([t,ic,acc])=>
          <li key={t} style={{display:"flex",gap:12,alignItems:"center",border:"1px solid var(--color-hairline)",borderRadius:12,padding:"var(--space-md) var(--space-lg)",background:"rgba(255,255,255,.02)"}}>
            <Tile icon={ic} size={30} accent={acc} glow={false}/>
            <span className="vx-body-sm" style={{color:"var(--color-body)"}}>{t}</span>
          </li>)}
      </ul>
      <div style={{display:"flex",gap:"var(--space-md)",flexWrap:"wrap",alignItems:"center"}}>
        <button type="button" data-lead-cta className="vx-cta" style={{cursor:"pointer",font:"inherit",fontSize:14}}>{S.cta.pricing}</button>
        <button type="button" data-lead-cta className="vx-cta vx-cta-ghost" style={{cursor:"pointer",font:"inherit",fontSize:14}}>{S.cta.authority}</button>
      </div>
    </Reveal>
  </Shell>;
}

function Annual(){
  const S=window.SITE;
  const annual=S.packages.find(p=>p.tag==="ANNUAL")||S.packages[S.packages.length-1];
  const dark="var(--color-on-primary)", line="rgba(10,10,10,0.14)";
  return <Shell id="annual" label="Annual offer" tone="light">
    <Reveal>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:"var(--space-lg)"}}>
        <Tile icon="crown" size={38} accent="gold"/>
        <OEy color="rgba(10,10,10,.55)">ANNUAL SUBSCRIPTION</OEy>
      </div>
      <Head light title={`Go annual. Get more with ${S.brand.name}.`} lead={`Choose an annual ${S.brand.name} subscription and receive exclusive growth bonuses designed to help you establish your authority and digital presence.`}/>
    </Reveal>

    <Reveal delay={70} style={{marginTop:"clamp(32px,4.5vw,52px)"}}>
      <div className="annual-tokens" style={{display:"grid",gridTemplateColumns:"auto 1fr auto",gap:"clamp(20px,3vw,40px)",alignItems:"center",border:"1px solid "+line,borderRadius:14,padding:"clamp(20px,3vw,28px) clamp(22px,3vw,32px)",background:"#fff"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <Tile icon="coins" size={38} accent="gold"/>
          <span style={{...mono,color:"rgba(10,10,10,.55)"}}>ANNUAL<br/>TOKENS</span>
        </div>
        <div>
          <div style={{fontFamily:"var(--font-mono)",fontSize:"clamp(26px,4vw,40px)",letterSpacing:"-0.6px",color:dark,whiteSpace:"nowrap"}}>9,000 TOKENS</div>
          <div style={{...mono,color:"rgba(10,10,10,.55)",marginTop:6,letterSpacing:"1px"}}>1,000 × 6 MONTHS + 500 × 6 MONTHS</div>
        </div>
        <div style={{display:"grid",gap:6,minWidth:150}}>
          {[["MONTHS 1–6","6,000",1],["MONTHS 7–12","3,000",0.5]].map(([l,v,w])=>
            <div key={l} style={{display:"grid",gap:4}}>
              <div style={{display:"flex",justifyContent:"space-between",gap:12,...mono,fontSize:10,color:"rgba(10,10,10,.55)"}}><span style={{whiteSpace:"nowrap"}}>{l}</span><span style={{color:dark}}>{v}</span></div>
              <div style={{height:6,borderRadius:99,background:"rgba(10,10,10,.08)"}}><div style={{width:`${w*100}%`,height:"100%",borderRadius:99,background:"linear-gradient(90deg,var(--c-gold),var(--c-gold-soft))"}}></div></div>
            </div>)}
        </div>
      </div>
    </Reveal>

    <div style={{...mono,color:"rgba(10,10,10,.55)",margin:"clamp(32px,4.5vw,52px) 0 var(--space-lg)"}}>CHOOSE ONE FREE BONUS</div>
    <div className="offer-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(24px,4vw,48px)",alignItems:"stretch"}}>
      {[["OPTION 1","Free professional website","A professionally designed website for your coaching, consulting or agency business.","globe","website",<SiteMock key="s"/>,null],
        ["OPTION 2","Free authority book","Professional authority book writing of up to 150 pages — a thought-leadership asset that builds credibility with potential clients.","book-open","gold",<BookMock key="b"/>,"UP TO 150 PAGES"]].map(([tag,title,copy,ic,acc,mock,badge])=>
        <Reveal key={tag} className="vx-lift" style={{display:"flex",flexDirection:"column",gap:"var(--space-lg)",border:"1px solid "+line,borderRadius:14,padding:"clamp(18px,3vw,28px)",background:"#fff","--glow":"rgba(10,10,10,.25)"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
            <Tile icon={ic} size={36} accent={acc}/>
            <span style={{...mono,color:"rgba(10,10,10,.55)"}}>{tag}</span>
            {badge?<span style={{...mono,fontSize:10,padding:"3px 10px",borderRadius:999,background:"rgba(10,10,10,.06)",border:"1px solid "+line,color:dark,whiteSpace:"nowrap"}}>{badge}</span>:null}
          </div>
          <div style={{background:"linear-gradient(170deg,#111318,var(--deep))",borderRadius:12,overflow:"hidden",position:"relative"}}>{mock}</div>
          <h3 className="vx-display-xs" style={{margin:0,color:dark}}>{title}</h3>
          <p className="vx-body-md" style={{margin:0,color:"rgba(10,10,10,.7)"}}>{copy}</p>
          <div style={{marginTop:"auto",paddingTop:"var(--space-sm)"}}>
            <button type="button" data-lead-cta className="vx-cta vx-cta-dark" style={{cursor:"pointer",font:"inherit",fontSize:14}}>{S.cta.book}</button>
          </div>
        </Reveal>)}
    </div>

    <div style={{display:"flex",gap:"var(--space-md)",alignItems:"center",flexWrap:"wrap",marginTop:"clamp(32px,5vw,56px)"}}>
      <button type="button" data-lead-cta className="vx-cta vx-cta-dark" style={{cursor:"pointer",font:"inherit",fontSize:14}}>{S.cta.annual}</button>
      <span style={{...mono,color:"rgba(10,10,10,.55)"}}>ONE BONUS PER ANNUAL SUBSCRIPTION</span>
    </div>
  </Shell>;
}

Object.assign(window,{Pricing,Annual,PlanCard});
