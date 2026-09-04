const {Icon:UI_,Eyebrow:UEy}=DS;

/* Three steps — editorial, not three identical cards: a numbered rule-separated
   sequence with one photograph anchoring the middle beat. */
const STEPS=[
  ["Book your free 30-minute demo","A VelorixAI specialist walks you through the platform and builds a plan around your business: coaching, consulting, or agency.","phone-call","clients"],
  ["Set up in 2 hours","Your website, funnel, CRM, WhatsApp automation, calendar, and payments go live in one guided build session. No tech skills required.","zap","gold"],
  ["Grow on autopilot","Your marketing runs 24/7. Leads come in, get nurtured, and book calls while you focus on delivering results for your clients.","trending-up","analytics"],
];

function Steps(){
  const [ref,p]=useProgress("through");
  const d=(p-0.5)*2;
  return <Shell label="How it works">
    <div className="steps-wrap" style={{display:"grid",gridTemplateColumns:"1.15fr .85fr",gap:"clamp(32px,6vw,88px)",alignItems:"start"}}>
      <div>
        <Reveal><Head eyebrow="FROM IDEA TO LIVE" title="Three steps to a running business" lead="VelorixAI is designed so any coach or solopreneur, with zero technical background, can go fully operational in a single session."/></Reveal>
        <div style={{marginTop:"clamp(28px,4vw,48px)"}}>
          {STEPS.map(([t,c,ic,acc],i)=>
            <Reveal key={t} delay={i*90} style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:"clamp(18px,3vw,32px)",padding:"clamp(20px,3vw,30px) 0",borderTop:"1px solid var(--color-hairline)"}}>
              <div style={{display:"grid",gap:12,justifyItems:"center"}}>
                <span style={{fontFamily:"var(--font-mono)",fontSize:"clamp(28px,4vw,44px)",lineHeight:1,letterSpacing:"-1px",color:ACCENT[acc][1]}}>{String(i+1).padStart(2,"0")}</span>
                <Tile icon={ic} size={34} accent={acc}/>
              </div>
              <div>
                <h3 className="vx-display-xs" style={{margin:"0 0 var(--space-sm)",fontSize:"clamp(18px,2.4vw,22px)"}}>{t}</h3>
                <p className="vx-body-md" style={{color:"var(--color-body-mid)",margin:0,maxWidth:460}}>{c}</p>
              </div>
            </Reveal>)}
        </div>
      </div>
      <div ref={ref} className="steps-photo" style={{position:"relative",transform:`translate3d(0,${-d*40}px,0)`,willChange:"transform"}}>
        <Photo id="steps-build" ratio="3 / 4.4" radius={18} placeholder="Guided build session, laptop, notes, focused work"/>
        <div className="scene-ui c" style={{transform:`translate3d(0,${d*26}px,0)`}}><BookedMoment time="14:30" title="Build session" who="Guided setup"/></div>
        <div className="scene-ui d" style={{transform:`translate3d(0,${-d*22}px,0)`}}><StatMoment value="2 hrs" label="Idea to live" accent="gold" icon="zap"/></div>
        <DemoNote/>
      </div>
    </div>
  </Shell>;
}

/* Four audience scenes. Each is a distinct composition — full-bleed, offset column,
   split diptych, tall portrait, so the section never reads as a repeating card row. */
const AUDIENCES=[
  {tag:"COACHES",title:"Coaches ready to go live",
   copy:"You’ve got the expertise. You just need the tech to stop holding you back. Launch your first funnel, sell your first offer, and start making money, all in 2 hours.",
   caption:"Funnel live in one session",icon:"filter",accent:"funnel",
   photo:["aud-coach","Online coaching session, coach and client on a video call"],
   layout:"bleed"},
  {tag:"CONSULTANTS",title:"Consultants who value their time",
   copy:"Every hour you spend on admin tasks is an hour you’re not earning. Automate everything. Focus on what you do best: delivering results for clients.",
   caption:"Bookings handled automatically",icon:"calendar",accent:"calendar",
   photo:["aud-consultant","Consultant on a client call in a bright workspace"],
   layout:"offset"},
  {tag:"AGENCIES",title:"Agency owners tired of tool chaos",
   copy:"You’re managing 5-6 tools, losing leads between systems, and spending ₹20K+ monthly. One dashboard. Everything connected. Your leads never fall through cracks again.",
   caption:"Every client in one pipeline",icon:"users",accent:"crm",
   photo:["aud-agency","Small creative team working together at a shared table"],
   layout:"diptych"},
  {tag:"ENTREPRENEURS",title:"Solopreneurs who want freedom",
   copy:"You don’t want to hire a tech team or waste 6 months building a website. You want to sell, deliver, and scale without the headache.",
   caption:"Brand presence, live in minutes",icon:"globe",accent:"website",
   photo:["aud-founder","Founder working on their business, late afternoon light"],
   layout:"portrait"},
];

