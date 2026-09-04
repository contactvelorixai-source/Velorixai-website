const {Icon:MI}=DS;

/* Authority book — editorial composition: the 3D book sits beside a portrait frame
   rather than inside a card, so it reads as a real deliverable in a real scene. */
function BookMock({scale=1}){
  const [ref,p]=useProgress("through");
  const d=REDUCED?0:(p-0.5)*2;
  return <div ref={ref} className="book-scene">
    <div className="book-photo" style={{transform:`translate3d(0,${-d*26}px,0)`}}>
      <Photo id="book-author" ratio="3 / 4" radius={14} placeholder="Author portrait, consultant holding their book"/>
    </div>
    <div className="book-stage" style={{transform:`translate3d(0,${d*20}px,0)`}}>
      <span aria-hidden="true" className="book-glow"></span>
      <div className="vx-drift" style={{position:"relative",transformStyle:"preserve-3d",transform:`scale(${scale})`}}>
        {[1,2].map(i=><span key={i} aria-hidden="true" className="book-page" style={{left:11+i*6,top:-7-i*6,transform:`rotateY(-15deg) rotateZ(${i*2.2}deg)`}}></span>)}
        <div className="book-cover">
          <span aria-hidden="true" className="book-spine"></span>
          <span aria-hidden="true" className="book-sheen"></span>
          <div style={{position:"relative"}}>
            <Tile icon="book-open" size={26} accent="gold" style={{marginBottom:10}}/>
            <div style={{...mono,fontSize:8,color:"var(--c-gold-soft)"}}>AUTHORITY BOOK</div>
            <div className="vx-display-xs" style={{color:"#fff",marginTop:7,fontSize:17,lineHeight:"21px"}}>The Expertise Business</div>
          </div>
          <div style={{position:"relative"}}>
            <div style={{height:1,background:"linear-gradient(90deg,var(--c-gold),transparent)",marginBottom:9}}></div>
            <div style={{...mono,fontSize:8,color:"rgba(255,255,255,.62)"}}>YOUR NAME · UP TO 150 PAGES</div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

/* Free website bonus — desktop frame + phone, photographed context behind */
function SiteMock(){
  const [ref,p]=useProgress("through");
  const d=REDUCED?0:(p-0.5)*2;
  return <div ref={ref} className="site-scene">
    <div className="site-photo"><Photo id="site-context" ratio="16 / 9" radius={14} placeholder="Coach reviewing their new website"/></div>
    <div className="site-browser" style={{transform:`translate3d(0,${-d*18}px,0)`}}>
      <div className="browser-chrome">
        <span style={{display:"flex",gap:5,alignItems:"center"}}>
          {["var(--c-gold)","var(--c-teal)","var(--c-blue)"].map((c,i)=><span key={i} style={{width:6,height:6,borderRadius:99,background:c}}></span>)}
        </span>
        <span style={{...mono,fontSize:9,color:"var(--color-body-mid)"}}>yourbrand.com</span>
      </div>
      <div className="browser-body">
        <span aria-hidden="true" className="browser-wash"></span>
        <div style={{...mono,fontSize:9,color:"var(--c-gold-soft)"}}>Coaching</div>
        <div className="vx-display-xs" style={{fontSize:17,lineHeight:"21px",maxWidth:210,position:"relative"}}>Work with me. Book a free call.</div>
        <div style={{display:"flex",gap:7,position:"relative"}}>
          <span style={{padding:"5px 12px",borderRadius:99,background:"linear-gradient(135deg,var(--c-blue),var(--c-violet))",color:"#fff",...mono,fontSize:9}}>Book now</span>
          <span style={{padding:"5px 12px",borderRadius:99,border:"1px solid var(--border-translucent)",...mono,fontSize:9}}>Programs</span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7,marginTop:2}}>
          {["var(--c-cyan)","var(--c-violet)","var(--c-gold)"].map((c,i)=><span key={i} style={{height:30,borderRadius:6,border:"1px solid rgba(255,255,255,.08)",background:`linear-gradient(160deg, color-mix(in oklab, ${c} 22%, transparent), rgba(255,255,255,.03))`}}></span>)}
        </div>
      </div>
    </div>
    <div className="site-phone" style={{transform:`translate3d(0,${d*26}px,0)`}}>
      <span style={{display:"block",height:4,width:28,borderRadius:99,background:"rgba(255,255,255,.28)",margin:"0 auto 8px"}}></span>
      <span style={{display:"grid",gap:5}}>
        <span style={{height:26,borderRadius:6,background:"linear-gradient(140deg,color-mix(in oklab,var(--c-violet) 42%,transparent),rgba(255,255,255,.05))"}}></span>
        <span style={{height:5,borderRadius:99,background:"rgba(255,255,255,.18)"}}></span>
        <span style={{height:5,width:"68%",borderRadius:99,background:"rgba(255,255,255,.18)"}}></span>
        <span style={{height:14,borderRadius:99,background:"linear-gradient(90deg,var(--c-blue),var(--c-violet))",marginTop:3}}></span>
      </span>
    </div>
  </div>;
}

Object.assign(window,{BookMock,SiteMock});
