/* ONE universal lead form. Every major conversion CTA on the page opens this. */
const {Icon:MIc}=DS;

const LEAD_EVENT="vx:open-lead-form";
window.openLeadForm=()=>window.dispatchEvent(new CustomEvent(LEAD_EVENT));
window.openBookForm=window.openLeadForm;

const FIELDS=[
  {id:"name",label:"Full Name",type:"text",required:true,auto:"name",ph:"Your full name"},
  {id:"email",label:"Email Address",type:"email",required:true,auto:"email",ph:"you@yourbrand.com"},
  {id:"phone",label:"Phone Number",type:"tel",required:true,auto:"tel",ph:"+91 00000 00000"},
  {id:"company",label:"Business Name",type:"text",required:false,auto:"organization",ph:"Optional"},
];

const inputBase={width:"100%",padding:"11px 14px",borderRadius:10,background:"rgba(255,255,255,.04)",border:"1px solid var(--border-translucent)",color:"var(--color-ink)",fontFamily:"var(--font-body)",fontSize:15,lineHeight:"22px",outline:"none",transition:"border-color 150ms cubic-bezier(.4,0,.2,1),background 150ms,box-shadow 200ms"};

function Field({f,value,onChange,error,disabled}){
  const [focus,setFocus]=React.useState(false);
  const style={...inputBase,
    borderColor:error?"rgba(255,255,255,.6)":focus?"var(--border-translucent-strong)":"var(--border-translucent)",
    background:focus?"rgba(255,255,255,.07)":inputBase.background,
    boxShadow:focus?"0 0 0 3px color-mix(in oklab, var(--c-violet) 26%, transparent)":"none",
    opacity:disabled?.55:1};
  const common={id:"lf-"+f.id,name:f.id,value,disabled,onChange:e=>onChange(f.id,e.target.value),onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),style,"aria-invalid":!!error,"aria-describedby":error?"lf-"+f.id+"-err":undefined};
  return <div style={{display:"grid",gap:6}}>
    <label htmlFor={"lf-"+f.id} style={{...mono,fontSize:11,color:"var(--color-body-mid)"}}>{f.label}{f.required?" *":""}</label>
    {f.kind==="textarea"
      ? <textarea {...common} rows="3" placeholder={f.ph} style={{...style,resize:"vertical"}}></textarea>
      : <input {...common} type={f.type} placeholder={f.ph} autoComplete={f.auto} required={f.required}/>}
    {error?<span id={"lf-"+f.id+"-err"} style={{fontSize:13,lineHeight:"18px",color:"var(--color-ink)"}}>{error}</span>:null}
  </div>;
}

const EMPTY={name:"",email:"",phone:"",company:"",message:""};

