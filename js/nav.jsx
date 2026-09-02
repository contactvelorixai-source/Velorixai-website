const {Button:B,Icon:I,Eyebrow:Ey}=DS;

/* Official VelorixAI mark, keyed off its plate so it sits on any surface. */
function Wordmark({size=34}){
  return <span style={{display:"inline-flex",alignItems:"center",gap:9}}>
    <img src="images/velorixai-mark.png" alt="" width={Math.round(size*1.37)} height={size} style={{display:"block",height:size,width:"auto",filter:"drop-shadow(0 0 12px color-mix(in oklab, var(--c-violet) 45%, transparent))"}}/>
    <span className="vx-display-xs" style={{letterSpacing:"-0.3px",fontSize:size*0.55,whiteSpace:"nowrap"}}>VelorixAI</span>
  </span>;
}

const NAV=[["Home","top"],["Features","features"],["How It Works","how-it-works"],["Solutions","solutions"],["Pricing","pricing"],["Authority Book","annual"]];

function Nav(){
  const [open,setOpen]=React.useState(false);
  const [solid,setSolid]=React.useState(false);
  const [active,setActive]=React.useState("top");
  React.useEffect(()=>{
    const f=()=>{
      setSolid(window.scrollY>40);
      let cur="top";
      for(const [,id] of NAV){
        const el=document.getElementById(id);
        if(el&&el.getBoundingClientRect().top<=140)cur=id;
      }
      setActive(cur);
    };
    scrollSubs.add(f); f();
    return()=>scrollSubs.delete(f);
  },[]);
  const go=id=>e=>{
    e.preventDefault(); setOpen(false);
    const el=document.getElementById(id);
    if(!el)return;
    const y=window.scrollY+el.getBoundingClientRect().top-(id==="top"?0:72);
    window.scrollTo({top:Math.max(0,y),behavior:REDUCED?"instant":"smooth"});
  };
  return <header style={{position:"sticky",top:0,zIndex:120,background:solid?"rgba(10,10,10,0.9)":"transparent",backdropFilter:solid?"blur(10px)":"none",WebkitBackdropFilter:solid?"blur(10px)":"none",borderBottom:"1px solid "+(solid?"var(--color-hairline)":"transparent"),boxShadow:solid?"0 12px 40px -30px rgba(0,0,0,.9)":"none",transition:"background 220ms cubic-bezier(.4,0,.2,1),border-color 220ms,box-shadow 220ms"}}>
    <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"10px var(--space-xl)",display:"flex",alignItems:"center",gap:"clamp(12px,2vw,28px)",flexWrap:"nowrap"}}>
      <a href="#top" onClick={go("top")} aria-label="VelorixAI — home" style={{textDecoration:"none",color:"var(--color-ink)",flexShrink:0}}><Wordmark/></a>
      <nav className="nav-links" aria-label="Main" style={{display:"flex",gap:"clamp(12px,1.6vw,26px)",marginLeft:"auto",alignItems:"center",flexWrap:"nowrap"}}>
        {NAV.map(([l,id])=>{
          const on=active===id;
          return <a key={l} href={"#"+id} onClick={go(id)} aria-current={on?"true":undefined} className="vx-body-sm nav-link" style={{position:"relative",color:on?"var(--color-ink)":"var(--color-body)",textDecoration:"none",whiteSpace:"nowrap",paddingBottom:4,transition:"color 150ms cubic-bezier(.4,0,.2,1)"}}>
            {l}
            <span aria-hidden="true" style={{position:"absolute",left:0,right:0,bottom:0,height:2,borderRadius:99,background:on?"linear-gradient(90deg,var(--c-cyan),var(--c-violet))":"transparent",boxShadow:on?"0 0 10px -2px var(--c-cyan)":"none",transition:"background 200ms"}}></span>
          </a>;
        })}
      </nav>
      <button type="button" data-lead-cta className="vx-cta nav-cta" style={{marginLeft:"clamp(8px,1.4vw,20px)",flexShrink:0,cursor:"pointer",font:"inherit",fontSize:13,whiteSpace:"nowrap"}}>BOOK A DEMO</button>
      <button className="nav-burger" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(o=>!o)} style={{display:"none",marginLeft:"auto",background:"rgba(255,255,255,.04)",border:"1px solid var(--border-translucent)",borderRadius:"var(--radius-full)",color:"var(--color-ink)",width:44,height:44,alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0}}><I name={open?"x":"menu"} size={18}/></button>
    </div>
    <div style={{overflow:"hidden",maxHeight:open?520:0,transition:REDUCED?"none":"max-height 340ms cubic-bezier(.4,0,.2,1)",borderTop:"1px solid "+(open?"var(--color-hairline)":"transparent"),background:"rgba(10,10,10,0.96)"}}>
      <div style={{padding:"var(--space-lg) var(--space-xl) var(--space-xl)",display:"grid",gap:4}}>
        {NAV.map(([l,id])=>
          <a key={l} href={"#"+id} onClick={go(id)} className="vx-body-md" style={{display:"flex",alignItems:"center",minHeight:48,padding:"0 12px",borderRadius:10,color:active===id?"var(--color-ink)":"var(--color-body)",textDecoration:"none",background:active===id?"rgba(255,255,255,.05)":"transparent"}}>{l}</a>)}
        <button type="button" data-lead-cta className="vx-cta" style={{marginTop:"var(--space-md)",justifyContent:"center",minHeight:48,cursor:"pointer",font:"inherit",fontSize:14}}>BOOK A DEMO</button>
      </div>
    </div>
  </header>;
}

Object.assign(window,{Nav,Wordmark,NAV});
