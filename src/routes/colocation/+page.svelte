
<script>
      import { Button } from "$lib/components/ui/button/index.js";
	import { btn, glass } from "$lib/global.svelte";

    import Tags from '$lib/components/Tags.svelte';
	import Starts from "$lib/components/Starts.svelte";
	import Card from "$lib/components/Card.svelte";
	import Card2 from "$lib/components/Card2.svelte";
	import Pricing from "$lib/components/Pricing.svelte";
	import Bottom from "$lib/components/Bottom.svelte";

  


    let content = 'Enterprise Colocation';
      
      let btns = false;
</script>

<svelte:head>
  <title>Colocation — Syaala</title>
  <meta name="description" content="Syaala Colocation — enterprise-grade GPU colocation: power, cooling, network, and remote support for AI workloads. Ship your servers or lease racks with predictable pricing and rapid deployment." />
  <link rel="canonical" href="/colocation" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Syaala, Colocation for GPUs & AI Infrastructure" />
  <meta property="og:description" content="Enterprise-grade colocation optimized for high-density GPU workloads. Fast rack deployment, N/2N power, secure facilities, and hybrid cloud connectivity." />
  <meta property="og:image" content="/images/gpu.png" />
  <meta property="og:image:alt" content="Syaala, GPU colocation" />
  <meta property="og:url" content="/colocation" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Syaala — GPU Colocation & AI Infrastructure" />
  <meta name="twitter:description" content="Ship your GPUs or lease racks with Syaala: power, cooling, network, remote support, and transparent pricing for AI workloads." />
  <meta name="twitter:image" content="/images/gpu.png" />
</svelte:head>
<div class="flex flex-col gap-16 items-center justify-center px-[7%] pb-8 relative">

<section class="lg:h-screen h-auto w-full flex lg:flex-row flex-col-reverse gap-6 justify-center items-center 
 ">
 
     <div class="lg:w-[50%] w-full flex flex-col gap-4 lg:pt-0 pt-48 z-1">
        <div class="w-[300px]"><Tags {content} /></div>
        


        <h1 class="inline-block text-transparent bg-clip-text
           bg-linear-to-r from-green-1 to-green-2">
            Ship Your GPUs. Light up your cluster in 72 hours.</h1>

        <p class="text-gray-1">
Memphis colocation built for AI workloads. We handle receiving, racking, burn-in, and monitoring. You own the hardware, we handle the infrastructure.        </p>

        <div class="flex lg:flex-row flex-col w-full gap-4">
            <Button class={btn}>
Request a quote            </Button>

            <Button variant="outline" class="{btn}   text-gray-1">
                See pricing
            </Button>

        </div>
     </div>


       <div class="lg:w-[50%] w-full lg:h-auto h-auto lg:mb-0 flex flex-row gap-0 justify-center items-center relative">

        <img src="/images/gpu.png" alt="Server Photos" class="bounce bounce-left absolute left-0.5 lg:block hidden" >
        <img src="/images/gpu.png" alt="Server Photos" class="bounce bounce-right absolute right-0.5 lg:block hidden" >
         <img src="/images/gpu.png" alt="Server Photos" class="bounce bounce-left w-56 absolute left-1/4 top-2/3 lg:hidden block" >
        <img src="/images/gpu.png" alt="Server Photos" class="bounce bounce-right w-56 absolute right-1/3 top-2/3 lg:hidden block" >

     </div>


      
</section>

  <div class="w-full">
     <Starts title='Why Choose Syaala Colocation' content='Why Us'
      para = 'Engineered for high-density GPU workloads, with the 
flexibility and visibility modern AI teams need.'
   btn={btns}
    btnName =''
    href = ''
     />
  </div>

   <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full">
     <Card title='AI-Optimized Infrastructure'
     content='Designed for high-density GPU workloads with up to 80kW racks and N/2N power redundancy.'
    image='/images/Illustration17.png'
     />
      <Card title='Full Control, Zero Hassle'
     content='Ship and rack your own servers or lease reserved GPUs with full physical access and remote monitoring.'
    image='/images/Illustration18.png'
     />
      <Card title='Hybrid Cloud Ready'
     content='Integrate colocated GPUs directly with Syaala’s IaaS platform for seamless AI deployments.'
    image='/images/Illustration19.png'
     />
   </div>
   <div class="w-full">
     <Starts title='Purpose-Built for AI Performance' content='Features'
      para = 'Every rack, cable, and circuit is optimized for GPU-heavy workloads
ensuring reliability, uptime, and predictable performance at scale.'
   btn={btns}
    btnName =''
    href = ''
     />
  </div>

  <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full">
    <div class="lg:col-span-2 w-full p-0">
     <Card2 title='Power & Network Redundancy'
     content='Multi-fiber cross-connects and N/2N power systems ensure 
stable, high-throughput performance without downtime.'
    image='/images/Illustration20.png'
     /></div>
      <Card2 title='Physical Security'
     content='Biometric access, 24/7 surveillance, and compliance-ready facilities safeguard your hardware end to end.'
    image='/images/Illustration21.png'
     />
      <Card2 title='Remote Monitoring & Support'
     content='Stay in control with smart power metering, temperature tracking, and on-demand remote assistance.'
    image='/images/Illustration22.png'
     />  
     <div class="lg:col-span-2 p-0">     
     <Card2 title='Predictable Costs'
     content='Fixed monthly rates per kW, rack, or GPU so you always know exactly what you’re paying for.'
    image='/images/Illustration23.png'
     /> </div>
   </div>

     <div class="w-full">
     <Starts title='Simple, Transparent Pricing' content='Pricing'
      para = 'Choose the plan that fits your AI workload  pay per GPU, rack, or per request, with no hidden costs.'
   btn={btns}
    btnName =''
    href = ''
     />
  </div>

    <Pricing />
    

    <Bottom 
   call="Ready to bring your GPUs to Syaala?"
   title="Submit a custom request It’s time to host infrastructure on your terms."
   btn1="Request a quote"
   btn2="See pricing"
   href1=''
   href2=''
   para='60 days free rack rent • Discounted power first 6 months • 6-month flexible terms'
  />

</div>

