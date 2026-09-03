const {Icon:CI,Button:CB,Eyebrow:CEy}=DS;

const TESTIMONIALS=[
  ["Riya Malhotra","Fitness Coach, Pune | 8-12 clients/month","I was managing my coaching business across 7 different tools — Kajabi for courses, Calendly for bookings, a separate CRM, WhatsApp manually, Stripe for payments. I was losing leads because nothing talked to each other. After my Velorix AI demo, everything was live in 2 hours. My first automated WhatsApp sequence brought in 3 leads the next day. By week 2, I had my first paying client. This single platform has literally tripled my efficiency and cut my monthly subscriptions from ₹15,000 to ₹5,000."],
  ["Aman Singh","Agency Owner, Jaipur | 15+ active clients","As an agency owner, I was drowning in tool management. My team was jumping between Pipedrive, email, scheduling apps, and invoicing software. It was chaos. Anis showed us how Velorix AI consolidates everything — our entire client pipeline, automated follow-ups, booking management, and billing — all in one place. We've cut our operational overhead by 40% and onboarded 5 new clients in the first month because we're actually responsive now. Best business decision we made this year."],
  ["Priya Kapoor","Business Consultant, Indore | ₹2.5L+ monthly","I was a freelancer consultant with zero interest in tech. I thought I'd need to hire someone to build my funnel and CRM. The 2-hour setup call with Velorix AI was eye-opening — within hours, I had a professional website, a lead capture funnel, and WhatsApp automation running. No coding, no confusion. In 30 days, I went from ₹0 to ₹2.5L in revenue because my leads weren't falling through the cracks anymore. The system does what used to require a VA and three different software licenses."],
];

const FAQS=[
  ["How much does Velorix AI cost?","Pricing depends on your plan — Prestige (8 current apps, quarterly) or Signature (16 current apps, annual). Our investment range is ₹25,900 to ₹85,900. We confirm exact pricing on your free demo call based on your niche, business size and the specific apps you need."],
  ["Do I need any technical skills to use Velorix AI?","Not at all. The dashboard is built for coaches and agency owners with no coding or design background. Everything is drag-and-drop, and we guide you through the entire setup."],
  ["How long is the demo?","The free demo session takes about 30 minutes. In that time, we'll walk you through exactly how Velorix AI replaces your entire tool stack and helps you launch faster."],
  ["Can I move my existing tools over?","Yes. Our team helps you migrate your contacts, content and offers during onboarding. We make sure nothing gets lost in the transition."],
  ["How fast can I actually launch?","Most clients go from idea to a live business in just 2 hours during our guided build session. Your website, funnel, CRM, WhatsApp automation, calendar, and payments can all go live in that single session."],
  ["What if I'm not ready to commit?","The demo is completely free and no-obligation. You'll only be charged if you decide to move forward after seeing exactly how Velorix AI works for your business."],
  ["What about my data and privacy?","Your data is 100% yours and secure with us. We follow strict privacy and security protocols. You can review our full Privacy Policy and Terms & Conditions before booking your demo."],
];

function Testimonials(){
  return <Shell id="testimonials" label="Testimonials">
    <Reveal><Head eyebrow="SOCIAL PROOF" title="Loved by coaches & agencies"/></Reveal>
    <div className="quote-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"var(--space-xl)",marginTop:"clamp(40px,6vw,64px)"}}>
      {TESTIMONIALS.map(([n,role,q],i)=>
        <Reveal key={n} delay={i*110} className="vx-lift" style={{border:"1px solid var(--color-hairline)",borderRadius:12,background:`linear-gradient(168deg, color-mix(in oklab, ${ACCENT[["crm","analytics","gold"][i%3]][0]} 12%, transparent), rgba(25,25,25,.6))`,"--glow":`color-mix(in oklab, ${ACCENT[["crm","analytics","gold"][i%3]][1]} 60%, transparent)`,padding:"var(--space-xl)",display:"grid",gap:"var(--space-lg)",alignContent:"start"}}>
          <React.Fragment><Tile icon="quote" size={30} accent={["crm","analytics","gold"][i%3]}/><p className="vx-body-md" style={{color:"var(--color-body)",margin:0}}>{q}</p></React.Fragment>
          <div style={{display:"flex",gap:12,alignItems:"center",borderTop:"1px solid var(--color-hairline)",paddingTop:"var(--space-lg)"}}>
            <Tile size={36} accent={["crm","analytics","gold"][i%3]} radius={999}><span style={{fontFamily:"var(--font-mono)",fontSize:14,color:"#fff"}}>{n[0]}</span></Tile>
            <span>
              <span className="vx-body-sm" style={{display:"block",color:"var(--color-ink)"}}>{n}</span>
              <span style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>{role}</span>
            </span>
          </div>
        </Reveal>)}
    </div>
  </Shell>;
}

