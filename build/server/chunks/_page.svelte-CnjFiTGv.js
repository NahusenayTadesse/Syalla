import { l as store_get, u as unsubscribe_stores, c as bind_props, k as attr_class, a as attr, m as store_mutate, s as stringify } from './index-CgayGINj.js';
import './client-DRnOaxTX.js';
import { B as Button, j as glass } from './create-id-BRPGfuoy.js';
import './utils-_bsNeCKS.js';
import './client2-DzPV4lId.js';
import { c as superForm } from './schemas-BNPRgEqo.js';
import './app-DuJI3prF.js';
import { L as Label, C as ComboBox, S as SelectComp, A as Arrow_left, a as Check } from './ComboBox-DPurYtB2.js';
import { A as Arrow_right } from './arrays-DNpO5d2f.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import './context-Daw8ILuF.js';
import './errors-B8liwVcD.js';
import './index-server-CHpaVqRR.js';
import './events-C4reYfga.js';
import './scroll-lock-BihGeN5_.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
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
      $$renderer3.push(`<!----> <input${attr("type", type)}${attr("name", name)}${attr("placeholder", placeholder)}${attr("required", required, true)}${attr("min", min)}${attr("max", max)} class="mt-1 block w-full rounded-md bg-white/3 text-gray-100 placeholder-gray-400 border border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/35 focus:border-primary/35 p-2! svelte-yzhnh5"${attr("value", store_get($$store_subs ??= {}, "$form", form)[name])}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors)[name] ? "true" : void 0)}/> `);
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
      if (store_get($$store_subs ??= {}, "$message", message)?.text) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div>${escape_html(store_get($$store_subs ??= {}, "$message", message).text)}</div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->   <form method="POST" action="?/main"${attr_class(`w-full ${stringify(glass)} max-w-xl mt-32 mx-auto bg-transparent backdrop-blur-md border border-gray-800/60 rounded-lg p-8 space-y-6`, "svelte-yzhnh5")}><input type="hidden" name="step"${attr("value", step)} class="svelte-yzhnh5"/> <input type="hidden" name="__superform_id"${attr("value", store_get($$store_subs ??= {}, "$formId", formId))} class="svelte-yzhnh5"/> `);
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
      $$renderer3.push(`<!--]--></form> <form action="?/test" method="post" id="test"><input type="text" value="fuck" class="svelte-yzhnh5"/> <input type="submit" value="Submit" form="test" class="svelte-yzhnh5"/></form>`);
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
//# sourceMappingURL=_page.svelte-CnjFiTGv.js.map
