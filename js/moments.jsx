/* Editorial photo frames + small product "moments".
   These replace the big dashboard panels outside the hero and product tour:
   a real photograph carries the section, and the software appears as the small,
   believable notifications that would actually surface in it. */
const {Icon:MoI}=DS;

/* Photography registry — real Pexels images, credited. Each frame is also a drop target,
   so any of these can be replaced by dragging your own licensed photo onto it. */
const PX=(id,w=1400)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
const PHOTOS={"chaos-person":[7034430,"George Milton","https://www.pexels.com/@george-milton"],"eco-context":[6285120,"Gustavo Fring","https://www.pexels.com/@gustavo-fring"],"aud-coach":[5439438,"Tima Miroshnichenko","https://www.pexels.com/@tima-miroshnichenko"],"aud-consultant":[7129005,"Michael Burrows","https://www.pexels.com/@michael-burrows"],"aud-agency":[7792770,"Yan Krukau","https://www.pexels.com/@yankrukov"],"aud-agency-2":[36766695,"SilverKBlack","https://www.pexels.com/@silverkblack"],"aud-founder":[9052775,"SHVETS production","https://www.pexels.com/@shvetsa"],"steps-build":[4872041,"Gustavo Fring","https://www.pexels.com/@gustavo-fring"],"apps-desk":[5466239,"Anthony Shkraba","https://www.pexels.com/@shkrabaanthony"],"book-author":[8530307,"Karolina Grabowska","https://www.pexels.com/@karola-g"],"site-context":[9034213,"RDNE Stock project","https://www.pexels.com/@rdne"],"cta-growth":[6814345,"cottonbro studio","https://www.pexels.com/@cottonbro"]};

/* masked, cropped, scroll-reactive photo frame */
function Photo({id,placeholder,mask,radius=16,style,ratio,className="",grade="cool",zoom=0,eager=false}){
  const rec=PHOTOS[id];
  const [wrapRef,p]=useProgress("through");
  if(!rec)return null;
  const scale=REDUCED?1:1+zoom*(1-Math.abs(p-0.5)*2)*0.06;
  return <div ref={wrapRef} className={className} style={{position:"relative",width:"100%",overflow:"hidden",borderRadius:mask?0:radius,...(ratio?{aspectRatio:ratio}:{height:"100%"}),...style}}>
    <div style={{position:"absolute",inset:0,transform:`scale(${scale})`,transformOrigin:"50% 40%",transition:REDUCED?"none":"transform 240ms linear",clipPath:mask||"none"}}>
      <image-slot id={id} placeholder={placeholder} shape={mask?"rect":"rounded"} radius={String(mask?0:radius)}
        src={(window.__resources&&window.__resources["photo-"+id])||(rec?PX(rec[0]):undefined)} credit={rec?`Photo by ${rec[1]} on Pexels`:undefined} credit-href={rec?rec[2]:undefined} fit="cover"></image-slot>
      {grade?<span aria-hidden="true" style={{position:"absolute",inset:0,pointerEvents:"none",background:grade==="warm"
        ?"linear-gradient(200deg, color-mix(in oklab, var(--c-gold) 16%, transparent), transparent 52%)"
        :"linear-gradient(200deg, color-mix(in oklab, var(--c-violet) 15%, transparent), transparent 46%), linear-gradient(20deg, color-mix(in oklab, var(--c-cyan) 12%, transparent), transparent 44%)"}}></span>:null}
    </div>
  </div>;
}

/* small caption that keeps demo data honest */
function DemoNote({children="Illustrative interface — sample data",align="left",light=false}){
  return <p style={{...mono,fontSize:9,letterSpacing:"1.4px",color:light?"rgba(10,10,10,.45)":"var(--color-body-mid)",margin:"var(--space-sm) 0 0",textAlign:align}}>{children}</p>;
}

/* --- the moments. Each is a compact, slightly irregular piece of real UI. --- */
function LeadMoment({name="Sarah Mehta",stage="Discovery call",when="Today · 10:00"}){
  return <div className="vx-lift vx-moment" style={{"--glow":"color-mix(in oklab, var(--c-indigo) 60%, transparent)"}}>
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <Tile icon="user-plus" size={26} accent="crm" radius={999}/>
      <span style={{...mono,fontSize:9,color:"var(--color-body-mid)"}}>NEW LEAD</span>
      <span style={{marginLeft:"auto",width:6,height:6,borderRadius:99,background:"var(--c-cyan)",boxShadow:"0 0 8px var(--c-cyan)"}}></span>
    </div>
    <div style={{display:"flex",alignItems:"center",gap:9,marginTop:11}}>
      <span style={{width:28,height:28,borderRadius:999,background:"linear-gradient(145deg,var(--c-blue),#1b2440)",display:"grid",placeItems:"center",fontFamily:"var(--font-mono)",fontSize:11,color:"#fff"}}>{name.split(" ").map(w=>w[0]).join("")}</span>
      <span style={{display:"grid",gap:1,minWidth:0}}>
        <span className="vx-body-sm" style={{color:"#fff",fontSize:13}}>{name}</span>
        <span style={{...mono,fontSize:9,color:"var(--color-body-mid)"}}>{stage} · {when}</span>
      </span>
    </div>
  </div>;
}

