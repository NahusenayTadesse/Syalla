<script>
	import { trusted } from "svelte/legacy";
	import Starts from "./Starts.svelte";
	import Card2 from "./Card2.svelte";

    let content = `Inference-as-a-Service Platform`
    let para = `Deploy and scale applications without battling the intricacies of K8s and 
spending valuable time configuring low-level K8s resources repeatedly.`

let btn=true;



    
</script>

<section>
       <section class="w-full flex flex-col gap-8">


<Starts title="Deploy AI Models Instantly" {content} {para}  {btn} btnName='Deploy Your First Model' href='' />

<div class="grid grid-cols-2 gap-8">
    <Card2 title="One-Click Templates" content="Launch pre-configured models like Llama, Whisper, or Stable Diffusion in seconds." image='/images/Illustration4.png' />
    <Card2 title="Lease Reserved GPUs" content="Access enterprise-grade GPUs (A100, H100, L40) in pre-configured racks." image='/images/Illustration5.png' />
    <Card2 title="Unified Ecosystem" content="Run models or host hardware in one connected system same tools, same dashboard, complete flexibility." image='/images/Illustration3.png' />
</div>
</section> 
</section>