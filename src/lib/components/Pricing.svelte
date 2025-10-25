<script>
	import { glass } from '$lib/global.svelte';

            import { Button } from "$lib/components/ui/button/index.js";
	import { BadgeCheck } from '@lucide/svelte';


  let starter = [
    '5 KW power allocation',
    'Half rack (21U)',
    '1 Gbps DIA included',
    '2 hours smart hands/month',
    '24/7 monitoring',
    'Remote rack camera access'
  ];


  let pro = [
    '10 kW power allocation',
    'Full rack (42U)',
    '1 Gbps DIA included',
    '4 hours smart hands/month',
    'Priority support',
    'Remote rack camera + telemetry'
  ];

  let enterprise = [
   ' 15+ kW per rack',
'Multiple racks available',
'10 Gbps DIA or dual carrier',
'Unlimited smart hands',
'Dedicated account manager',
'Custom SLA terms'
  ]

  
</script>

{#snippet pricing(title='', description='', price='', list = [''])}

  <div class="p-[32px] {glass} flex flex-col gap-4 items-start justify-start rounded-xl">
      <h6 class="font-medium">{title}</h6>
      <p class="text-gray-1">{description}</p>

      <div class="flex flex-row gap-0 p-0 items-center">
        <h3>{price}</h3>
        <p class="text-gray-1">/month</p>
      </div>
   <Button class='!bg-[#0F100F] w-full {glass}'>
         Choose this plan
   </Button>

    <img src="/images/line.png" class="p-8" alt="">
 <div class="flex flex-col gap-2">
   {#each list as list}
   <div class="flex flex-row gap-4">
      <BadgeCheck /> {list}
      </div>
   {/each}
   
   </div>


  </div>
    
{/snippet}


<section class="grid lg:grid-cols-3 grid-cols-1 gap-4">

    {@render pricing('Starter',
     'Half rack for testing and small deployments',
     '$600',
     starter
     )}

       <div class="p-[32px] rounded-xl flex flex-col gap-4 items-start justify-start
        bg-cover bg-[url(/images/pro.png)] shadow-sm shadow-primarynp
       ">
      <h6 class="font-medium">Pro</h6>
      <p class="text-gray-1">Full rack for production AI workloads</p>

      <div class="flex flex-row gap-0 p-0 items-center">
        <h3>$995</h3>
        <p class="text-gray-1">/month</p>
      </div>
   <Button class='bg-primary w-full'>
         Choose this plan
   </Button>

    <img src="/images/line.png" class="p-8" alt="">
 <div class="flex flex-col gap-2">
   {#each pro as list}
   <div class="flex flex-row gap-4">
      <BadgeCheck /> {list}
      </div>
   {/each}
   
   </div>


  </div>

      {@render pricing('Enterprise',
     'Multi-rack deployments with custom SLAs',
     'Custom',
     enterprise
     )}

</section>