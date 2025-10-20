
<script>
      import { Button } from "$lib/components/ui/button/index.js";
	import { btn, glass } from "$lib/global.svelte";

    import Tags from '$lib/components/Tags.svelte';
	import Starts from "$lib/components/Starts.svelte";
	import Card from "$lib/components/Card.svelte";


    let content = 'Enterprise Colocation';
      
      let btns = false;
</script>

<div class="flex flex-col gap-16 items-center justify-center px-[7%] pb-8 relative">

<section class="h-screen w-full flex flex-row gap-6 justify-center items-center 
 ">
 
     <div class="w-[50%] flex flex-col gap-4 ">
        <div class="w-[300px]"><Tags {content} /></div>
        


        <h1 class="inline-block text-transparent bg-clip-text
           bg-gradient-to-r from-green-1 to-green-2">
            Ship Your GPUs. Light up your cluster in 72 hours.</h1>

        <p class="text-gray-1">
        Bring your machines or lease Syaala’s GPU racks. we provide the power, cooling, network, and remote support. Launch your infrastructure without friction.
        </p>

        <div class="flex flex-row gap-4">
            <Button class={btn}>
Request a quote            </Button>

            <Button variant="outline" class="{btn} {glass}  text-gray-1">
                See pricing
            </Button>

        </div>
     </div>


     <div class="w-[50%] flex flex-row gap-0  justify-center items-center relative">

        <img src="/images/gpu.png" alt="Server Photos" class="bounce bounce-left absolute left-0.5" >
        <img src="/images/gpu1.png" alt="Server Photos" class="bounce bounce-right absolute right-0.5" >

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

   <div class="grid grid-cols-3 gap-4">
     <Card title='AI-Optimized Infrastructure'
     content='Designed for high-density GPU workloads with up to 80kW racks and N/2N power redundancy.'
    image='/images/Illustration17.png'
     />
      <Card title='AI-Optimized Infrastructure'
     content='Designed for high-density GPU workloads with up to 80kW racks and N/2N power redundancy.'
    image='/images/Illustration17.png'
     />
      <Card title='AI-Optimized Infrastructure'
     content='Designed for high-density GPU workloads with up to 80kW racks and N/2N power redundancy.'
    image='/images/Illustration17.png'
     />
   </div>

</div>