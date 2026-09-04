const {Icon:TI,Eyebrow:TEy}=DS;

function TokenBar({month,amount,max,color}){
  const [ref,n]=useCountUp(amount,1200);
  return <div ref={ref} style={{display:"grid",gridTemplateColumns:"96px 1fr 92px",gap:"var(--space-md)",alignItems:"center",padding:"9px 0"}}>
    <span style={{...mono,color:"var(--color-body-mid)"}}>{month}</span>
    <span style={{height:8,borderRadius:99,background:"rgba(255,255,255,0.08)",overflow:"hidden",position:"relative"}}>
      <span style={{display:"block",height:"100%",width:`${(n/max)*100}%`,borderRadius:99,background:`linear-gradient(90deg, color-mix(in oklab, ${color} 55%, #0a0a0a), ${color})`,boxShadow:`0 0 16px -3px ${color}`,transition:"width 160ms linear"}}></span>
    </span>
    <span style={{fontFamily:"var(--font-mono)",fontSize:14,textAlign:"right",color:"#fff"}}>+{n.toLocaleString()}</span>
  </div>;
}

function TokenTotal({total,note}){
  const [ref,n]=useCountUp(total,1700);
  return <div ref={ref} style={{borderTop:"1px solid var(--border-translucent)",marginTop:"var(--space-lg)",paddingTop:"var(--space-lg)"}}>
    <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"var(--space-lg)"}}>
      <span style={{...mono,color:"var(--color-body-mid)"}}>TOTAL</span>
      <span style={{fontFamily:"var(--font-mono)",fontSize:"clamp(26px,3.6vw,38px)",letterSpacing:"-0.6px",background:"linear-gradient(90deg,#fff,var(--c-cyan))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{n.toLocaleString()} <span style={{fontSize:13,letterSpacing:"1.2px"}}>FREE TOKENS</span></span>
    </div>
    <p className="vx-body-sm" style={{color:"var(--color-body-mid)",margin:"var(--space-md) 0 0"}}>{note}</p>
  </div>;
}

function TokenCard({eyebrow,title,icon,accent,children}){
  return <div className="vx-lift" style={{position:"relative",border:"1px solid var(--color-hairline)",borderRadius:14,background:`linear-gradient(168deg, color-mix(in oklab, ${ACCENT[accent][0]} 14%, #17181c), #101115)`,padding:"clamp(20px,3vw,32px)","--glow":`color-mix(in oklab, ${ACCENT[accent][1]} 60%, transparent)`,overflow:"hidden"}}>
    <span aria-hidden="true" style={{position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(90deg,transparent,${ACCENT[accent][0]},${ACCENT[accent][1]},transparent)`}}></span>
    <div style={{display:"flex",alignItems:"center",gap:12}}>
      <Tile icon={icon} size={40} accent={accent}/>
      <div>
        <TEy color="var(--color-body-mid)">{eyebrow}</TEy>
        <h3 className="vx-display-sm" style={{margin:"4px 0 0",fontSize:26}}>{title}</h3>
      </div>
    </div>
    <div style={{marginTop:"var(--space-xl)"}}>{children}</div>
  </div>;
}

function Tokens(){
  return <Shell label="Tokens" style={{background:"linear-gradient(180deg,var(--color-canvas),var(--deep-2) 55%,var(--color-canvas))"}}>
    <Reveal><Head eyebrow="INCLUDED TOKENS" title="Free tokens with every subscription." lead="Tokens power the AI tools inside your dashboard. They are added to your account on a fixed monthly schedule."/></Reveal>
    <div className="offer-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(24px,4vw,48px)",marginTop:"clamp(36px,5vw,64px)"}}>
      <Reveal>
        <TokenCard eyebrow="3-MONTH SUBSCRIPTION" title="4,000 free tokens" icon="coins" accent="email">
          {[["MONTH 1",1500,"var(--c-cyan)"],["MONTH 2",1500,"var(--c-blue)"],["MONTH 3",1000,"var(--c-violet)"]].map(([m,v,c])=><TokenBar key={m} month={m} amount={v} max={1500} color={c}/>)}
          <TokenTotal total={4000} note="Month 1: 1,500 · Month 2: 1,500 · Month 3: 1,000."/>
        </TokenCard>
      </Reveal>
      <Reveal delay={120}>
        <TokenCard eyebrow="ANNUAL SUBSCRIPTION" title="9,000 free tokens" icon="crown" accent="gold">
          <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:6,marginBottom:"var(--space-lg)"}}>
            {Array.from({length:12}).map((_,i)=>{
              const v=i<6?1000:500, c=i<6?"var(--c-gold)":"var(--c-gold-soft)";
              return <div key={i} style={{border:"1px solid var(--color-hairline)",borderRadius:8,padding:"8px 4px",textAlign:"center",background:`linear-gradient(180deg, color-mix(in oklab, ${c} 14%, transparent), rgba(255,255,255,.02))`}}>
                <div style={{...mono,fontSize:9,color:"var(--color-body-mid)"}}>M{i+1}</div>
                <div style={{fontFamily:"var(--font-mono)",fontSize:11,marginTop:3,color:"#fff"}}>+{v}</div>
                <div style={{height:i<6?20:10,marginTop:6,borderRadius:3,background:`linear-gradient(180deg,${c},color-mix(in oklab,${c} 30%,#0a0a0a))`,boxShadow:`0 0 12px -4px ${c}`}}></div>
              </div>;
            })}
          </div>
          {[["MONTHS 1-6",1000,"var(--c-gold)"],["MONTHS 7-12",500,"var(--c-gold-soft)"]].map(([m,v,c])=><TokenBar key={m} month={m} amount={v} max={1500} color={c}/>)}
          <TokenTotal total={9000} note="Months 1-6: 1,000 per month (6,000). Months 7-12: 500 per month (3,000)."/>
        </TokenCard>
      </Reveal>
    </div>
  </Shell>;
}

Object.assign(window,{Tokens,TokenBar,TokenCard});
