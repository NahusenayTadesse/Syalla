import { m as stringify, o as head } from "../../chunks/index.js";
import { T as Tags, S as Starts, B as Bottom } from "../../chunks/Starts.js";
import { B as Button, b as btn } from "../../chunks/Icon.js";
import "clsx";
import { C as Card2, a as Card } from "../../chunks/Card.js";
function Hero($$renderer) {
  let content = "Next-Generation AI Infrastructure";
  $$renderer.push(`<section class="lg:h-screen h-auto w-full flex lg:flex-row flex-col-reverse gap-6 justify-center items-center"><div class="lg:w-[50%] w-full flex flex-col justify-center items-start gap-4 lg:pt-0 pt-56 z-1"><div class="z-10 flex flex-row justify-between">`);
  Tags($$renderer, { content });
  $$renderer.push(`<!----></div> <h1 class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-1 to-green-2 lg:w-full w-full">Deploy and Host AI Models with out the hustle.</h1> <p class="text-gray-1 w-full">Our AI deployment assistant auto-configures your model, selects the optimal GPU, and handles all the DevOps.
             500+ templates ready to deploy with one click.</p> <div class="flex lg:flex-row flex-col gap-4 w-full items-center lg:justify-start justify-center">`);
  Button($$renderer, {
    class: `${stringify(btn)} w-full lg:w-auto`,
    href: "https://platform.syaala.com/",
    target: "_blank",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Deploy Your First Model`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    variant: "outline",
    class: `${stringify(btn)} lg:w-auto w-full text-gray-1`,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Power with Your Own GPUs`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></div> <div class="lg:w-[50%] w-full lg:h-auto h-auto lg:mb-0 flex flex-row gap-0 justify-center items-center relative"><img src="/images/left.png" alt="Server Photos" class="bounce bounce-left absolute left-0.5 lg:block hidden"/> <img src="/images/right.png" alt="Server Photos" class="bounce bounce-right absolute right-0.5 lg:block hidden"/> <img src="/images/top.png" alt="Server Photos" class="bounce bounce-left w-30 rotate-24 absolute left-1/2 top-1/2 lg:hidden block"/> <img src="/images/bottom.png" alt="Server Photos" class="bounce bounce-right w-30 rotate-24 absolute right-1/2 top-1/2 lg:hidden block"/></div></section>`);
}
function Iaas($$renderer) {
  let content = `Inference-as-a-Service Platform`;
  let para = `Deploy and scale applications without battling the intricacies of K8s and 
spending valuable time configuring low-level K8s resources repeatedly.`;
  let para2 = `For enterprises and AI labs that need full control, Syaala offers high-density GPU colocation and 
reservation services secure, efficient, and seamlessly connected to your deployments.`;
  let para3 = `Syaala adapts to your workflow whether you’re scaling a startup, 
securing enterprise workloads, or pushing research boundaries.`;
  let btn2 = true;
  let btn22 = false;
  $$renderer.push(`<section class="flex flex-col gap-32 w-full h-auto"><section class="w-full flex flex-col gap-8">`);
  Starts($$renderer, {
    title: "Deploy AI Models Instantly",
    content,
    para,
    btn: btn2,
    btnName: "Deploy Your First Model",
    href: "https://platform.syaala.com/"
  });
  $$renderer.push(`<!----> <div class="grid lg:grid-cols-3 grid-cols-1 gap-4"><div class="lg:col-span-2">`);
  Card2($$renderer, {
    title: "One-Click Templates",
    content: "Launch pre-configured models like Llama, Whisper, or Stable Diffusion in seconds.",
    image: "/images/Illustration4.png"
  });
  $$renderer.push(`<!----></div> `);
  Card2($$renderer, {
    title: "Lease Reserved GPUs",
    content: "Access enterprise-grade GPUs (A100, H100, L40) in pre-configured racks.",
    image: "/images/Illustration5.png"
  });
  $$renderer.push(`<!----> `);
  Card2($$renderer, {
    title: "Auto-Scaling Efficiency",
    content: "Scale from 0 → N replicas instantly with no idle GPU waste.",
    image: "/images/Illustration6.png"
  });
  $$renderer.push(`<!----> `);
  Card2($$renderer, {
    title: "Unified Monitoring",
    content: "Track latency, GPU usage, and costs from a single dashboard.",
    image: "/images/Illustration7.png"
  });
  $$renderer.push(`<!----> `);
  Card2($$renderer, {
    title: "Enterprise-Grade Security",
    content: "Encrypted secrets, org-scoped access, and row-level isolation built in.",
    image: "/images/Illustration8.png"
  });
  $$renderer.push(`<!----></div></section> <section class="w-full flex flex-col gap-8">`);
  Starts($$renderer, {
    title: "Host or Lease GPUs in Syaala Data Centers",
    content: "Colocation & Reserved GPU",
    para: para2,
    btn: btn2,
    btnName: "Explore Colocation",
    href: ""
  });
  $$renderer.push(`<!----> <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">`);
  Card2($$renderer, {
    title: "Bring Your Own Hardware (BYOH)",
    content: "Ship your servers to our facilities we’ll rack, power, and connect them for you.",
    image: "/images/Illustration9.png"
  });
  $$renderer.push(`<!----> `);
  Card2($$renderer, {
    title: "Lease Reserved GPUs",
    content: "Access enterprise-grade GPUs (A100, H100, L40) in pre-configured racks.",
    image: "/images/Illustration10.png"
  });
  $$renderer.push(`<!----></div> <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 p-0">`);
  Card2($$renderer, {
    title: "AI-Optimized Infrastructure",
    content: "Built for high-density GPU workloads with advanced cooling and redundant power.",
    image: "/images/Illustration11.png"
  });
  $$renderer.push(`<!----> <div class="flex flex-col gap-4"><img src="/images/Syaala.png" class="min-w-full w-[110%]" alt=""/> `);
  Card2($$renderer, {
    title: "24/7 Monitoring & Support",
    content: "Remote hands, uptime dashboards, and smart power metering at your fingertips.",
    image: "/images/Illustration12.png"
  });
  $$renderer.push(`<!----></div> `);
  Card2($$renderer, {
    title: "Predictable Monthly Rates",
    content: "Fixed pricing by rack, kW, or GPU no surprise spikes.",
    image: "/images/Illustration13.png"
  });
  $$renderer.push(`<!----></div></section> <section class="w-full flex flex-col gap-8">`);
  Starts($$renderer, {
    title: "Built for Every AI Team",
    content: "Who It’s For",
    para: para3,
    btn: btn22,
    btnName: "",
    href: ""
  });
  $$renderer.push(`<!----> <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full align-middle px-4">`);
  Card($$renderer, {
    title: "AI Startups",
    content: "Ship APIs and launch inference products fast without managing infrastructure.",
    image: "/images/Illustration14.png"
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    title: "Enterprises",
    content: "Host sensitive workloads in secure, isolated environments with full visibility.",
    image: "/images/Illustration15.png"
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    title: "Researchers & Developers",
    content: "Experiment freely with LLMs, vision, or speech models using scalable GPU access.",
    image: "/images/Illustration16.png"
  });
  $$renderer.push(`<!----></div></section></section>`);
}
function Services($$renderer) {
  let content = "What you will get";
  let para = "Syaala combines cloud simplicity with hardware control so you can deploy, scale, or host AI models without friction.";
  let btn2 = false;
  $$renderer.push(`<section class="w-full flex flex-col gap-8">`);
  Starts($$renderer, {
    title: "One Platform. Two Powerful Ways to Build.",
    content,
    para,
    btn: btn2,
    btnName: "",
    href: ""
  });
  $$renderer.push(`<!----> <div class="grid lg:grid-cols-3 grid-cols-1 gap-8">`);
  Card($$renderer, {
    title: "Instant Deployment",
    content: "Deploy any model in seconds using optimized templates for LLMs, diffusion, or embeddings. No setup, no DevOps.",
    image: "/images/Illustration.png"
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    title: "Seamless Scaling",
    content: "Scale automatically across GPU clusters and monitor usage in real-time efficient, predictable, and serverless.",
    image: "/images/Illustration2.png"
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    title: "Unified Ecosystem",
    content: "Run models or host hardware in one connected system same tools, same dashboard, complete flexibility.",
    image: "/images/Illustration3.png"
  });
  $$renderer.push(`<!----></div></section>`);
}
function _page($$renderer) {
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Syaala LLC</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Syaala LLC — Enterprise-grade AI infrastructure and colocation. Deploy models in under 60 seconds, scale securely, and get enterprise support for mission-critical AI workloads."/> <link rel="canonical" href="/"/> <meta property="og:type" content="website"/> <meta property="og:title" content="Syaala LLC, AI Infrastructure &amp; Colocation"/> <meta property="og:description" content="Deploy and scale AI workloads with Syaala: fast model deployment, secure infrastructure, and enterprise support."/> <meta property="og:image" content="/images/server.png"/> <meta property="og:image:alt" content="Syaala — AI infrastructure and colocation"/> <meta property="og:url" content="/"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Syaala LLC — AI Infrastructure &amp; Colocation"/> <meta name="twitter:description" content="Deploy and scale AI workloads with Syaala: fast model deployment, secure infrastructure, and enterprise support."/> <meta name="twitter:image" content="/images/server.png"/>`);
  });
  $$renderer.push(`<div class="flex flex-col gap-16 items-center justify-center px-[7%] pb-8 relative w-full bg-contain bg-top-left bg-[url(/images/lightnew.png)] bg-no-repeat">`);
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  Services($$renderer);
  $$renderer.push(`<!----> `);
  Iaas($$renderer);
  $$renderer.push(`<!----> `);
  Bottom($$renderer, {
    call: "Ready to Transform Your AI Infrastructure?",
    title: "Run Your Next AI Workload on Syaala",
    btn1: "Deploy Your First Model",
    btn2: "Explore Colocation",
    href1: "https://platform.syaala.com/",
    href2: "",
    para: "No credit card required • Deploy in under 60 seconds • Enterprise support available"
  });
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
