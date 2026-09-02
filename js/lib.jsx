const DS = window.VelorixAIDesignSystem_369328;
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* one shared ticker. Scroll events drive it; a rAF watcher covers hosts that scroll a wrapper
   (or restore a position) without emitting window scroll events. */
const scrollSubs = new Set();
let ticking = false;
function tick(){ticking=false;scrollSubs.forEach(f=>{try{f()}catch(e){}})}
function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(tick)}}
window.addEventListener("scroll",onScroll,{passive:true});
window.addEventListener("resize",onScroll);
let _lastY=-1;
(function watch(){
  const y=window.scrollY||document.documentElement.scrollTop||0;
  if(y!==_lastY){_lastY=y;tick()}
  requestAnimationFrame(watch);
})();

/* progress 0..1 of an element travelling through the viewport.
   mode "through": 0 when element top hits viewport bottom, 1 when element bottom hits viewport top
   mode "sticky":  0 when element top hits viewport top, 1 when element bottom hits viewport bottom */
function useProgress(mode="through"){
  const ref = React.useRef(null);
  const [p,setP] = React.useState(mode==="sticky"?0:0.5);
  React.useEffect(()=>{
    const el=ref.current; if(!el) return;
    const read=()=>{
      const r=el.getBoundingClientRect(), vh=window.innerHeight;
      let v;
      if(mode==="sticky"){ v=(-r.top)/Math.max(1,(r.height-vh)); }
      else { v=(vh-r.top)/Math.max(1,(vh+r.height)); }
      setP(Math.min(1,Math.max(0,v)));
    };
    scrollSubs.add(read); read();
    return()=>scrollSubs.delete(read);
  },[mode]);
  return [ref, REDUCED?(mode==="sticky"?p:0.5):p];
}

const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));/* remap p from [a,b] to 0..1 */
const seg=(p,a,b)=>clamp((p-a)/(b-a));
const lerp=(a,b,t)=>a+(b-a)*t;
const ease=t=>t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2;

/* enter-on-view wrapper — driven by the shared scroll ticker so fast jumps, restored scroll
   positions and instant navigation all still reveal content */
function Reveal({children,delay=0,y=24,as:Tag="div",style,...rest}){
  const ref=React.useRef(null); const [seen,setSeen]=React.useState(REDUCED);
  React.useEffect(()=>{
    if(REDUCED)return;
    const el=ref.current; if(!el) return;
    let done=false;
    const check=()=>{
      if(done)return;
      const r=el.getBoundingClientRect();
      if(r.top<window.innerHeight*0.94){done=true;setSeen(true);scrollSubs.delete(check)}
    };
    scrollSubs.add(check); check();
    return()=>scrollSubs.delete(check);
  },[]);
  return <Tag ref={ref} style={{opacity:seen?1:0,transform:seen?"none":`translate3d(0,${y}px,0)`,transition:`opacity 700ms cubic-bezier(.4,0,.2,1) ${delay}ms, transform 700ms cubic-bezier(.4,0,.2,1) ${delay}ms`,...style}} {...rest}>{children}</Tag>;
}

/* count up when scrolled into view */
function useCountUp(target,dur=1400){
  const ref=React.useRef(null); const [n,setN]=React.useState(REDUCED?target:0);
  React.useEffect(()=>{
    if(REDUCED){setN(target);return}
    const el=ref.current; if(!el) return;
    let started=false;
    const check=()=>{
      if(started)return;
      const r=el.getBoundingClientRect();
      if(r.top<window.innerHeight*0.9){
        started=true; scrollSubs.delete(check);
        const t0=performance.now();
        const step=now=>{const t=clamp((now-t0)/dur);setN(Math.round(target*ease(t)));if(t<1)requestAnimationFrame(step)};
        requestAnimationFrame(step);
      }
    };
    scrollSubs.add(check); check();
    return()=>scrollSubs.delete(check);
  },[target,dur]);
  return [ref,n];
}

/* viewport helper — sticky scenes compose differently under 1180px */
function useNarrow(q="(max-width:1180px)"){
  const [n,setN]=React.useState(()=>window.matchMedia(q).matches);
  React.useEffect(()=>{const m=window.matchMedia(q);const f=()=>setN(m.matches);m.addEventListener("change",f);return()=>m.removeEventListener("change",f)},[q]);
  return n;
}

/* section scaffolding */
function Shell({children,style,id,tone="canvas",label}){
  const bg={canvas:"var(--color-canvas)",midnight:"var(--color-accent-midnight)",card:"var(--color-canvas-card)",light:"var(--color-primary)"}[tone];
  return <section id={id} data-screen-label={label} style={{background:bg,borderBottom:"1px solid var(--color-hairline)",padding:"clamp(64px,10vw,140px) var(--space-xl)",position:"relative",overflow:"hidden",...style}}>
    <div style={{maxWidth:"var(--container-max)",margin:"0 auto",position:"relative"}}>{children}</div>
  </section>;
}
function Head({eyebrow,title,lead,align="left",max=760,light=false,titleClass="vx-display-lg"}){
  const {Eyebrow}=DS;
  return <div style={{display:"flex",flexDirection:"column",gap:"var(--space-lg)",maxWidth:max,margin:align==="center"?"0 auto":0,textAlign:align}}>
    {eyebrow?<Eyebrow color={light?"rgba(10,10,10,.55)":"var(--color-body-mid)"}>{eyebrow}</Eyebrow>:null}
    {title?<h2 className={titleClass} style={{margin:0,color:light?"var(--color-on-primary)":"var(--color-ink)",textWrap:"pretty"}}>{title}</h2>:null}
    {lead?<p className="vx-body-lg" style={{margin:0,color:light?"rgba(10,10,10,.7)":"var(--color-body)",maxWidth:640,marginInline:align==="center"?"auto":0,textWrap:"pretty"}}>{lead}</p>:null}
  </div>;
}

Object.assign(window,{DS,REDUCED,useProgress,useNarrow,clamp,seg,lerp,ease,Reveal,useCountUp,Shell,Head,scrollSubs});
