/* ============================================================================
   THANK YOU PAGE — the step between the lead form and the Cal.id calendar.
   Reads the visitor's details from the query string and prefills the booking.
   ============================================================================ */
const {Icon:TyI,Eyebrow:TyEy}=DS;

function ThankYou(){
  const S=window.SITE;
  const q=new URLSearchParams(location.search);
  const name=q.get("name")||"", email=q.get("email")||"", phone=q.get("phone")||"";

  /* Build the direct Cal.id availability URL — booking URL lives in config. */
  const calUrl=React.useMemo(()=>{
    try{
      const u=new URL(S.links.booking);
      if(name) u.searchParams.set("name",name);
      if(email)u.searchParams.set("email",email);
      if(phone)u.searchParams.set("phone",phone);
      return u.toString();
    }catch(e){return S.links.booking}
  },[name,email,phone]);

  const first=name.trim().split(/\s+/)[0];

  return <React.Fragment>
    <PageHeader/>
    <main style={{maxWidth:1080,margin:"0 auto",padding:"clamp(40px,6vw,80px) var(--space-xl) clamp(48px,7vw,88px)"}}>
      <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:"var(--space-lg)"}}>
        <span style={{animation:REDUCED?"none":"vxPop 560ms cubic-bezier(.34,1.56,.64,1)",flexShrink:0}}><Tile icon="check" size={52} accent="analytics" radius={999}/></span>
        <TyEy color="var(--c-teal)">DETAILS RECEIVED</TyEy>
      </div>
      <h1 className="vx-display-lg" style={{margin:"0 0 var(--space-lg)",textWrap:"pretty"}}>{first?`Thanks, ${first}. Now pick your time.`:"Thank you. Now pick your time."}</h1>
      <p className="vx-body-lg" style={{color:"var(--color-body)",margin:"0 0 clamp(28px,4vw,44px)",maxWidth:620}}>Choose a slot below and your free 30-minute {S.brand.name} demo is confirmed. Your details are already filled in.</p>

      {/* Cal.id availability — the visitor books here, no further click needed */}
      <div className="ty-cal" style={{position:"relative",borderRadius:14,overflow:"hidden",border:"1px solid var(--border-translucent)",background:"linear-gradient(168deg,#1c1e24,#101115)",minHeight:560}}>
        <span aria-hidden="true" style={{position:"absolute",inset:0,display:"grid",placeItems:"center",color:"var(--color-body-mid)",...mono,fontSize:11}}>LOADING AVAILABILITY…</span>
        <iframe title="Book your demo" src={calUrl} loading="eager" style={{position:"relative",zIndex:2,width:"100%",height:"min(76vh,700px)",border:"none",display:"block"}}></iframe>
      </div>
      <div style={{marginTop:"var(--space-md)"}}>
        <a href={calUrl} target="_blank" rel="noopener" style={{...mono,fontSize:10,color:"var(--c-cyan)"}}>CALENDAR NOT LOADING? OPEN IT IN A NEW TAB</a>
      </div>

      {/* Existing contact routes preserved */}
      <div className="ty-contact" style={{marginTop:"clamp(36px,5vw,60px)",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"var(--space-lg)"}}>
        {[["Message us on WhatsApp",S.contact.phone,"message-circle","clients",S.contact.whatsapp,true],
          ["Email the team",S.contact.email,"mail","email","mailto:"+S.contact.email,false],
          ["Watch the walkthrough","2-minute product video","play","ai",S.links.social.find(s=>s[0]==="YouTube")[2],true]].map(([t,sub,ic,acc,href,ext])=>
          <a key={t} href={href} {...(ext?{target:"_blank",rel:"noopener"}:{})} className="vx-lift" style={{display:"flex",alignItems:"center",gap:12,padding:"var(--space-lg)",borderRadius:12,border:"1px solid var(--color-hairline)",background:"rgba(255,255,255,.02)",textDecoration:"none","--glow":`color-mix(in oklab, ${ACCENT[acc][1]} 50%, transparent)`}}>
            <Tile icon={ic} size={34} accent={acc}/>
            <span style={{display:"grid",gap:2,minWidth:0}}>
              <span className="vx-body-sm" style={{color:"var(--color-ink)"}}>{t}</span>
              <span style={{...mono,fontSize:9,color:"var(--color-body-mid)",overflow:"hidden",textOverflow:"ellipsis"}}>{sub}</span>
            </span>
          </a>)}
      </div>
    </main>
    <GlobalFooter/>
  </React.Fragment>;
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(ThankYou));
