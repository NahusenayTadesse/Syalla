<script>
	import { glass } from "$lib/global.svelte";
     import { Slider } from "$lib/components/ui/slider/index.js";


     import { Dot, CircleAlert } from "@lucide/svelte";
  let value = $state(4);

    let gpus = [
        {name: 'RTX 4090', size: 24, hr: 50 },
        {name: 'A10', size: 24, hr: 70 },
        {name: 'A100', size: 40, hr: 150 },
        {name: 'A100', size: 80, hr: 200 },
        {name: 'H100', size: 80, hr: 300 },
        

    ]

</script>

<section class="grid lg:grid-cols-2  grid-cols-1 gap-6 w-full">

     <div class="{glass} p-4 flex flex-col gap-6 rounded-lg">
        <h6>Cost Calculator</h6>
        <div class="grid lg:grid-cols-3 grid-cols-2 gap-2 rounded-lg">

            {#each gpus as gpu }

            <button class="flex flex-col gap-2 {glass} hover:bg-primary rounded-lg p-4 justify-start items-start">
                <span class="text-[14px]">{gpu.name}</span>

                <div class="flex flex-row text-[12px] justify-center items-center">

                    <span>{gpu.size}GB</span>
                    <Dot class="w-6 h-6" />
                    <span>{gpu.hr}cr.hr</span>

                </div>

            </button>
                
            {/each}

        </div>

        <div class="flex flex-col gap-4">

            <p class="!font-medium">Usage Hours</p>
           <div class="flex flex-row gap-2">
                        <Slider type="single" bind:value max={10} step={1} />
                        <p>{value}hr</p>

           </div>

           <div class="text-gray-1 flex flex-row justify-between">
             <p>
                1hour
             </p>

             <p>
                100hour
             </p>
           </div>

               
        </div>

        
     <div class="{glass} p-6 flex flex-col gap-6 rounded-lg">

        <div class="flex flex-col rounded-lg gap-6">
          <div class="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-6">
            <div class="flex flex-col gap-2">
                <p class="text-gray-1">Estimated Cost</p>
                <h3>$5.00</h3>
                <p class="text-gray-1">500 credits</p>
            </div>
            <div class="flex flex-col gap-1 lg:items-center items-start">
                <p class="text-gray-1">Recommended Package</p>
                <h3 class="text-transparent bg-clip-text
           bg-gradient-to-r from-primary to-green-2">Starter</h3>
                <p class="text-gray-1 flex flex-row gap-0 !font-medium justify-center">$5<Dot />500 Credits</p>
            </div>
            </div>
          
        <img src="/images/line.png" alt="">

         <p class="text-gray-1 lg:text-start text-center flex lg:flex-row flex-col lg:items-start justify-center items-center gap-2">
            <CircleAlert class='text-[#D97706]' />

            18 hours on A100 40GB = 2,700 credits. You'll have 7,300 credits remaining.
         </p>



        </div>
        
     </div>

     </div>

    <div class="p-4 {glass} rounded-lg gap-2">
   <div class="w-full">
  <div class="p-[1px] rounded-lg bg-gradient-to-r from-primary/10 via-green-1/10 to-white    mb-4">

  <div class="grid grid-cols-3 border-1 border-primary shadow-sm shadow-primary rounded-lg bg-[#171C1A]  text-white font-semibold p-4">
    <div class="text-left">GPU Type</div>
    <div class="text-center">VRAM</div>
    <div class="text-right">Approx. Cost</div>
  </div>
  </div>

  {#each gpus as gpu}
    <div class="grid grid-cols-3 p-4 bg-[#171C1A] backdrop-blur-lg rounded-lg mt-2">
      <div class="text-left font-medium">{gpu.name}</div>
      <div class="text-center">{gpu.size}GB</div>
      <div class="text-right text-primary text-sm">{gpu.hr} credits/hr</div>
    </div>
  {/each}
</div>
     </div>



</section>