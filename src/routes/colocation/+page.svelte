
<script>
      import { Button } from "$lib/components/ui/button/index.js";
	import { btn, glass } from "$lib/global.svelte";

    import Tags from '$lib/components/Tags.svelte';
	import Starts from "$lib/components/Starts.svelte";
	import Card from "$lib/components/Card.svelte";
	import Card2 from "$lib/components/Card2.svelte";
	import Pricing from "$lib/components/Pricing.svelte";
	import Bottom from "$lib/components/Bottom.svelte";

  


    let content = 'Enterprise Colocation';
      
      let btns = false;


    import  { superForm } from 'sveltekit-superforms';
	import { Label } from '$lib/components/ui/label/index.js';
	import { ArrowLeft, ArrowRight, Check, Loader } from '@lucide/svelte';
	import SelectComp from '$lib/components/SelectComp.svelte';
	// import ComboBox from '$lib/components/ComboBox.svelte';
	import { fullSchema } from "./schema.js";
	import { zod4Client } from "sveltekit-superforms/adapters";


    let { data } = $props();

    const { form, errors, delayed, capture, restore, enhance } = superForm(data.form, {
        // Don't reset between steps!
        resetForm: true,
        validators: zod4Client(fullSchema)
        
  }
    );

    // Snapshots takes care of navigating back
    export const snapshot = { capture, restore };

    


    let step = $derived($form.step || 1);

    

   let gpuOptions = [
    { value: 'RTX 4090', name: 'RTX 4090' },
    { value: 'NVIDIA A10 1', name: 'NVIDIA A10 1' },
    { value: 'NVIDIA A100 2', name: 'NVIDIA A100 2' },
    { value: 'NVIDIA A100 3', name: 'NVIDIA A100 3' },
    { value: 'NVIDIA H100 4', name: 'NVIDIA H100 4' }
   ];

   let pricingOptions = [
    { value: 'Basic', name: 'Basic' },
    { value: 'Pro', name: 'Pro' },
    { value: 'Enterprise', name: 'Enterprise' }
   ];


  
</script>

<svelte:head>
  <title>Colocation — Syaala</title>
  <meta name="description" content="Syaala Colocation — enterprise-grade GPU colocation: power, cooling, network, and remote support for AI workloads. Ship your servers or lease racks with predictable pricing and rapid deployment." />
  <link rel="canonical" href="/colocation" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Syaala, Colocation for GPUs & AI Infrastructure" />
  <meta property="og:description" content="Enterprise-grade colocation optimized for high-density GPU workloads. Fast rack deployment, N/2N power, secure facilities, and hybrid cloud connectivity." />
  <meta property="og:image" content="/images/gpu.webp" />
  <meta property="og:image:alt" content="Syaala, GPU colocation" />
  <meta property="og:url" content="/colocation" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Syaala — GPU Colocation & AI Infrastructure" />
  <meta name="twitter:description" content="Ship your GPUs or lease racks with Syaala: power, cooling, network, remote support, and transparent pricing for AI workloads." />
  <meta name="twitter:image" content="/images/gpu.webp" />
</svelte:head>
<div class="flex flex-col gap-16 items-center justify-center px-[7%] pb-8 relative bg-contain bg-top-left bg-[url(/images/lightnew.webp)] bg-no-repeat">

<section class="lg:h-screen h-auto w-full flex lg:flex-row flex-col-reverse gap-6 justify-center items-center 
 ">
 
     <div class="lg:w-[50%] w-full flex flex-col gap-4 lg:pt-0 pt-48 z-1">
        <div class="w-[300px]"><Tags {content} /></div>
        


        <h1 class="inline-block text-transparent bg-clip-text
           bg-linear-to-r from-green-1 to-green-2">
            Ship Your GPUs. Light up your cluster in 72 hours.</h1>

        <p class="text-gray-1">
Memphis colocation built for AI workloads. We handle receiving, racking, burn-in, and monitoring. You own the hardware, we handle the infrastructure.        </p>

        <div class="flex lg:flex-row flex-col w-full gap-4">
            <Button class={btn} href="#request">
