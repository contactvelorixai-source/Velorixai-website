/* ============================================================================
   VELORIXAI - SITE CONFIGURATION
   ----------------------------------------------------------------------------
   This is the single source of truth for everything you are likely to change:
   brand name, contact details, links, app data, packages, pricing and media.

   Edit the values below and reload the page. Nothing else needs to change.
   Every section of the site reads from this file.
   ============================================================================ */

window.SITE = {

  /* ---------------------------------------------------------------- BRAND -- */
  brand: {
    name:      "VelorixAI",              /* used in all visible copy */
    nameCaps:  "VELORIX AI",              /* used in mono/uppercase labels */
    tagline:   "16+ AI-powered apps. One dashboard.",
    logo:      "images/velorixai-mark.png", /* swap for your own file in images/ */
  },

  /* -------------------------------------------------------------- CONTACT -- */
  contact: {
    email:    "contact.velorixai@gmail.com",
    whatsapp: "https://wa.me/918218854770",   /* WhatsApp click-to-chat link */
    phone:    "+91 8218854770",
    address:  "Bandia, Uttarakhand, India",
  },

  /* ----------------------------------------------------------------- LINKS -- */
  links: {
    /* Booking. After the lead form is submitted the visitor lands straight on
       this Cal.id availability view, no extra click, no profile page. */
    booking:  "https://cal.id/velorixai/demo-call?duration=30",
    /* The landing page's filename. It is "index.html" on a normal web host;
       inside this design project the file is named "VelorixAI Website.html". */
    home:     "index.html",
    social: [
      ["LinkedIn",  "linkedin",  "#"],
      ["Instagram", "instagram", "#"],
      ["YouTube",   "youtube",   "https://youtube.com/shorts/Ol6ReFCvqeQ"],
    ],
    /* Policy pages. Point these anywhere — a file in this folder, or an
       external URL, and every footer across the site follows. */
    terms:   "terms.html",
    refund:  "refund.html",
    privacy: "privacy.html",
  },

  /* ----------------------------------------------------------------- MEDIA -- */
  media: {
    /* Paste any YouTube link here — watch, youtu.be or shorts. The embed,
       thumbnail and fallback link are all derived from it automatically. */
    youtube: "https://youtube.com/shorts/Ol6ReFCvqeQ?feature=share",
  },

  /* ---------------------------------------------------------------- FOOTER -- */
  footer: {
    blurb:  "AI-powered business growth platform for coaches, consultants and agencies. Based in Bandia, Uttarakhand, India.",
    copyright: "© 2026 VelorixAI. All rights reserved.",
    nav: [["Platform","#platform"],["Solutions","#solutions"],["Features","#features"],["Pricing","#pricing"],["FAQ","#faq"]],
  },

  /* ------------------------------------------------------------------- CTA -- */
  /* Button labels. Every one of these opens the lead form, which then goes
     straight to the Cal.id calendar above. */
  cta: {
    primary:   "BOOK A DEMO",
    hero:      "BOOK YOUR FREE DEMO",
    pricing:   "GET YOUR CUSTOM PRICING",
    annual:    "CLAIM YOUR ANNUAL PLAN",
    plan:      "CONFIRM ON YOUR DEMO",
    book:      "BOOK NOW",
    authority: "CLAIM FREE AUTHORITY BOOK",
    final:     "BOOK YOUR FREE DEMO",
  },

  /* ============================================================== CURRENT APPS
     The full VelorixAI app catalogue. Each entry:
       id, name, description, icon (Lucide icon name), accent (colour family)
     Accent options: crm · email · calendar · funnel · website · analytics ·
                     payments · clients · ai · gold
     Add an app here and it appears everywhere automatically.
     ========================================================================= */
  apps: [
    {id:"opportunity-finder", name:"Opportunity Finder Pro", desc:"Surface qualified prospects and warm openings before your competitors reach them.",              icon:"radar",           accent:"crm"},
    {id:"funnel-website",     name:"Funnel & Website Builder", desc:"Drag-and-drop pages, funnels and full websites that publish in minutes.",                        icon:"layout-template", accent:"funnel"},
    {id:"craft-book",         name:"Craft Book AI",          desc:"Turn your expertise into a finished, formatted book, chapter by chapter.",                       icon:"book-open",       accent:"gold"},
    {id:"audio-studio",       name:"Audio Studio",           desc:"Studio-grade voiceovers, podcast edits and audio cleanup in the browser.",                        icon:"audio-lines",     accent:"email"},
    {id:"presentation-ai",    name:"Presentation AI",        desc:"Build client-ready decks from a prompt, an outline or an existing document.",                     icon:"presentation",    accent:"analytics"},
    {id:"aeo-blogs",          name:"AEO Blogs Engine",       desc:"Long-form articles written and structured to be cited by AI answer engines.",                      icon:"newspaper",       accent:"website"},
    {id:"motion-canvas",      name:"Motion Canvas AI",       desc:"Animated social posts, ads and explainers without touching a timeline editor.",                    icon:"clapperboard",    accent:"funnel"},
    {id:"omni-chat",          name:"Omni Chat",              desc:"WhatsApp, Instagram, email and web chat in one shared inbox.",                                    icon:"messages-square", accent:"email"},
    {id:"image-editor",       name:"Image Editor",           desc:"Background removal, retouching and on-brand resizing for every channel.",                          icon:"image",           accent:"clients"},
    {id:"studio-canvas",      name:"Studio Canvas",          desc:"A full design surface for brand assets, carousels, thumbnails and covers.",                        icon:"palette",         accent:"analytics"},
    {id:"video-craft",        name:"Video Craft AI",         desc:"Script, cut and caption short-form video built for reach.",                                        icon:"video",           accent:"website"},
    {id:"aeo-launch-pad",     name:"AEO Launch Pad",         desc:"Get your brand discoverable across AI search and answer engines.",                                 icon:"rocket",          accent:"gold"},
    {id:"humanizer",          name:"Humanizer",              desc:"Rewrite generated copy so it reads in your own voice, not a model's.",                             icon:"pen-line",        accent:"clients"},
    {id:"knowledge-base",     name:"Knowledge Base",         desc:"A searchable home for your offers, SOPs and client documentation.",                                icon:"library",         accent:"crm"},
    {id:"chatbot-engine",     name:"AI Chatbot Engine",      desc:"Train a chatbot on your own content to answer and qualify around the clock.",                      icon:"bot",             accent:"ai"},
    {id:"contacts",           name:"Contacts",               desc:"Your CRM with every lead, conversation and deal stage in one pipeline.",                              icon:"users",           accent:"crm"},
  ],

  /* ============================================================= UPCOMING APPS
     Shown in their own section. These are NOT counted in any package total.
     ========================================================================= */
  upcomingApps: [
    {id:"social-scheduler", name:"Social Scheduler", desc:"Plan and publish across every channel from one calendar.", icon:"calendar-clock", accent:"calendar"},
    {id:"payments-suite",   name:"Payments Suite",   desc:"Invoicing, subscriptions and checkout links, fully connected.", icon:"credit-card",  accent:"payments"},
    {id:"analytics-pro",    name:"Analytics Pro",    desc:"Attribution and revenue reporting across every app you use.",   icon:"bar-chart-3",  accent:"analytics"},
    {id:"course-hosting",   name:"Course Hosting",   desc:"Host courses and memberships alongside the rest of your business.", icon:"graduation-cap", accent:"clients"},
  ],

  /* ================================================================= PACKAGES
     `appIds` must match ids from the apps list above. The app count shown on
     each card is derived from that list, so the number can never drift.
     ========================================================================= */
  packages: [
    {
      id:"prestige", name:"Prestige", tag:"QUARTERLY", term:"3-month subscription",
      icon:"layers", accent:"crm", featured:false,
      tokens:"4,000 FREE TOKENS",
      benefits:["4,000 free tokens across 3 months","Guided 2-hour launch session","Cancel or change anytime"],
      appIds:["opportunity-finder","funnel-website","omni-chat","chatbot-engine","contacts","aeo-launch-pad","image-editor","video-craft"],
    },
    {
      id:"signature", name:"Signature", tag:"ANNUAL", term:"12-month subscription",
      icon:"crown", accent:"gold", featured:true,
      tokens:"9,000 FREE TOKENS",
      benefits:["9,000 free tokens across 12 months","Free professional website OR authority book","Priority onboarding and support"],
      appIds:["opportunity-finder","funnel-website","craft-book","audio-studio","presentation-ai","aeo-blogs","motion-canvas","omni-chat","image-editor","studio-canvas","video-craft","aeo-launch-pad","humanizer","knowledge-base","chatbot-engine","contacts"],
    },
  ],

  /* ------------------------------------------------------------- PRICING -- */
  pricing: {
    range: "₹25,900 to ₹85,900",
    note:  "Quarterly and annual plans · Includes all apps in your plan · No hidden fees",
  },

  /* ---------------------------------------------------------------- HERO -- */
  hero: {
    eyebrow:  "AI BUSINESS GROWTH PLATFORM",
    heading:  "Launch your coaching or agency business in 2 hours.",
    sub:      "VelorixAI puts 16+ AI-powered apps in one dashboard. Website, funnels, CRM, chat, content and analytics, so you can launch and run your business without a tech team.",
    points:   [["16+ apps in one dashboard","layout-grid","crm"],["Go live in about 2 hours","zap","gold"],["No tech team needed","shield-check","analytics"]],
  },
};

/* ---------------------------------------------------------------- HELPERS --
   Small utilities the sections use to read the config. You rarely need these.
   -------------------------------------------------------------------------- */
window.CFG=window.SITE;
window.appById=id=>window.SITE.apps.find(a=>a.id===id);
window.packageApps=pkg=>pkg.appIds.map(window.appById).filter(Boolean);
window.appCount=pkg=>pkg.appIds.length;

/* Accepts a watch, youtu.be or shorts URL and returns the id */
window.youtubeId=(url)=>{
  const m=String(url||"").match(/(?:shorts\/|embed\/|v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  return m?m[1]:"";
};
window.ytEmbed=()=>`https://www.youtube-nocookie.com/embed/${window.youtubeId(window.SITE.media.youtube)}?autoplay=1&mute=1&playsinline=1&rel=0`;
window.ytThumbUrl=()=>`https://i.ytimg.com/vi/${window.youtubeId(window.SITE.media.youtube)}/hqdefault.jpg`;
window.ytWatch=()=>`https://www.youtube.com/watch?v=${window.youtubeId(window.SITE.media.youtube)}`;