function BookedMoment({time="10:00 AM",title="Strategy call",who="Rohan Kapoor"}){
  return <div className="vx-lift vx-moment" style={{"--glow":"color-mix(in oklab, var(--c-violet) 60%, transparent)"}}>
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <Tile icon="calendar-check" size={26} accent="calendar" radius={999}/>
      <span style={{...mono,fontSize:9,color:"var(--color-body-mid)"}}>APPOINTMENT CONFIRMED</span>
    </div>
    <div style={{display:"flex",alignItems:"center",gap:11,marginTop:11}}>
      <span style={{width:3,alignSelf:"stretch",minHeight:30,borderRadius:99,background:"var(--c-violet)",boxShadow:"0 0 10px var(--c-violet)"}}></span>
      <span style={{display:"grid",gap:2}}>
        <span style={{fontFamily:"var(--font-mono)",fontSize:15,color:"#fff",letterSpacing:"-.2px"}}>{time}</span>
        <span style={{...mono,fontSize:9,color:"var(--color-body-mid)"}}>{title} · {who}</span>
      </span>
    </div>
  </div>;
}

function CampaignMoment({sent="94",note="delivered"}){
  return <div className="vx-lift vx-moment" style={{"--glow":"color-mix(in oklab, var(--c-cyan) 60%, transparent)"}}>
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <Tile icon="send" size={26} accent="email" radius={999}/>
      <span style={{...mono,fontSize:9,color:"var(--color-body-mid)"}}>CAMPAIGN SENT</span>
    </div>
    <div style={{marginTop:11,display:"grid",gap:7}}>
      <div style={{display:"flex",alignItems:"baseline",gap:7}}>
        <span style={{fontFamily:"var(--font-mono)",fontSize:19,color:"#fff"}}>{sent}%</span>
        <span style={{...mono,fontSize:9,color:"var(--color-body-mid)"}}>{note}</span>
      </div>
      <span style={{height:4,borderRadius:99,background:"rgba(255,255,255,.1)",display:"block"}}><span style={{display:"block",width:sent+"%",height:"100%",borderRadius:99,background:"linear-gradient(90deg,var(--c-blue),var(--c-cyan))"}}></span></span>
      <span style={{...mono,fontSize:9,color:"var(--color-body-mid)"}}>3 campaigns active · 12 follow-ups queued</span>
    </div>
  </div>;
}

/* a growth line that draws itself as the section scrolls — data as story, not dashboard */
function GrowthMoment({p=1,label="+18%",note="this month"}){
  const pts=[12,20,17,28,26,38,44,41,56,64,72,86];
  const path=pts.map((v,i)=>`${(i/(pts.length-1))*100},${100-v}`).join(" ");
  const draw=clamp(p);
  return <div className="vx-lift vx-moment" style={{"--glow":"color-mix(in oklab, var(--c-teal) 60%, transparent)",width:"100%",maxWidth:250}}>
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <Tile icon="trending-up" size={26} accent="analytics" radius={999}/>
      <span style={{...mono,fontSize:9,color:"var(--color-body-mid)"}}>LEADS · 12 WEEKS</span>
    </div>
    <div style={{display:"flex",alignItems:"baseline",gap:7,marginTop:10}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:20,color:"#fff"}}>{label}</span>
      <span style={{...mono,fontSize:9,color:"var(--c-teal)"}}>{note}</span>
    </div>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" style={{width:"100%",height:52,marginTop:8,display:"block",overflow:"visible"}}>
      <defs><linearGradient id="gmS" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#2dd4bf"/><stop offset="100%" stopColor="#22d3ee"/></linearGradient></defs>
      <polyline points={path} fill="none" stroke="url(#gmS)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength="1" strokeDasharray="1" strokeDashoffset={1-draw}/>
      <circle cx={draw*100} cy={100-pts[Math.min(pts.length-1,Math.round(draw*(pts.length-1)))]} r="2.6" fill="#fff" opacity={draw>0.05?1:0}/>
    </svg>
  </div>;
}

function StatMoment({value,label,accent="crm",icon="activity"}){
  return <div className="vx-lift vx-moment" style={{"--glow":`color-mix(in oklab, ${ACCENT[accent][1]} 60%, transparent)`,display:"flex",alignItems:"center",gap:11}}>
    <Tile icon={icon} size={30} accent={accent}/>
    <span style={{display:"grid",gap:1}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:17,color:"#fff",letterSpacing:"-.2px"}}>{value}</span>
      <span style={{...mono,fontSize:9,color:"var(--color-body-mid)"}}>{label}</span>
    </span>
  </div>;
}

Object.assign(window,{Photo,DemoNote,LeadMoment,BookedMoment,CampaignMoment,GrowthMoment,StatMoment});
