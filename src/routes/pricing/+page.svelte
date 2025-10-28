
<script>
	import Bottom from "$lib/components/Bottom.svelte";
	import Calculator from "$lib/components/Calculator.svelte";
	import FAQ from "$lib/components/FAQ.svelte";
	import Pricing from "$lib/components/Pricing.svelte";
	import Starts from "$lib/components/Starts.svelte";


  let btns = false;


</script>
<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>Pricing</title>
  <meta name="description" content="Syaala LLC — Enterprise-grade AI infrastructure and colocation. Deploy models in under 60 seconds, scale securely, and get enterprise support for mission-critical AI workloads." />
  <link rel="canonical" href="/pricing" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Syaala LLC, AI Infrastructure & Colocation" />
  <meta property="og:description" content="Deploy and scale AI workloads with Syaala: fast model deployment, secure infrastructure, and enterprise support." />
  <meta property="og:image" content="/images/preview.webp" />
  <meta property="og:image:alt" content="Syaala, AI infrastructure and colocation" />
  <meta property="og:url" content="/pricing" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Syaala LLC — AI Infrastructure & Colocation" />
  <meta name="twitter:description" content="Deploy and scale AI workloads with Syaala: fast model deployment, secure infrastructure, and enterprise support." />
  <meta name="twitter:image" content="/images/preview.webp" />

  <!-- optional mobile UI improvements -->
  <meta name="theme-color" content="#000000" />
</svelte:head>

<section class="flex flex-col gap-16 items-center justify-center px-[7%] pb-8 lg:pt-32 pt-8 relative">
     <div class="w-full">
     <Starts title='Simple, Transparent Pricing' content='Pricing'
      para = 'Choose the plan that fits your AI workload  pay per GPU, rack, 
or per request, with no hidden costs.'
   btn={btns}
    btnName =''
    href = ''
     />
  </div>
 
   <Pricing />
   <Calculator />
   <FAQ />

   <Bottom 
   call="Ready to power your next AI project?"
   title="Scale your workloads with confidence <br /> start with the Pro plan today."
   btn1="Get Started with Pro"
   btn2=""
   href1='https://platform.syaala.com'
   href2=''
   para=''
  />
</section>