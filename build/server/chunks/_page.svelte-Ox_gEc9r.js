import { k as attr_class, a as attr, s as stringify, l as store_get, u as unsubscribe_stores, c as bind_props, h as head, m as store_mutate } from './index-CgayGINj.js';
import { j as glass, B as Button, a as btn } from './create-id-BRPGfuoy.js';
import { T as Tags, S as Starts, P as Pricing, B as Bottom } from './Pricing-CAVXAThx.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import './utils-_bsNeCKS.js';
import './client2-DzPV4lId.js';
import { c as superForm } from './schemas-BNPRgEqo.js';
import './app-DuJI3prF.js';
import { L as Label, C as ComboBox, S as SelectComp, A as Arrow_left, a as Check } from './ComboBox-DPurYtB2.js';
import { A as Arrow_right } from './arrays-DNpO5d2f.js';
import './context-Daw8ILuF.js';
import './errors-B8liwVcD.js';
import './index-server-CHpaVqRR.js';
import './events-C4reYfga.js';
import './scroll-lock-BihGeN5_.js';

function Card2($$renderer, $$props) {
  let { title, content, image } = $$props;
  $$renderer.push(`<div${attr_class(`${stringify(glass)} w-full h-full rounded-[16px] flex flex-col gap-8 justify-center p-8 items-center`)}><img${attr("src", image)} alt="Card Illustration"/> <h6>${escape_html(title)}</h6> <p class="text-gray-1 lg:w-sm w-full text-center">${escape_html(content)}</p></div>`);
}
function Card($$renderer, $$props) {
  let { title, content, image } = $$props;
  $$renderer.push(`<div${attr_class(`${stringify(glass)} rounded-[16px] flex flex-col gap-2 p-8 pb-0 w-full`)}><h6>${escape_html(title)}</h6> <p class="text-gray-1">${escape_html(content)}</p> <img${attr("src", image)} alt="Card Illustration"/></div>`);
}

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let content = "Enterprise Colocation";
    let btns = false;
    let { data } = $$props;
    const {
      form,
      formId,
      errors,
      message,
      capture,
      restore
    } = superForm(data.form, {
      // Don't reset between steps!
      resetForm: false
    });
    const snapshot = { capture, restore };
    let step = store_get($$store_subs ??= {}, "$message", message)?.step ?? 1;
    let gpuOptions = [
      { value: "RTX 4090", name: "RTX 4090" },
      { value: "A10", name: "NVIDIA A10" },
      { value: "A100", name: "NVIDIA A100" },
      { value: "H100", name: "NVIDIA H100" }
    ];
    let pricingOptions = [
      { value: "Basic", name: "Basic" },
      { value: "Pro", name: "Pro" },
      { value: "Enterprise", name: "Enterprise" }
    ];
    function fe($$renderer3, label = "", name = "", type = "", placeholder = "", required = false, min = "", max = "") {
      $$renderer3.push(`<div class="flex w-full flex-col gap-2 justify-start">`);
      Label($$renderer3, {
        for: name,
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(label)}`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <input${attr("type", type)}${attr("name", name)}${attr("placeholder", placeholder)}${attr("required", required, true)}${attr("min", min)}${attr("max", max)} class="mt-1 block w-full rounded-md bg-white/3 text-gray-100 placeholder-gray-400 border border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/35 focus:border-primary/35 p-2! svelte-48oj1u"${attr("value", store_get($$store_subs ??= {}, "$form", form)[name])}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors)[name] ? "true" : void 0)}/> `);
      if (store_get($$store_subs ??= {}, "$errors", errors)[name]) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<span class="text-red-500">${escape_html(store_get($$store_subs ??= {}, "$errors", errors)[name])}</span>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    function selects($$renderer3, name = "", items = [{ value: "", name: "" }]) {
      $$renderer3.push(`<div class="flex w-full flex-col justify-start gap-2">`);
      Label($$renderer3, {
        for: name,
        class: "capitalize",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}:`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      SelectComp($$renderer3, {
        name,
        items,
        get value() {
          return store_get($$store_subs ??= {}, "$form", form)[name];
        },
        set value($$value) {
          store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form)[name] = $$value);
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      if (store_get($$store_subs ??= {}, "$errors", errors)[name]) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<span class="text-red-500">${escape_html(store_get($$store_subs ??= {}, "$errors", errors)[name])}</span>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    function combo($$renderer3, name = "", items = [{ value: "", name: "" }]) {
      $$renderer3.push(`<div class="flex w-full flex-col justify-start gap-2">`);
      Label($$renderer3, {
        for: name,
        class: "capitalize",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}:`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      ComboBox($$renderer3, {
        name,
        items,
        get value() {
          return store_get($$store_subs ??= {}, "$form", form)[name];
        },
        set value($$value) {
          store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form)[name] = $$value);
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      if (store_get($$store_subs ??= {}, "$errors", errors)[name]) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<span class="text-red-500">${escape_html(store_get($$store_subs ??= {}, "$errors", errors)[name])}</span>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head($$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Colocation — Syaala</title>`);
        });
        $$renderer4.push(`<meta name="description" content="Syaala Colocation — enterprise-grade GPU colocation: power, cooling, network, and remote support for AI workloads. Ship your servers or lease racks with predictable pricing and rapid deployment."/> <link rel="canonical" href="/colocation"/> <meta property="og:type" content="website"/> <meta property="og:title" content="Syaala, Colocation for GPUs &amp; AI Infrastructure"/> <meta property="og:description" content="Enterprise-grade colocation optimized for high-density GPU workloads. Fast rack deployment, N/2N power, secure facilities, and hybrid cloud connectivity."/> <meta property="og:image" content="/images/gpu.png"/> <meta property="og:image:alt" content="Syaala, GPU colocation"/> <meta property="og:url" content="/colocation"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Syaala — GPU Colocation &amp; AI Infrastructure"/> <meta name="twitter:description" content="Ship your GPUs or lease racks with Syaala: power, cooling, network, remote support, and transparent pricing for AI workloads."/> <meta name="twitter:image" content="/images/gpu.png"/>`);
      });
      $$renderer3.push(`<div class="flex flex-col gap-16 items-center justify-center px-[7%] pb-8 relative"><section class="lg:h-screen h-auto w-full flex lg:flex-row flex-col-reverse gap-6 justify-center items-center"><div class="lg:w-[50%] w-full flex flex-col gap-4 lg:pt-0 pt-48 z-1"><div class="w-[300px]">`);
      Tags($$renderer3, { content });
      $$renderer3.push(`<!----></div> <h1 class="inline-block text-transparent bg-clip-text bg-linear-to-r from-green-1 to-green-2">Ship Your GPUs. Light up your cluster in 72 hours.</h1> <p class="text-gray-1">Memphis colocation built for AI workloads. We handle receiving, racking, burn-in, and monitoring. You own the hardware, we handle the infrastructure.</p> <div class="flex lg:flex-row flex-col w-full gap-4">`);
      Button($$renderer3, {
        class: btn,
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->Request a quote`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Button($$renderer3, {
        variant: "outline",
        class: `${stringify(btn)}   text-gray-1`,
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->See pricing`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div></div> <div class="lg:w-[50%] w-full lg:h-auto h-auto lg:mb-0 flex flex-row gap-0 justify-center items-center relative"><img src="/images/gpu.png" alt="Server Photos" class="bounce bounce-left absolute left-0.5 lg:block hidden"/> <img src="/images/gpu.png" alt="Server Photos" class="bounce bounce-right absolute right-0.5 lg:block hidden"/> <img src="/images/gpu.png" alt="Server Photos" class="bounce bounce-left w-56 absolute left-1/4 top-2/3 lg:hidden block"/> <img src="/images/gpu.png" alt="Server Photos" class="bounce bounce-right w-56 absolute right-1/3 top-2/3 lg:hidden block"/></div></section> <div class="w-full">`);
      Starts($$renderer3, {
        title: "Why Choose Syaala Colocation",
        content: "Why Us",
        para: "Engineered for high-density GPU workloads, with the \r\nflexibility and visibility modern AI teams need.",
        btn: btns,
        btnName: "",
        href: ""
      });
      $$renderer3.push(`<!----></div> <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full">`);
      Card($$renderer3, {
        title: "AI-Optimized Infrastructure",
        content: "Designed for high-density GPU workloads with up to 80kW racks and N/2N power redundancy.",
        image: "/images/Illustration17.png"
      });
      $$renderer3.push(`<!----> `);
      Card($$renderer3, {
        title: "Full Control, Zero Hassle",
        content: "Ship and rack your own servers or lease reserved GPUs with full physical access and remote monitoring.",
        image: "/images/Illustration18.png"
      });
      $$renderer3.push(`<!----> `);
      Card($$renderer3, {
        title: "Hybrid Cloud Ready",
        content: "Integrate colocated GPUs directly with Syaala’s IaaS platform for seamless AI deployments.",
        image: "/images/Illustration19.png"
      });
      $$renderer3.push(`<!----></div> <div class="w-full">`);
      Starts($$renderer3, {
        title: "Purpose-Built for AI Performance",
        content: "Features",
        para: "Every rack, cable, and circuit is optimized for GPU-heavy workloads\r\nensuring reliability, uptime, and predictable performance at scale.",
        btn: btns,
        btnName: "",
        href: ""
      });
      $$renderer3.push(`<!----></div> <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full"><div class="lg:col-span-2 w-full p-0">`);
      Card2($$renderer3, {
        title: "Power & Network Redundancy",
        content: "Multi-fiber cross-connects and N/2N power systems ensure \r\nstable, high-throughput performance without downtime.",
        image: "/images/Illustration20.png"
      });
      $$renderer3.push(`<!----></div> `);
      Card2($$renderer3, {
        title: "Physical Security",
        content: "Biometric access, 24/7 surveillance, and compliance-ready facilities safeguard your hardware end to end.",
        image: "/images/Illustration21.png"
      });
      $$renderer3.push(`<!----> `);
      Card2($$renderer3, {
        title: "Remote Monitoring & Support",
        content: "Stay in control with smart power metering, temperature tracking, and on-demand remote assistance.",
        image: "/images/Illustration22.png"
      });
      $$renderer3.push(`<!----> <div class="lg:col-span-2 p-0">`);
      Card2($$renderer3, {
        title: "Predictable Costs",
        content: "Fixed monthly rates per kW, rack, or GPU so you always know exactly what you’re paying for.",
        image: "/images/Illustration23.png"
      });
      $$renderer3.push(`<!----></div></div> <div class="w-full">`);
      Starts($$renderer3, {
        title: "Simple, Transparent Pricing",
        content: "Pricing",
        para: "Choose the plan that fits your AI workload  pay per GPU, rack, or per request, with no hidden costs.",
        btn: btns,
        btnName: "",
        href: ""
      });
      $$renderer3.push(`<!----></div> `);
      Pricing($$renderer3);
      $$renderer3.push(`<!----> `);
      Bottom($$renderer3, {
        call: "Ready to bring your GPUs to Syaala?",
        title: "Submit a custom request It’s time to host infrastructure on your terms.",
        btn1: "Request a quote",
        btn2: "See pricing",
        href1: "",
        href2: "",
        para: "60 days free rack rent • Discounted power first 6 months • 6-month flexible terms"
      });
      $$renderer3.push(`<!----></div>  <form method="POST" action="?/main"${attr_class(`w-full ${stringify(glass)} lg:max-w-xl max-w-full mx-auto bg-transparent backdrop-blur-md border border-gray-800/60 rounded-lg p-8 space-y-6`, "svelte-48oj1u")}><input type="hidden" name="step"${attr("value", step)} class="svelte-48oj1u"/> <input type="hidden" name="__superform_id"${attr("value", store_get($$store_subs ??= {}, "$formId", formId))} class="svelte-48oj1u"/> `);
      if (step == 1) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<h2 class="text-2xl font-semibold text-gray-100 mb-2">Step 1: Your Details</h2> <p class="text-sm text-gray-400 mb-4">Let’s get started by getting your details</p> `);
        fe($$renderer3, "Name", "fullName", "text", "Your Name", true);
        $$renderer3.push(`<!----> `);
        fe($$renderer3, "Company Name", "companyName", "text", "Your Company Name", true);
        $$renderer3.push(`<!----> `);
        fe($$renderer3, "Phone", "phone", "tel", "(123) 456-7890", false, "10", "15");
        $$renderer3.push(`<!----> `);
        fe($$renderer3, "Email", "email", "email", "you@example.com", true);
        $$renderer3.push(`<!----> <div class="flex justify-end">`);
        Button($$renderer3, {
          type: "submit",
          class: "btn-primary px-5 py-2 rounded-md hover:btn-primary-dark transition",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Next `);
            Arrow_right($$renderer4, {});
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        if (step == 2) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<h2 class="text-2xl font-semibold text-gray-100 mb-2">Step 2: Confirmation</h2> <p class="text-sm text-gray-400 mb-4">Hello <strong class="text-gray-100">${escape_html(store_get($$store_subs ??= {}, "$form", form).name)}</strong>, just one more step!</p> `);
          combo($$renderer3, "gpu", gpuOptions);
          $$renderer3.push(`<!----> `);
          selects($$renderer3, "pricing", pricingOptions);
          $$renderer3.push(`<!----> `);
          fe($$renderer3, "Usage Hours per Day", "hours", "number", "Hours", true, "1", "24");
          $$renderer3.push(`<!----> <div class="flex justify-between items-center">`);
          Button($$renderer3, {
            type: "button",
            onclick: () => step = 1,
            children: ($$renderer4) => {
              Arrow_left($$renderer4, {});
              $$renderer4.push(`<!----> Back`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Button($$renderer3, {
            type: "submit",
            class: "btn-primary px-5 py-2 rounded-md hover:btn-primary-dark transition",
            onclick: () => step = 3,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Next `);
              Arrow_right($$renderer4, {});
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (step == 3) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<h2 class="text-2xl font-semibold text-gray-100 mb-2">Step 3: Additional Information</h2> <p class="text-sm text-gray-400 mb-4">Almost done! Please provide any additional information below.</p> <div class="flex w-full flex-col gap-2 justify-start">`);
            Label($$renderer3, {
              for: "notes",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->Additional Information:`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> <textarea name="notes" placeholder="Additional information You want to share..." rows="4" class="mt-1 block w-full rounded-md bg-white/3 text-gray-100 placeholder-gray-400 border border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/35 focus:border-primary/35 p-2!"${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).notes ? "true" : void 0)}>`);
            const $$body = escape_html(store_get($$store_subs ??= {}, "$form", form).notes);
            if ($$body) {
              $$renderer3.push(`${$$body}`);
            }
            $$renderer3.push(`</textarea> `);
            if (store_get($$store_subs ??= {}, "$errors", errors).notes) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span class="text-red-500">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).notes)}</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--></div> <div class="text-sm text-gray-400">By submitting this form, you agree to our <a href="/terms" class="text-primary underline">Terms of Service</a> and <a href="/privacy" class="text-primary underline">Privacy Policy</a>.</div> <div class="flex justify-between items-center">`);
            Button($$renderer3, {
              type: "button",
              onclick: () => step = 2,
              children: ($$renderer4) => {
                Arrow_left($$renderer4, {});
                $$renderer4.push(`<!----> Back`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> `);
            Button($$renderer3, {
              type: "submit",
              class: "btn-primary px-5 py-2 rounded-md hover:btn-primary-dark transition",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->Submit `);
                Check($$renderer4, {});
                $$renderer4.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]--></form>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { snapshot });
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Ox_gEc9r.js.map
