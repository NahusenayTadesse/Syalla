<script>
	import Bottom from "$lib/components/Bottom.svelte";
    import Hero from "$lib/components/Hero.svelte";
	import Iaas from "$lib/components/Iaas.svelte";
    import Services from "$lib/components/Services.svelte";
</script>

<svelte:head>
	<title>Syaala LLC</title>
    <meta name="description" content="Syaala LLC — Enterprise-grade AI infrastructure and colocation. Deploy models in under 60 seconds, scale securely, and get enterprise support for mission-critical AI workloads." />
    <link rel="canonical" href="/" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Syaala LLC, AI Infrastructure & Colocation" />
    <meta property="og:description" content="Deploy and scale AI workloads with Syaala: fast model deployment, secure infrastructure, and enterprise support." />
    <meta property="og:image" content="/images/server.png" />
    <meta property="og:image:alt" content="Syaala — AI infrastructure and colocation" />
    <meta property="og:url" content="/" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Syaala LLC — AI Infrastructure & Colocation" />
    <meta name="twitter:description" content="Deploy and scale AI workloads with Syaala: fast model deployment, secure infrastructure, and enterprise support." />
    <meta name="twitter:image" content="/images/server.png" />
</svelte:head>

<div class="flex flex-col gap-16 items-center justify-center px-[7%] pb-8 relative w-full
 bg-contain bg-top-left bg-[url(/images/lightnew.png)] bg-no-repeat
">
<!-- <img src="/images/lightnew.png" alt="" class="absolute left-0 -top-4 z-1"> -->
<Hero />
<Services />
<Iaas />
<Bottom 
   call="Ready to Transform Your AI Infrastructure?"
   title="Run Your Next AI Workload on Syaala"
   btn1="Deploy Your First Model"
   btn2="Explore Colocation"
   href1='https://platform.syaala.com/'
   href2=''
   para='No credit card required • Deploy in under 60 seconds • Enterprise support available'
  />
</div>