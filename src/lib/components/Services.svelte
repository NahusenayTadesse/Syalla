<script>
	import Card from "./Card.svelte";
	import Starts from "./Starts.svelte";

    let content = 'What you will get';
    let para = 'Syaala combines cloud simplicity with hardware control so you can deploy, scale, or host AI models without friction.'

 let btn = false;
</script>



<section class="w-full flex flex-col gap-8">


<Starts title="One Platform. Two Powerful Ways to Build." {content} {para}  {btn} btnName='' href='' />

<div class="grid lg:grid-cols-3 grid-cols-1 gap-8">
    <Card title="Instant Deployment" content="Deploy any model in seconds using optimized templates for LLMs, diffusion, or embeddings. No setup, no DevOps." image='/images/Illustration.webp' />
    <Card title="Seamless Scaling" content="Scale automatically across GPU clusters and monitor usage in real-time efficient, predictable, and serverless." image='/images/Illustration2.webp' />
    <Card title="Unified Ecosystem" content="Run models or host hardware in one connected system same tools, same dashboard, complete flexibility." image='/images/Illustration3.webp' />
</div>
</section>