function LeadModal(){
  const [open,setOpen]=React.useState(false);
  const [state,setState]=React.useState("form");   /* form | sending | done */
  const [cal,setCal]=React.useState("");
  const [vals,setVals]=React.useState(EMPTY);
  const [errs,setErrs]=React.useState({});
  const cardRef=React.useRef(null), lastFocus=React.useRef(null);

  React.useEffect(()=>{
    /* always opens EMPTY */
    const openIt=()=>{lastFocus.current=document.activeElement;setVals(EMPTY);setErrs({});setCal("");setState("form");setOpen(true)};
    window.addEventListener(LEAD_EVENT,openIt);
    const click=e=>{
      const t=e.target.closest("[data-lead-cta],[data-book-cta],a.vx-cta,button.vx-cta");
      if(!t||t.hasAttribute("data-no-lead"))return;
      e.preventDefault(); openIt();
    };
    document.addEventListener("click",click);
    return()=>{window.removeEventListener(LEAD_EVENT,openIt);document.removeEventListener("click",click)};
  },[]);

  const close=React.useCallback(()=>{
    setOpen(false);
    if(lastFocus.current&&lastFocus.current.focus)lastFocus.current.focus();
  },[]);

  React.useEffect(()=>{
    if(!open)return;
    const key=e=>{
      if(e.key==="Escape"){close();return}
      if(e.key!=="Tab"||!cardRef.current)return;
      const n=[...cardRef.current.querySelectorAll('button,input,select,textarea,a[href]')].filter(el=>!el.disabled);
      if(!n.length)return;
      const first=n[0],last=n[n.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    };
    document.addEventListener("keydown",key);
    const t=setTimeout(()=>{const el=cardRef.current&&cardRef.current.querySelector("#lf-name, button");if(el)el.focus()},70);
    const prev=document.body.style.overflow; document.body.style.overflow="hidden";
    return()=>{document.removeEventListener("keydown",key);clearTimeout(t);document.body.style.overflow=prev};
  },[open,close,state]);

  const set=(k,v)=>{setVals(s=>({...s,[k]:v}));setErrs(s=>s[k]?{...s,[k]:null}:s)};

  const submit=e=>{
    e.preventDefault();
    if(state!=="form")return;
    const next={};
    if(!vals.name.trim())next.name="Please enter your name.";
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(vals.email.trim()))next.email="Please enter a valid email address.";
    const digits=vals.phone.replace(/\D/g,"");
    if(!vals.phone.trim())next.phone="Please enter your phone number.";
    else if(digits.length<8||digits.length>15)next.phone="Please enter a valid phone number.";
    setErrs(next);
    if(Object.keys(next).length){
      const el=cardRef.current.querySelector(`#lf-${Object.keys(next)[0]}`); if(el)el.focus();
      return;
    }
    setState("sending");
    /* --- Connect your CRM / email tool here ---------------------------------
       Replace this setTimeout with a fetch() POST to your endpoint and call
       setState("done") on success. Fields: name, email, phone, company, message.
       ---------------------------------------------------------------------- */
    setTimeout(()=>{
      setState("done");
      /* Hand straight off to the Cal.id availability view — no extra click.
         The booking URL lives in site/config.js under links.booking. */
      const S=window.SITE;
      let url=S.links.booking;
      try{
        const u=new URL(S.links.booking);
        u.searchParams.set("name",vals.name.trim());
        u.searchParams.set("email",vals.email.trim());
        u.searchParams.set("phone",vals.phone.trim());
        if(vals.message)u.searchParams.set("notes",vals.message);
        url=u.toString();
      }catch(e){}
      setCal(url);
    },700);
  };

  if(!open)return null;
  const busy=state==="sending";
  return <div role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)close()}} style={{position:"fixed",inset:0,zIndex:200,display:"grid",placeItems:"center",padding:"var(--space-lg)",background:"rgba(8,8,10,.74)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",animation:REDUCED?"none":"vxFadeIn 220ms ease-out",overflowY:"auto"}}>
    <div ref={cardRef} role="dialog" aria-modal="true" aria-labelledby="lf-title" style={{position:"relative",width:state==="done"?"min(920px,100%)":"min(540px,100%)",maxHeight:"92vh",overflowY:"auto",borderRadius:16,border:"1px solid var(--border-translucent)",background:"linear-gradient(168deg,#101C38,#080F20)",boxShadow:"0 40px 120px -40px rgba(0,0,0,.9), 0 0 0 1px rgba(255,255,255,.04)",padding:"clamp(22px,3.4vw,34px)",animation:REDUCED?"none":"vxModalIn 300ms cubic-bezier(.4,0,.2,1)"}}>
      <span aria-hidden="true" style={{position:"absolute",top:0,left:0,right:0,height:1,borderRadius:"16px 16px 0 0",background:"linear-gradient(90deg,transparent,var(--c-cyan),var(--c-violet),transparent)"}}></span>
      <button type="button" onClick={close} aria-label="Close the contact form" style={{position:"absolute",top:14,right:14,width:36,height:36,display:"grid",placeItems:"center",borderRadius:999,border:"1px solid var(--border-translucent)",background:"rgba(255,255,255,.04)",color:"var(--color-ink)",cursor:"pointer"}}><MIc name="x" size={16}/></button>

      {state==="done"
        ? <div style={{display:"grid",gap:"var(--space-lg)"}}>
            <div style={{display:"flex",alignItems:"center",gap:12,paddingRight:44}}>
              <span style={{animation:REDUCED?"none":"vxPop 520ms cubic-bezier(.34,1.56,.64,1)",flexShrink:0}}><Tile icon="check" size={42} accent="analytics" radius={999}/></span>
              <span style={{display:"grid",gap:3}}>
                <h2 className="vx-display-xs" style={{margin:0,fontSize:20}}>Pick your time</h2>
                <p className="vx-body-sm" style={{color:"var(--color-body-mid)",margin:0}}>Choose a slot below to confirm your free 30-minute demo.</p>
              </span>
            </div>
            <div className="lf-cal" style={{position:"relative",borderRadius:12,overflow:"hidden",border:"1px solid var(--border-translucent)",background:"#fff",minHeight:520}}>
              <span aria-hidden="true" className="lf-cal-load" style={{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"linear-gradient(168deg,#101C38,#080F20)",color:"var(--color-body-mid)",...mono,fontSize:11}}>LOADING AVAILABILITY…</span>
              {cal?<iframe title="Book your demo" src={cal} loading="eager" style={{position:"relative",width:"100%",height:"min(70vh,620px)",border:"none",display:"block"}}></iframe>:null}
            </div>
            <div style={{display:"flex",gap:"var(--space-md)",alignItems:"center",flexWrap:"wrap"}}>
              <a href={cal} target="_blank" rel="noopener" data-no-lead style={{...mono,fontSize:10,color:"var(--c-cyan)"}}>CALENDAR NOT LOADING? OPEN IT IN A NEW TAB</a>
              <button type="button" onClick={close} data-no-lead style={{marginLeft:"auto",...mono,fontSize:10,background:"none",border:"none",color:"var(--color-body-mid)",cursor:"pointer"}}>CLOSE</button>
            </div>
          </div>
        : <form onSubmit={submit} noValidate style={{display:"grid",gap:"var(--space-lg)"}}>
            <div style={{display:"grid",gap:"var(--space-md)",paddingRight:44}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <Tile icon="sparkles" size={38} accent="ai" radius={999}/>
                <span style={{...mono,fontSize:11,color:"var(--color-body-mid)"}}>FREE 30-MINUTE DEMO</span>
              </div>
              <h2 id="lf-title" className="vx-display-sm" style={{margin:0,fontSize:"clamp(24px,3.4vw,32px)",letterSpacing:"-0.6px"}}>Let’s Talk About Your Business</h2>
              <p className="vx-body-sm" style={{color:"var(--color-body)",margin:0}}>Tell us a few details and our team will get in touch with you.</p>
            </div>
            <div className="lf-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-md)"}}>
              {FIELDS.map(f=><Field key={f.id} f={f} value={vals[f.id]} onChange={set} error={errs[f.id]} disabled={busy}/>)}
              <div style={{gridColumn:"1 / -1"}}><Field f={{id:"message",label:"Message",kind:"textarea",ph:"Anything you'd like us to know?"}} value={vals.message} onChange={set} disabled={busy}/></div>
            </div>
            <button type="submit" data-no-lead disabled={busy} className="vx-cta lf-send" style={{justifyContent:"center",border:"1px solid rgba(255,255,255,.22)",cursor:busy?"progress":"pointer",font:"inherit",fontSize:14,letterSpacing:"1px",opacity:busy?.7:1}}>
              {busy?<><span className="lf-spin" aria-hidden="true"></span>SENDING…</>:"SEND"}
            </button>
            <p style={{...mono,fontSize:10,color:"var(--color-body-mid)",margin:0,textTransform:"none",letterSpacing:".2px",lineHeight:"16px"}}>Your information is safe with us. We will only use it to contact you about your request.</p>
          </form>}
    </div>
  </div>;
}

Object.assign(window,{LeadModal,BookModal:LeadModal});
