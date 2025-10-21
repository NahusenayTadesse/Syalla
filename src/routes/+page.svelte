<script>
	import Bottom from "$lib/components/Bottom.svelte";
    import Hero from "$lib/components/Hero.svelte";
	import Iaas from "$lib/components/Iaas.svelte";
    import Services from "$lib/components/Services.svelte";
</script>
<div class="flex flex-col gap-16 items-center justify-center px-[7%] pb-8 relative w-full">
<img src="/images/light5.png" alt="" class="absolute left-0 top-0 -z-1">
<Hero />
<Services />
<Iaas />
<Bottom 
   call="Ready to Transform Your AI Infrastructure?"
   title="Run Your Next AI Workload on Syaala"
   btn1="Deploy Your First Model"
   btn2="Explore Colocation"
   href1=''
   href2=''
   para='No credit card required • Deploy in under 60 seconds • Enterprise support available'
  />
</div>