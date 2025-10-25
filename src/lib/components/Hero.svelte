
<script>
      import { Button } from "$lib/components/ui/button/index.js";
	import { btn, glass } from "$lib/global.svelte";

    import Tags from '$lib/components/Tags.svelte';


    let content = 'Next-Generation AI Infrastructure';
      

</script>


<section class="lg:h-screen h-auto w-full flex lg:flex-row flex-col-reverse gap-6 justify-center items-center
  
 ">
 
     <div class="lg:w-[50%] w-full flex flex-col justify-center items-start gap-4 lg:pt-0 pt-56 z-1">
        <div class="z-10 flex flex-row justify-between"><Tags {content} /></div>
          


        <h1 class="inline-block text-transparent bg-clip-text
           bg-gradient-to-r from-green-1 to-green-2 lg:w-full w-full">
            Deploy and Host AI Models with out the hustle.</h1>
            

        <p class="text-gray-1 w-full">  Our AI deployment assistant auto-configures your model, selects the optimal GPU, and handles all the DevOps.
             500+ templates ready to deploy with one click.
        </p>

        <div class="flex lg:flex-row flex-col gap-4 w-full items-center lg:justify-start justify-center">
            <Button class="{btn} w-full lg:w-auto" href="https://platform.syaala.com/" target='_blank'>
                Deploy Your First Model
            </Button>

            <Button variant="outline" class="{btn} lg:w-auto w-full text-gray-1">
                Power with Your Own GPUs
            </Button>

        </div>
     </div>


     <div class="lg:w-[50%] w-full lg:h-auto h-auto lg:mb-0 flex flex-row gap-0 justify-center items-center relative">

        <img src="/images/left.png" alt="Server Photos" class="bounce bounce-left absolute left-0.5 lg:block hidden" >
        <img src="/images/right.png" alt="Server Photos" class="bounce bounce-right absolute right-0.5 lg:block hidden" >
         <img src="/images/top.png" alt="Server Photos" class="bounce bounce-left w-30 rotate-24 absolute left-1/2 top-1/2 lg:hidden block" >
        <img src="/images/bottom.png" alt="Server Photos" class="bounce bounce-right w-30 rotate-24 absolute right-1/2 top-1/2 lg:hidden block" >

     </div>


      
</section>

<style>


   
</style>