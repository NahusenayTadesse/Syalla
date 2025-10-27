<script lang="ts">
    import { page } from '$app/state';
	import { glass } from '$lib/global.svelte.js';
    import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { Label } from '$lib/components/ui/label/index.js';
          import { Button } from "$lib/components/ui/button/index.js";
	import { ArrowLeft, ArrowRight, Check } from '@lucide/svelte';
	import SelectComp from '$lib/components/SelectComp.svelte';
	import ComboBox from '$lib/components/ComboBox.svelte';


    let { data } = $props();

    const { form, formId, errors, message, delayed, capture, restore, enhance } = superForm(data.form, {
        // Don't reset between steps!
        resetForm: false
    });

    // Snapshots takes care of navigating back
    export const snapshot = { capture, restore };

    let step = $derived($message?.step ?? 1);

   let gpuOptions = [
    { value: 'RTX 4090', name: 'RTX 4090' },
    { value: 'A10', name: 'NVIDIA A10' },
    { value: 'A100', name: 'NVIDIA A100' },
    { value: 'H100', name: 'NVIDIA H100' }
   ];

   let pricingOptions = [
    { value: 'Basic', name: 'Basic' },
    { value: 'Pro', name: 'Pro' },
    { value: 'Enterprise', name: 'Enterprise' }
   ];

    
</script>

{#if $message?.text}
    <div>
        {$message.text}
    </div>
{/if}

<!-- <SuperDebug data={form} /> -->

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

{#snippet combo(name='', items=[{value:'', name:''}])}
	<div class="flex w-full flex-col justify-start gap-2">
		<Label for={name} class="capitalize">{name.replace(/([a-z])([A-Z])/g, "$1 $2")}:</Label>

		<ComboBox {name} bind:value={$form[name]} {items} />
		{#if $errors[name]}<span class="text-red-500">{$errors[name]}</span>{/if}
	</div>
{/snippet} 


<form
    method="POST"
    action="?/main"
    use:enhance
    class="w-full {glass} max-w-xl mt-32 mx-auto bg-transparent backdrop-blur-md border border-gray-800/60 rounded-lg p-8 space-y-6"
>
    <!-- Step management -->
    <input type="hidden" name="step" value={step} />
    <input type="hidden" name="__superform_id" bind:value={$formId} />

    <!-- Step 1 -->
    {#if step == 1}
        <h2 class="text-2xl font-semibold text-gray-100 mb-2">Step 1: Your Details</h2>
        <p class="text-sm text-gray-400 mb-4">Let’s get started by getting your details </p>
            {@render fe('Name', 'fullName', 'text', 'Your Name', true)}
            {@render fe('Company Name', 'companyName', 'text', 'Your Company Name', true)}

         {@render fe('Phone', 'phone', 'tel', '(123) 456-7890', false, '10', '15')}

         {@render fe('Email', 'email', 'email', 'you@example.com', true)}

        <div class="flex justify-end">
            <Button
                type="submit"
                class="btn-primary px-5 py-2 rounded-md hover:btn-primary-dark transition"
            >
                Next <ArrowRight />
            </Button>
        </div>

    <!-- Step 2 -->
    {:else if step == 2}
        <h2 class="text-2xl font-semibold text-gray-100 mb-2">Step 2: Confirmation</h2>
        <p class="text-sm text-gray-400 mb-4">Hello <strong class="text-gray-100">{$form.name}</strong>, just one more step!</p>
        {@render combo('gpu', gpuOptions)}
        {@render selects('pricing', pricingOptions)}
        {@render fe('Usage Hours per Day', 'hours', 'number', 'Hours', true, '1', '24')}

        <div class="flex justify-between items-center">
            <Button
                type="button"
                onclick={() => step = 1}
            >
            <ArrowLeft /> Back
            </Button>
             <Button
                type="submit"
                class="btn-primary px-5 py-2 rounded-md hover:btn-primary-dark transition"
                onclick={() => step = 3}
            >
                Next  <ArrowRight />
            </Button>
        </div>
   
        {:else if step == 3}

        <h2 class="text-2xl font-semibold text-gray-100 mb-2">Step 3: Additional Information</h2>
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
		{#if $errors.notes}
			<span class="text-red-500">{$errors.notes}</span>
		{/if}
	</div>

         <div class="text-sm text-gray-400">
            By submitting this form, you agree to our <a href="/terms" class="text-primary underline">Terms of Service</a> and <a href="/privacy" class="text-primary underline">Privacy Policy</a>.
        </div>

        <div class="flex justify-between items-center">
            <Button
                type="button"
                onclick={() => step = 2}
            >
            <ArrowLeft /> Back
            </Button>
            <Button
                type="submit"
                class="btn-primary px-5 py-2 rounded-md hover:btn-primary-dark transition"
            >
                Submit <Check />
            </Button>
        </div>
    {/if}
</form>

<form action="?/test" method="post" id='test'>
    <input type="text" value="fuck">
   <input type="submit" value="Submit" form="test">
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
