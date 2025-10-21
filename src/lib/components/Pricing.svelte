<script>
	import { glass } from '$lib/global.svelte';

            import { Button } from "$lib/components/ui/button/index.js";
	import { BadgeCheck } from '@lucide/svelte';


  let starter = [
    '500 compute credits', 
    'Deploy any AI model',
    'Acess to all GPU type',
    'Pay-as-you-go pricing',
    'No expiration'
  ];


  let pro = [
     '2,500 compute credits',
     '20% better value',
     'Priority support',
     'Advanced monitoring',
     'No expiration'
  ];

  let enterprise = [
     '10,000 compute credits',
     '25% better value',
     'Dedicated support',
     'Custom SLA',
     'No expiration'
  ]

  
</script>

{#snippet pricing(title='', description='', price='', credits='', list = [''])}

  <div class="p-[32px] {glass} flex flex-col gap-4 items-start justify-start rounded-xl">
      <h6 class="font-medium">{title}</h6>
      <p class="text-gray-1">{description}</p>

      <div class="flex flex-row gap-0 p-0 items-center">
        <h3>${price}</h3>
        <p class="text-gray-1">/{credits}credits</p>
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
     'Perfect for testing and small projects. Ideal for developers and small teams.',
     '5',
     '500',
     starter
     )}

       <div class="p-[32px] rounded-xl flex flex-col gap-4 items-start justify-start
        bg-cover bg-[url(/images/pro.png)] shadow-sm shadow-primarynp
       ">
      <h6 class="font-medium">Pro</h6>
      <p class="text-gray-1">Best for production workloads. Ideal for teams scaling AI models with reliability.</p>

      <div class="flex flex-row gap-0 p-0 items-center">
        <h3>$25</h3>
        <p class="text-gray-1">/2500credits</p>
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
     'For high-volume deployments. Designed for enterprises needing dedicated GPUs.',
     '5',
     '10,000',
     enterprise
     )}

</section>