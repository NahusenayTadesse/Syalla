<script>
	import Accordion from "./Accordion.svelte";
	import Tags from "./Tags.svelte";

    let faq = [
      {title: 'How do credits work?', description: 'Credits are used to access premium features. You purchase or receive credits with plans or promotions, and each action deducts a set amount. Check your dashboard for your current balance and usage history.'},
      {title: 'Do credits expire', description: 'Credits may expire after a specified period from the date of purchase—check your billing or promotions page for exact expiry terms. Promotional credits can have different rules.'},
      {title: 'Can I get a refund?', description: 'Refund eligibility depends on the purchase type and local laws. Unused credits may be refundable in certain cases—contact support with your order details to request a review.'},
      {title: 'What happens when I run out of credits?', description: 'When you run out of credits, credit-based features will be disabled until you top up. The app will prompt you to purchase more; some features may offer limited free usage or trials.'},
      {title: 'Is there a monthly subscription?', description: 'We offer subscription plans that include recurring credits and additional benefits. You can view, change, or cancel subscriptions anytime in your billing settings.'}
    ]

    
</script>



<div class="w-full flex flex-col gap-4 justify-start items-start">
 <Tags content="FAQ" />

 <h2 class="!font-normal">Frequently Asked Questions</h2>
<div class="w-full p-0 flex flex-col gap-4">
    {#each faq as faq}

    <Accordion title={faq.title} description={faq.description} />

  {/each}
</div>


 


</div>