Request a quote            </Button>

            <Button variant="outline" href="/pricing" class="{btn}   text-gray-1">
                See pricing
            </Button>

        </div>
     </div>


       <div class="lg:w-[50%] w-full lg:h-auto h-auto lg:mb-0 flex flex-row gap-0 justify-center items-center relative">

        <img src="/images/gpu.webp" alt="Server Photos" class="bounce bounce-left absolute left-0.5 lg:block hidden" >
        <img src="/images/gpu.webp" alt="Server Photos" class="bounce bounce-right absolute right-0.5 lg:block hidden" >
         <img src="/images/gpu.webp" alt="Server Photos" class="bounce bounce-left w-56 absolute left-1/4 top-2/3 lg:hidden block" >
        <img src="/images/gpu.webp" alt="Server Photos" class="bounce bounce-right w-56 absolute right-1/3 top-2/3 lg:hidden block" >

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

   <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full">
     <Card title='AI-Optimized Infrastructure'
     content='Designed for high-density GPU workloads with up to 80kW racks and N/2N power redundancy.'
    image='/images/Illustration17.png'
     />
      <Card title='Full Control, Zero Hassle'
     content='Ship and rack your own servers or lease reserved GPUs with full physical access and remote monitoring.'
    image='/images/Illustration18.png'
     />
      <Card title='Hybrid Cloud Ready'
     content='Integrate colocated GPUs directly with Syaala’s IaaS platform for seamless AI deployments.'
    image='/images/Illustration19.png'
     />
   </div>
   <div class="w-full">
     <Starts title='Purpose-Built for AI Performance' content='Features'
      para = 'Every rack, cable, and circuit is optimized for GPU-heavy workloads
ensuring reliability, uptime, and predictable performance at scale.'
   btn={btns}
    btnName =''
    href = ''
     />
  </div>

  <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full">
    <div class="lg:col-span-2 w-full p-0">
     <Card2 title='Power & Network Redundancy'
     content='Multi-fiber cross-connects and N/2N power systems ensure 
stable, high-throughput performance without downtime.'
    image='/images/Illustration20.png'
     /></div>
      <Card2 title='Physical Security'
     content='Biometric access, 24/7 surveillance, and compliance-ready facilities safeguard your hardware end to end.'
    image='/images/Illustration21.png'
     />
      <Card2 title='Remote Monitoring & Support'
     content='Stay in control with smart power metering, temperature tracking, and on-demand remote assistance.'
    image='/images/Illustration22.png'
     />  
     <div class="lg:col-span-2 p-0">     
     <Card2 title='Predictable Costs'
     content='Fixed monthly rates per kW, rack, or GPU so you always know exactly what you’re paying for.'
    image='/images/Illustration23.png'
     /> </div>
   </div>

     <div class="w-full">
     <Starts title='Simple, Transparent Pricing' content='Pricing'
      para = 'Choose the plan that fits your AI workload  pay per GPU, rack, or per request, with no hidden costs.'
   btn={btns}
    btnName =''
    href = ''
     />
  </div>

    <Pricing />
    

    <Bottom 
   call="Ready to bring your GPUs to Syaala?"
   title="Submit a custom request It’s time to host infrastructure on your terms."
   btn1="Request a quote"
   btn2="See pricing"
   href1='#request'
   href2='/pricing'
   para='60 days free rack rent • Discounted power first 6 months • 6-month flexible terms'
  />

</div>


