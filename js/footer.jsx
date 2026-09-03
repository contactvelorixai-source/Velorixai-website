/* ============================================================================
   GLOBAL FOOTER — one component, used by every page on the site.
   Edit the content in site/config.js (footer, contact, links). Editing it once
   updates the landing page, the thank-you page and all three policy pages.
   ============================================================================ */
const {Icon:FtI}=DS;

function GlobalFooter(){
  const S=window.SITE, L=S.links;
  /* The three required policy links. URLs live in config → links. */
  const LEGAL=[["Terms & Conditions",L.terms],["Refund Policy",L.refund],["Privacy Policy",L.privacy]];

  const col=(h,items)=><div style={{display:"grid",gap:"var(--space-md)",alignContent:"start"}}>
    <div style={{...mono,color:"var(--color-body-mid)"}}>{h}</div>
    {items}
  </div>;
  const link=(l,h,i)=><a key={l} href={h} className="vx-body-sm foot-link" style={{color:"var(--color-body)",textDecoration:"none"}}>{l}</a>;

  return <footer style={{background:"var(--color-canvas)",padding:"clamp(48px,7vw,88px) var(--space-xl) var(--space-2xl)"}}>
    <div style={{maxWidth:"var(--container-max)",margin:"0 auto"}}>
      <div className="foot-grid" style={{display:"grid",gridTemplateColumns:"1.4fr 1fr 1fr 1fr",gap:"clamp(28px,4vw,56px)"}}>
        <div style={{display:"grid",gap:"var(--space-md)",alignContent:"start"}}>
          <a href="index.html" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none",color:"var(--color-ink)"}}>
            <Tile size={28} accent="ai" radius={999}><span style={{fontFamily:"var(--font-mono)",fontSize:12,color:"#fff"}}>V</span></Tile>
            <span className="vx-display-xs" style={{whiteSpace:"nowrap"}}>{S.brand.name}</span>
          </a>
          <p className="vx-body-sm" style={{color:"var(--color-body-mid)",margin:0,maxWidth:300}}>{S.footer.blurb}</p>
        </div>
        {col("NAVIGATION",S.footer.nav.map(([l,h])=>link(l,h)))}
        {col("CONTACT",[
          <a key="m" href={"mailto:"+S.contact.email} className="vx-body-sm foot-link" style={{color:"var(--color-body)"}}>{S.contact.email}</a>,
          <a key="w" href={S.contact.whatsapp} target="_blank" rel="noopener" className="vx-body-sm foot-link" style={{color:"var(--color-body)",textDecoration:"none"}}>WhatsApp: {S.contact.phone}</a>,
        ])}
        {col("LEGAL",LEGAL.map(([l,h])=>link(l,h)))}
      </div>

      {/* Policy bar — the three required links, present on every page */}
      <div className="foot-legal" style={{borderTop:"1px solid var(--color-hairline)",marginTop:"clamp(32px,5vw,56px)",paddingTop:"var(--space-xl)",display:"flex",justifyContent:"space-between",gap:"var(--space-lg)",flexWrap:"wrap",alignItems:"center"}}>
        <span style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>{S.footer.copyright}</span>
        <nav aria-label="Policies" className="foot-legal-links" style={{display:"flex",gap:"var(--space-lg)",flexWrap:"wrap",alignItems:"center"}}>
          {LEGAL.map(([l,h])=><a key={l} href={h} className="foot-link" style={{...mono,fontSize:10,color:"var(--color-body-mid)",textDecoration:"none",minHeight:32,display:"inline-flex",alignItems:"center"}}>{l.toUpperCase()}</a>)}
        </nav>
      </div>
    </div>
  </footer>;
}

/* Kept as an alias so existing page code continues to work. */
Object.assign(window,{GlobalFooter,SiteFooter:GlobalFooter});