function Copy({a}){
  const [c1,c2]=ACCENT[a.accent];
  return <Reveal>
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <Tile icon={a.icon} size={32} accent={a.accent}/>
      <UEy color="var(--brand-yellow)">{a.tag}</UEy>
    </div>
    <h3 className="vx-display-md" style={{margin:"var(--space-lg) 0",maxWidth:440,textWrap:"pretty"}}>{a.title}</h3>
    <p className="vx-body-lg" style={{color:"var(--color-body)",margin:0,maxWidth:450}}>{a.copy}</p>
    <div style={{display:"inline-flex",alignItems:"center",gap:10,marginTop:"var(--space-xl)",padding:"7px 14px",borderRadius:99,border:"1px solid var(--border-translucent)",background:`color-mix(in oklab, ${c1} 12%, transparent)`,...mono,color:"#fff"}}><UI_ name="arrow-right" size={14}/>{a.caption}</div>
  </Reveal>;
}

function Scene({a,i}){
  const [ref,p]=useProgress("through");
  const d=(p-0.5)*2;
  const L=a.layout;

  if(L==="bleed") return <div ref={ref} className="scene scene-bleed">
    <div className="scene-photo" style={{position:"relative",transform:`translate3d(0,${-d*22}px,0)`}}>
      <Photo id={a.photo[0]} placeholder={a.photo[1]} ratio="16 / 8" radius={20}/>
      <span aria-hidden="true" style={{position:"absolute",inset:0,borderRadius:20,background:"linear-gradient(100deg,rgba(10,10,10,.86) 8%,rgba(10,10,10,.35) 46%,transparent 72%)",pointerEvents:"none"}}></span>
      <div className="scene-plate"><Copy a={a}/></div>
      <div className="scene-ui a" style={{transform:`translate3d(0,${-d*44}px,0)`}}><LeadMoment name="Sarah Mehta" stage="Discovery call" when="Today · 10:00"/></div>
      <div className="scene-ui b" style={{transform:`translate3d(0,${-d*-30}px,0)`}}><StatMoment value="8 calls" label="Booked this week" accent="funnel" icon="filter"/></div>
    </div>
    <DemoNote/>
  </div>;

  if(L==="offset") return <div ref={ref} className="scene scene-offset">
    <div className="scene-col-text"><Copy a={a}/></div>
    <div className="scene-col-photo" style={{position:"relative",transform:`translate3d(0,${-d*46}px,0)`}}>
      <Photo id={a.photo[0]} placeholder={a.photo[1]} ratio="4 / 5" radius={18} mask="polygon(0 0,100% 4%,100% 100%,0 96%)"/>
      <div className="scene-ui c" style={{transform:`translate3d(0,${d*30}px,0)`}}><BookedMoment time="10:00 AM" title="Strategy call" who="Rohan Kapoor"/></div>
      <div className="scene-ui d" style={{transform:`translate3d(0,${-d*24}px,0)`}}><StatMoment value="6 hrs" label="Admin saved weekly" accent="calendar" icon="clock"/></div>
      <DemoNote/>
    </div>
  </div>;

  if(L==="diptych") return <div ref={ref} className="scene scene-diptych">
    <div className="scene-pair">
      <div style={{position:"relative",transform:`translate3d(0,${-d*34}px,0)`}}>
        <Photo id={a.photo[0]} placeholder={a.photo[1]} ratio="1 / 1.15" radius={18}/>
      </div>
      <div style={{position:"relative",transform:`translate3d(0,${-d*-26}px,0)`,marginTop:"18%"}}>
        <Photo id={a.photo[0]+"-2"} placeholder="Agency workspace detail, screens, notes, coffee" ratio="1 / 1.15" radius={18}/>
        <div className="scene-ui e" style={{transform:`translate3d(0,${-d*20}px,0)`}}><CampaignMoment sent="94" note="delivered"/></div>
      </div>
    </div>
    <div className="scene-col-text"><Copy a={a}/><DemoNote/></div>
  </div>;

  return <div ref={ref} className="scene scene-portrait">
    <div className="scene-col-text"><Copy a={a}/></div>
    <div className="scene-col-photo" style={{position:"relative",transform:`translate3d(0,${-d*40}px,0)`}}>
      <Photo id={a.photo[0]} placeholder={a.photo[1]} ratio="3 / 4" radius={18}/>
      <div className="scene-ui f" style={{transform:`translate3d(0,${d*34}px,0)`}}><GrowthMoment p={clamp((p-0.24)/0.42)} label="+18%" note="this month"/></div>
      <div className="scene-ui g" style={{transform:`translate3d(0,${-d*26}px,0)`}}><StatMoment value="42" label="New leads · 30 days" accent="website" icon="user-plus"/></div>
      <DemoNote/>
    </div>
  </div>;
}

function Audiences(){
  return <Shell id="solutions" label="Solutions" style={{paddingBottom:"clamp(40px,6vw,80px)"}}>
    <Reveal><Head eyebrow="WHO IT IS FOR" title="Built for people who sell their expertise." lead="Built for coaches, agency owners and solopreneurs who want to move fast."/></Reveal>
    <div style={{marginTop:"clamp(24px,4vw,56px)",display:"grid",gap:"clamp(56px,9vw,132px)"}}>
      {AUDIENCES.map((a,i)=><Scene key={a.tag} a={a} i={i}/>)}
    </div>
  </Shell>;
}

Object.assign(window,{Steps,Audiences,AUDIENCES,STEPS});