{#snippet fe(label = '', name = '', type = '', placeholder = '', required=false, min="", max="")}
	<div class="flex w-full flex-col gap-2 justify-start">
		<Label for={name} >{label}</Label>
		<input
			{type}
			{name}
			{placeholder}
			{required}
			{min}
			{max}
            class='mt-1 block w-full rounded-md bg-white/3 text-gray-100 placeholder-gray-400 border border-gray-700 
            shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/35 focus:border-primary/35 p-2!'
			bind:value={$form[name]}
			aria-invalid={$errors[name] ? 'true' : undefined}
			
		/>
		{#if $errors[name]}
			<span class="text-red-500">{$errors[name]}</span>
		{/if}
	</div>
{/snippet}
{#snippet selects(name='', items=[{value:'', name:''}])}

<div class="flex w-full flex-col justify-start gap-2">
		<Label for={name} class="capitalize">{name.replace(/([a-z])([A-Z])/g, '$1 $2')}:</Label>

		<SelectComp {name} bind:value={$form[name]} {items} />
		{#if $errors[name]}<span class="text-red-500">{$errors[name]}</span>{/if}
	</div>
    
{/snippet}

<!-- {#snippet combo(name='', items=[{value:'', name:''}])}
	<div class="flex w-full flex-col justify-start gap-2">
		<Label for={name} class="capitalize">{name.replace(/([a-z])([A-Z])/g, "$1 $2")}:</Label>

		<ComboBox {name} bind:value={$form[name]} {items} />
		{#if $errors[name]}<span class="text-red-500">{$errors[name]}</span>{/if}
	</div>
{/snippet}  -->



<form
    method="POST"

    use:enhance
    class="w-full {glass} lg:max-w-xl max-w-full  mx-auto bg-transparent backdrop-blur-md border border-gray-800/60 rounded-lg p-8 space-y-6"
>
    <!-- Step management -->
    <input type="hidden" name="step" bind:value={$form.step} />
    <!-- <input type="hidden" name="__superform_id" bind:value={$formId} /> -->

    <h2 id="request" class="text-center pb-4">Ready to Transform Your AI Infrastructure? </h2>


    <!-- Step 1 -->
    {#if step == 1}
        <h3 class="text-2xl font-semibold text-gray-100 mb-2">Step 1: Your Details</h3>
        <p class="text-sm text-gray-400 mb-4">Let’s get started by getting your details </p>
        {@render fe('Name', 'fullName', 'text', 'Your Name', true)}
        {@render fe('Company Name', 'companyName', 'text', 'Your Company Name', true)}

         {@render fe('Phone', 'phone', 'tel', '(123) 456-7890', false, '10', '15')}

         {@render fe('Email', 'email', 'email', 'you@example.com', true)}

        <div class="flex justify-end">
            <Button
                type="button"
                 onclick={() => $form.step = 2}
                class="btn-primary px-5 py-2 rounded-md hover:btn-primary-dark transition"
            >
                Next <ArrowRight />
            </Button>
        </div>

    <!-- Step 2 -->
    {:else if step == 2}
        <h3 class="text-2xl font-semibold text-gray-100 mb-2">Step 2: Confirmation</h3>
        <p class="text-sm text-gray-400 mb-4">Hello <strong class="text-gray-100">{$form.name}</strong>, just one more step!</p>
        {@render selects('gpu', gpuOptions)}
        {@render selects('pricing', pricingOptions)}
        {@render fe('Usage Hours per Day', 'hours', 'number', 'Hours', true, '1', '24')}

        <div class="flex justify-between items-center">
            <Button
                type="button"
                onclick={() => $form.step = 1}
            >
            <ArrowLeft /> Back
            </Button>
             <Button
                type="button"
                class="btn-primary px-5 py-2 rounded-md hover:btn-primary-dark transition"
                onclick={() => $form.step = 3}
            >
                Next  <ArrowRight />
            </Button>
        </div>
   
        {:else if step == 3}

        <h3 class="text-2xl font-semibold text-gray-100 mb-2">Step 3: Additional Information</h3>
        <p class="text-sm text-gray-400 mb-4">Almost done! Please provide any additional information below.</p> 
        <div class="flex w-full flex-col gap-2 justify-start">
		<Label for='notes' >Additional Information:</Label>
		<textarea
			
			name="notes"
			placeholder="Additional information You want to share..."
            rows="4"
            class='mt-1 block w-full rounded-md bg-white/3 text-gray-100 placeholder-gray-400 border border-gray-700 
            shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/35 focus:border-primary/35 p-2!'
			bind:value={$form.notes}
			aria-invalid={$errors.notes ? 'true' : undefined}
			
		></textarea>
         <input type="hidden" name="step" bind:value={$form.step} />
         <input type="hidden" name="fullName" bind:value={$form.fullName} />
         <input type="hidden" name="companyName" bind:value={$form.companyName} />
         <input type="hidden" name="phone" bind:value={$form.phone} />
         <input type="hidden" name="email" bind:value={$form.email} />
         <input type="hidden" name="gpu" bind:value={$form.gpu} />
         <input type="hidden" name="pricing" bind:value={$form.pricing} />
         <input type="hidden" name="hours" bind:value={$form.hours} />
         <input type="hidden" name="step" bind:value={$form.step} />

 



		{#if $errors.notes}
			<span class="text-red-500">{$errors.notes}</span>
		{/if}
	</div>


        <div class="flex justify-between items-center">
            <Button
                type="button"
                onclick={() => $form.step = 2}
            >
            <ArrowLeft /> Back
            </Button>
            <Button
                type="submit"

                class="btn-primary px-5 py-2 rounded-md hover:btn-primary-dark transition"
            >        


            Submit 
            {#if $delayed}

            <Loader class="animate-spin"/>

            {:else}
            <Check />
            {/if}

            
            </Button>
        </div>
    {/if}
</form>


<style>
    

    /* Button styles using CSS variables so accent is consistent */
    .btn-primary {
        background-color: color-mix(in srgb, var(--primary) 80%, transparent);
        color: white;
        border: 1px solid color-mix(in srgb, var(--primary) 60%, transparent);
        box-shadow: 0 4px 10px rgba(0,0,0,0.4);
    }
    .btn-primary:hover,
    .btn-primary-dark {
        background-color: var(--primary-dark);
        border-color: var(--primary-dark);
    }

    /* Make input autofill and focus nicer in dark */
    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        -webkit-text-fill-color: #e6e6e6 !important;
        box-shadow: 0 0 0px 1000px rgba(255,255,255,0.02) inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    /* Ensure links keep accent color */
   
</style>
