const {Icon:AI_,Eyebrow:AEy}=DS;

const FLOW=[
  ["NEW LEAD","user-plus","clients","Form submitted · yourbrand.com"],
  ["AI QUALIFICATION","sparkles","ai","Intent scored · 87 / 100"],
  ["PERSONALIZED FOLLOW-UP","mail","email","Email drafted and sent"],
  ["WHATSAPP MESSAGE","message-circle","whatsapp","“Hi Riya, here are 2 slots”"],
  ["CALL BOOKED","calendar-check","calendar","Tue 10:00 · confirmed"],
  ["CRM UPDATED","users","crm","Stage moved to Qualified"],
  ["CLIENT","handshake","gold","Invoice paid · onboarding started"],
];

function EventCard({i}){
  if(i===1) return <div style={{display:"grid",gap:8}}>
    <div style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>AI LEAD SCORE</div>
    <div style={{display:"flex",alignItems:"baseline",gap:8}}><span style={{fontFamily:"var(--font-mono)",fontSize:30,color:"#fff"}}>87</span><span style={{...mono,fontSize:10,color:"var(--c-teal)"}}>HIGH INTENT</span></div>
    <div style={{height:6,borderRadius:99,background:"rgba(255,255,255,.1)"}}><div style={{width:"87%",height:"100%",borderRadius:99,background:"linear-gradient(90deg,var(--c-violet),var(--c-cyan))"}}></div></div>
  </div>;
  if(i===3) return <div style={{display:"grid",gap:8}}>
    <div style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>WHATSAPP</div>
    <div className="vx-body-sm" style={{alignSelf:"start",padding:"9px 13px",borderRadius:"14px 14px 14px 4px",background:"linear-gradient(140deg,color-mix(in oklab,var(--c-teal) 32%,transparent),rgba(255,255,255,.05))",border:"1px solid var(--color-hairline)"}}>Hi Riya, here are 2 slots for your call.</div>
    <div className="vx-body-sm" style={{alignSelf:"end",padding:"9px 13px",borderRadius:"14px 14px 4px 14px",background:"rgba(255,255,255,.07)",border:"1px solid var(--color-hairline)"}}>Tuesday 10:00 works.</div>
  </div>;
  if(i===4) return <div style={{display:"grid",gap:8}}>
    <div style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>CALENDAR</div>
    <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 12px",borderRadius:10,background:"linear-gradient(90deg,color-mix(in oklab,var(--c-violet) 18%,transparent),transparent)",border:"1px solid var(--color-hairline)"}}>
      <span style={{width:3,height:26,borderRadius:99,background:"var(--c-violet)"}}></span>
      <span style={{...mono}}>TUE 10:00</span><span className="vx-body-sm" style={{flex:1}}>Strategy call</span><Pill dot="var(--c-teal)" tone="var(--c-teal)">BOOKED</Pill>
    </div>
  </div>;
  if(i===6) return <div style={{display:"grid",gap:8}}>
    <div style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>PAYMENT</div>
    <div style={{display:"flex",alignItems:"baseline",gap:8}}><span style={{fontFamily:"var(--font-mono)",fontSize:26,color:"#fff"}}>Invoice paid</span><span style={{...mono,fontSize:10,color:"var(--c-gold)"}}>RECEIVED</span></div>
    <div style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>ONBOARDING STARTED</div>
  </div>;
  const rows=[["Leads today","6"],["Qualified","4"],["Calls booked","2"]];
  return <div style={{display:"grid",gap:8}}>
    <div style={{...mono,fontSize:10,color:"var(--color-body-mid)"}}>{i===0?"NEW SUBMISSION":"CRM"}</div>
    {rows.map(([l,v])=><div key={l} style={{display:"flex",justifyContent:"space-between",...mono,color:"var(--color-body-mid)"}}><span>{l}</span><span style={{color:"#fff"}}>{v}</span></div>)}
  </div>;
}
Object.assign(window,{FLOW,EventCard});
