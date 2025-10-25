<script>
	import Starts from "./Starts.svelte";
	import Card2 from "./Card2.svelte";
	import Card from "./Card.svelte";

    let content = `Inference-as-a-Service Platform`
    let para = `Deploy and scale applications without battling the intricacies of K8s and 
spending valuable time configuring low-level K8s resources repeatedly.`

let para2 = `For enterprises and AI labs that need full control, Syaala offers high-density GPU colocation and 
reservation services secure, efficient, and seamlessly connected to your deployments.`
let para3 = `Syaala adapts to your workflow whether you’re scaling a startup, 
securing enterprise workloads, or pushing research boundaries.`

let btn=true;
let btn2=false;



    
</script>

<section class="flex flex-col gap-32 w-full h-auto">
       <section class="w-full flex flex-col gap-8">


<Starts title="Deploy AI Models Instantly" {content} {para}  {btn} btnName='Deploy Your First Model' href="https://platform.syaala.com/"  />

<div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
    <div class="lg:col-span-2">
    <Card2 title="One-Click Templates" content="Launch pre-configured models like Llama, Whisper, or Stable Diffusion in seconds." image='/images/Illustration4.png' />
    </div>
    <Card2 title="Lease Reserved GPUs" content="Access enterprise-grade GPUs (A100, H100, L40) in pre-configured racks." image='/images/Illustration5.png' />
    <Card2 title="Auto-Scaling Efficiency" content="Scale from 0 → N replicas instantly with no idle GPU waste." image='/images/Illustration6.png' />
    <Card2 title="Unified Monitoring" content="Track latency, GPU usage, and costs from a single dashboard." image='/images/Illustration7.png' />
    <Card2 title="Enterprise-Grade Security" content="Encrypted secrets, org-scoped access, and row-level isolation built in." image='/images/Illustration8.png' />
</div>
</section> 

 <section class="w-full flex flex-col gap-8">


<Starts title="Host or Lease GPUs in Syaala Data Centers" content='Colocation & Reserved GPU'  para={para2}  {btn} btnName='Explore Colocation' href='' />

<div class="grid lg:grid-cols-2 grid-cols-1   gap-4">
   
    <Card2 title="Bring Your Own Hardware (BYOH)" content="Ship your servers to our facilities we’ll rack, power, and connect them for you." image='/images/Illustration9.png' />
    <Card2 title="Lease Reserved GPUs" content="Access enterprise-grade GPUs (A100, H100, L40) in pre-configured racks." image='/images/Illustration10.png' />
</div>
<div class="grid lg:grid-cols-3 grid-cols-1 gap-4 p-0">

        <Card2 title="AI-Optimized Infrastructure" content="Built for high-density GPU workloads with advanced cooling and redundant power." image='/images/Illustration11.png' />

  <div class="flex flex-col gap-4">
    <img src="/images/Syaala.png" class="min-w-full w-[110%]" alt="">



        <Card2 title="24/7 Monitoring & Support" content="Remote hands, uptime dashboards, and smart power metering at your fingertips." image='/images/Illustration12.png' />

  </div>
          <Card2 title="Predictable Monthly Rates" content="Fixed pricing by rack, kW, or GPU no surprise spikes." image='/images/Illustration13.png' />

</div>
</section> 

 <section class="w-full flex flex-col gap-8">


<Starts title="Built for Every AI Team" content="Who It’s For" para={para3}  btn={btn2} btnName='' href='' />

<div class="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full align-middle px-4">
   
    <Card title="AI Startups" content="Ship APIs and launch inference products fast without managing infrastructure." image='/images/Illustration14.png' />
    <Card title="Enterprises" content="Host sensitive workloads in secure, isolated environments with full visibility." image='/images/Illustration15.png' />
    <Card title="Researchers & Developers" content="Experiment freely with LLMs, vision, or speech models using scalable GPU access." image='/images/Illustration16.png' />
</div>
</section> 

  
</section>