
<script>
	import Bottom from "$lib/components/Bottom.svelte";
	import Calculator from "$lib/components/Calculator.svelte";
	import FAQ from "$lib/components/FAQ.svelte";
	import Pricing from "$lib/components/Pricing.svelte";
	import Starts from "$lib/components/Starts.svelte";

  let btns = false;


</script>


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
   href1=''
   href2=''
   para=''
  />
</section>