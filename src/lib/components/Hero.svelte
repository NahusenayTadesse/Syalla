
<script>
      import { Button } from "$lib/components/ui/button/index.js";
	import { btn, glass } from "$lib/global.svelte";

    import Tags from '$lib/components/Tags.svelte';


    let content = 'Next-Generation AI Infrastructure';
      

</script>


<section class="h-screen w-full flex flex-row gap-6 justify-center items-center 
 ">
 
     <div class="w-[50%] flex flex-col gap-4 ">
        <div class="w-[300px]"><Tags {content} /></div>
        


        <h1 class="inline-block text-transparent bg-clip-text
           bg-gradient-to-r from-green-1 to-green-2">
            Deploy and Host AI Models with out the hustle.</h1>

        <p class="text-gray-1">
            Our AI deployment assistant auto-configures your model, selects the optimal GPU, and handles all the DevOps.
             500+ templates ready to deploy with one click.
        </p>

        <div class="flex flex-row gap-4">
            <Button class={btn}>
                Deploy Your First Model
            </Button>

            <Button variant="outline" class="{btn} {glass}  text-gray-1">
                Power with Your Own GPUs
            </Button>

        </div>
     </div>


     <div class="w-[50%] flex flex-row gap-0  justify-center items-center relative">

        <img src="/images/left.png" alt="Server Photos" class="bounce bounce-left absolute left-0.5" >
        <img src="/images/right.png" alt="Server Photos" class="bounce bounce-right absolute right-0.5" >

     </div>


      
</section>

<style>


    .bounce {
 
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.bounce-left {
  animation-name: bounce-left;
}

.bounce-right {
  animation-name: bounce-right;
}

/* Left image bounces up while right image goes down */
@keyframes bounce-left {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px);
  }
}

@keyframes bounce-right {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(40px);
  }
}
</style>