const {Icon:FI,Eyebrow:FEy}=DS;

function Founder(){
  const [ref,p]=useProgress("through");
  const d=(p-0.5)*2;
  return <Shell id="founder" label="Founder" style={{background:"linear-gradient(180deg,var(--color-canvas),var(--deep) 60%,var(--color-canvas))"}}>
    <div ref={ref} className="split-2" style={{display:"grid",gridTemplateColumns:".8fr 1.2fr",gap:"clamp(32px,6vw,80px)",alignItems:"center"}}>
      <div style={{position:"relative",transform:`translate3d(0,${-d*54}px,0)`,willChange:"transform"}}>
        <Aura accent="ai" size="120%" opacity={.55}/>
        <div className="vx-lift" style={{position:"relative",border:"1px solid var(--color-hairline)",borderRadius:12,overflow:"hidden",background:"linear-gradient(168deg,#1b1d22,#111216)"}}>
          <img src={(window.__resources&&window.__resources.founderPhoto)||"https://i.ibb.co/mrhgQGy3/photo-16.jpg"} alt={"Anis Ahmad, Founder of "+window.SITE.brand.name} loading="lazy" style={{display:"block",width:"100%",height:"auto"}}/>
          <span aria-hidden="true" style={{position:"absolute",left:0,right:0,top:0,height:"72%",background:"linear-gradient(180deg,color-mix(in oklab,var(--c-violet) 22%,transparent),transparent 70%)",pointerEvents:"none"}}></span>
          <div style={{padding:"var(--space-lg)",borderTop:"1px solid var(--color-hairline)",display:"flex",alignItems:"center",gap:12}}>
            <Tile size={34} accent="ai" radius={999}><span style={{fontFamily:"var(--font-mono)",fontSize:14,color:"#fff"}}>A</span></Tile>
            <span>
              <span className="vx-display-xs" style={{display:"block",fontSize:17}}>Anis Ahmad</span>
              <span style={{...mono,fontSize:10,color:"var(--c-cyan)"}}>FOUNDER & CEO · {window.SITE.brand.nameCaps}</span>
            </span>
          </div>
        </div>
        <div style={{position:"absolute",right:"-8%",bottom:"-10%",width:"72%",transform:`translate3d(0,${-d*-30}px,0)`}}><Notice icon="rocket" label="Built for speed" text="Live in 2 hours" accent="gold"/></div>
      </div>
      <Reveal>
        <FEy color="var(--c-violet-soft)">WHY WE BUILT {window.SITE.brand.nameCaps}</FEy>
        <h2 className="vx-display-md" style={{margin:"var(--space-lg) 0 var(--space-xl)",maxWidth:520,textWrap:"pretty"}}>Meet Anis Ahmad — the founder behind {window.SITE.brand.name}</h2>
        <div style={{display:"grid",gap:"var(--space-lg)",maxWidth:560}}>
          {["I spent years watching coaches and agency owners waste time and money. They'd juggle 5-6 tools, pay ₹20K+ monthly, and still lose leads because nothing talked to each other.",
            "One founder told me: \u201CI spend more time managing software than growing my business.\u201D That line changed everything.",
            "The problem wasn't the tools — they just weren't built for people who move fast. So I built Velorix AI. One dashboard. Website + CRM + WhatsApp + Booking + Payments. All connected. Live in 2 hours.",
            "On your free demo, I'll show you exactly how it works for your business. No BS. Just results."].map((t,i)=>
            <p key={i} className="vx-body-md" style={{color:"var(--color-body)",margin:0}}>{t}</p>)}
        </div>
      </Reveal>
    </div>
  </Shell>;
}

function VideoSection(){
  const [play,setPlay]=React.useState(false);
  const [ref,p]=useProgress("through");
  const d=(p-0.5)*2;
  return <Shell label="Video">
    <div className="split-2" style={{display:"grid",gridTemplateColumns:".78fr 1.22fr",gap:"clamp(32px,6vw,80px)",alignItems:"center"}}>
      <Reveal><Head eyebrow="SEE IT IN ACTION" titleClass="vx-display-md" title="Watch a real 2-hour build" lead="This is the actual walkthrough of a guided build session — from kickoff to going live."/></Reveal>
      <div ref={ref} style={{position:"relative",transform:`translate3d(0,${-d*34}px,0)`,willChange:"transform"}}>
        <Aura accent="ai" size="80%" opacity={.6}/>
        <div className="vx-lift" style={{position:"relative",border:"1px solid var(--color-hairline)",borderRadius:12,overflow:"hidden",background:"linear-gradient(165deg,var(--deep-2),var(--deep))",aspectRatio:"16 / 9","--glow":"color-mix(in oklab, var(--c-violet) 60%, transparent)"}}>
          <img src={(window.__resources&&window.__resources.ytThumb)||ytThumbUrl()} alt={window.SITE.brand.name+" 2-hour build walkthrough"} loading="lazy" referrerPolicy="no-referrer" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:play?0:.5}}/>
          {play
            ? <iframe title={window.SITE.brand.name+" walkthrough"} src={ytEmbed()} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" style={{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"}}></iframe>
            : <button onClick={()=>setPlay(true)} aria-label={"Play the "+window.SITE.brand.name+" walkthrough"} style={{position:"absolute",inset:0,width:"100%",height:"100%",background:"radial-gradient(60% 60% at 50% 45%, color-mix(in oklab, var(--c-violet) 40%, transparent), rgba(10,10,10,.55) 72%)",border:"none",cursor:"pointer",display:"grid",placeItems:"center",gap:"var(--space-lg)"}}>
                <span style={{display:"grid",placeItems:"center",gap:14}}>
                  <Tile icon="play" size={78} accent="ai" radius={999}/>
                  <span style={{...mono,color:"#fff"}}>PLAY · 2-HOUR BUILD</span>
                </span>
              </button>}
          {play?null:<span aria-hidden="true" style={{position:"absolute",left:16,bottom:16,display:"flex",gap:8}}>
            {[["CRM","users","crm"],["FUNNEL","filter","funnel"],["WHATSAPP","message-circle","whatsapp"],["PAYMENTS","credit-card","payments"]].map(([l,ic,acc])=>
              <span key={l} style={{display:"flex",alignItems:"center",gap:6,padding:"4px 10px 4px 4px",borderRadius:99,background:"rgba(10,10,10,.55)",border:"1px solid var(--color-hairline)"}}>
                <Tile icon={ic} size={20} accent={acc} glow={false}/><span style={{...mono,fontSize:9,color:"var(--color-body)"}}>{l}</span>
              </span>)}
          </span>}
        </div>
        <p className="vx-body-sm" style={{color:"var(--color-body-mid)",margin:"var(--space-md) 0 0"}}>Video not loading? <a href={ytWatch()} target="_blank" rel="noopener" style={{color:"var(--c-cyan)"}}>Watch it on YouTube</a>.</p>
      </div>
    </div>
  </Shell>;
}

Object.assign(window,{Founder,VideoSection});