function Faq(){
  const [open,setOpen]=React.useState(0);
  return <Shell id="faq" label="FAQ">
    <div className="split-2" style={{display:"grid",gridTemplateColumns:".8fr 1.2fr",gap:"clamp(32px,6vw,80px)",alignItems:"start"}}>
      <Reveal><Head eyebrow="FAQ" title="Frequently asked questions" lead="Direct answers about the platform, the demo and what launch actually involves."/></Reveal>
      <div>
        {FAQS.map(([q,a],i)=>
          <div key={q} style={{borderTop:"1px solid var(--color-hairline)"}}>
            <button onClick={()=>setOpen(o=>o===i?-1:i)} aria-expanded={open===i} style={{width:"100%",background:"transparent",border:"none",cursor:"pointer",display:"flex",gap:"var(--space-lg)",alignItems:"center",padding:"var(--space-xl) 0",textAlign:"left",color:"var(--color-ink)"}}>
              <h3 className="vx-display-xs" style={{margin:0,flex:1}}>{q}</h3>
              <Tile icon={open===i?"minus":"plus"} size={30} accent={open===i?"ai":"clients"} glow={open===i}/>
            </button>
            <div style={{maxHeight:open===i?400:0,overflow:"hidden",transition:"max-height 380ms cubic-bezier(.4,0,.2,1)"}}>
              <p className="vx-body-md" style={{color:"var(--color-body)",margin:"0 0 var(--space-xl)",maxWidth:640}}>{a}</p>
            </div>
          </div>)}
      </div>
    </div>
  </Shell>;
}

function FinalCta(){
  return <Shell id="demo" label="Final CTA" style={{textAlign:"center"}}>
    <div style={{position:"absolute",left:"50%",top:"-10%",width:"min(120%,900px)",aspectRatio:"1",transform:"translateX(-50%)",background:"radial-gradient(circle, color-mix(in oklab, var(--c-violet) 30%, transparent), color-mix(in oklab, var(--c-cyan) 12%, transparent) 45%, transparent 70%)",pointerEvents:"none"}}></div>
    <div className="cta-photo" style={{position:"absolute",left:"50%",top:"-4%",width:"min(88%,980px)",height:"min(86%,560px)",transform:"translateX(-50%)",opacity:.3,pointerEvents:"none"}}>
      <Photo id="cta-growth" placeholder="Confident professional, growing business" mask="polygon(0 0,100% 0,100% 82%,0 100%)" grade="warm"/>
    </div>
    <Reveal style={{position:"relative"}}>
      <CEy color="var(--color-body-mid)" style={{textAlign:"center"}}>BOOK A DEMO</CEy>
      <h2 className="vx-display-lg" style={{margin:"var(--space-lg) auto",maxWidth:900,textWrap:"pretty"}}>You bring the expertise. Velorix AI builds the system.</h2>
      <p className="vx-body-lg" style={{color:"var(--color-body)",maxWidth:600,margin:"0 auto var(--space-2xl)"}}>Launch faster, automate your growth and manage your business from one intelligent platform.</p>
      <div style={{display:"flex",gap:"var(--space-md)",justifyContent:"center",flexWrap:"wrap"}}>
        <a href="mailto:contact.velorixai@gmail.com?subject=Velorix AI%20free%20demo" className="vx-cta">BOOK YOUR FREE DEMO</a>
        <CB href="#annual">CLAIM ANNUAL BONUS</CB>
      </div>
      <p style={{...mono,color:"var(--color-body-mid)",marginTop:"var(--space-xl)"}}>No cost, no obligation — just your time for 30 minutes.</p>
    </Reveal>
  </Shell>;
}

Object.assign(window,{Testimonials,Faq,FinalCta,FAQS,TESTIMONIALS});
