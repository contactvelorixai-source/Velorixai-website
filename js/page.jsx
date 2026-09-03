/* ============================================================================
   POLICY / SIMPLE PAGE SHELL — used by terms, refund, privacy and thank-you.
   Each page supplies its content in a <script type="application/json"
   id="page-data"> block; this renders it with the shared header and footer.
   ============================================================================ */
const {Icon:PgI,Eyebrow:PgEy}=DS;

function PageHeader(){
  const S=window.SITE;
  return <header style={{position:"sticky",top:0,zIndex:120,background:"rgba(10,10,10,0.9)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",borderBottom:"1px solid var(--color-hairline)"}}>
    <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"10px var(--space-xl)",display:"flex",alignItems:"center",gap:"var(--space-lg)"}}>
      <a href="index.html" aria-label={S.brand.name+" — home"} style={{display:"inline-flex",alignItems:"center",gap:9,textDecoration:"none",color:"var(--color-ink)"}}>
        <img src={S.brand.logo} alt="" height="34" style={{display:"block",height:34,width:"auto",filter:"drop-shadow(0 0 12px color-mix(in oklab, var(--c-violet) 45%, transparent))"}}/>
        <span className="vx-display-xs" style={{letterSpacing:"-0.3px",fontSize:19,whiteSpace:"nowrap"}}>{S.brand.name}</span>
      </a>
      <a href="index.html" className="vx-body-sm" style={{marginLeft:"auto",color:"var(--color-body)",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,whiteSpace:"nowrap"}}><PgI name="arrow-left" size={15}/>Back to site</a>
    </div>
  </header>;
}

/* A policy page: eyebrow, title, updated date, then numbered sections. */
function PolicyPage({data}){
  return <React.Fragment>
    <PageHeader/>
    <main style={{maxWidth:860,margin:"0 auto",padding:"clamp(48px,7vw,96px) var(--space-xl)"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:"var(--space-lg)"}}>
        <Tile icon={data.icon||"file-text"} size={38} accent={data.accent||"ai"}/>
        <PgEy color="var(--c-cyan)">{data.eyebrow}</PgEy>
      </div>
      <h1 className="vx-display-lg" style={{margin:"0 0 var(--space-lg)",textWrap:"pretty"}}>{data.title}</h1>
      <p className="vx-body-lg" style={{color:"var(--color-body)",margin:"0 0 var(--space-md)",maxWidth:640}}>{data.lead}</p>
      <p style={{...mono,fontSize:10,color:"var(--color-body-mid)",margin:0}}>LAST UPDATED · {data.updated}</p>

      <div style={{marginTop:"clamp(36px,5vw,60px)",display:"grid",gap:"clamp(28px,4vw,44px)"}}>
        {data.sections.map((s,i)=>
          <section key={s.h} style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:"clamp(16px,3vw,28px)",paddingTop:"var(--space-xl)",borderTop:"1px solid var(--color-hairline)"}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:"clamp(18px,2.4vw,24px)",lineHeight:1,color:"var(--c-violet-soft)",paddingTop:4}}>{String(i+1).padStart(2,"0")}</span>
            <div>
              <h2 className="vx-display-xs" style={{margin:"0 0 var(--space-md)",fontSize:"clamp(18px,2.4vw,22px)"}}>{s.h}</h2>
              <div style={{display:"grid",gap:"var(--space-md)"}}>
                {s.p.map((t,n)=><p key={n} className="vx-body-md" style={{color:"var(--color-body)",margin:0,textWrap:"pretty"}}>{t}</p>)}
                {s.list?<ul style={{margin:0,paddingLeft:0,listStyle:"none",display:"grid",gap:"var(--space-sm)"}}>
                  {s.list.map(t=><li key={t} style={{display:"flex",gap:11,alignItems:"flex-start"}}>
                    <span style={{marginTop:3,color:"var(--c-cyan)",flexShrink:0}}><PgI name="check" size={14}/></span>
                    <span className="vx-body-md" style={{color:"var(--color-body)"}}>{t}</span>
                  </li>)}
                </ul>:null}
              </div>
            </div>
          </section>)}
      </div>

      <div style={{marginTop:"clamp(40px,6vw,72px)",padding:"clamp(22px,3vw,32px)",borderRadius:14,border:"1px solid var(--color-hairline)",background:"linear-gradient(150deg, color-mix(in oklab, var(--c-violet) 12%, #191919), #121317)",display:"grid",gap:"var(--space-md)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <Tile icon="mail" size={34} accent="email"/>
          <span style={{...mono,color:"var(--color-body-mid)"}}>QUESTIONS ABOUT THIS POLICY</span>
        </div>
        <p className="vx-body-md" style={{color:"var(--color-body)",margin:0}}>Write to <a href={"mailto:"+window.SITE.contact.email} style={{color:"var(--c-cyan)"}}>{window.SITE.contact.email}</a> or message us on <a href={window.SITE.contact.whatsapp} target="_blank" rel="noopener" style={{color:"var(--c-cyan)"}}>WhatsApp</a>.</p>
      </div>
    </main>
    <GlobalFooter/>
  </React.Fragment>;
}

window.mountPage=(Comp)=>{
  const data=JSON.parse(document.getElementById("page-data").textContent);
  ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(Comp,{data}));
};
Object.assign(window,{PolicyPage,PageHeader});
