import { T as attr_class, s as stringify, l as spread_props, e as ensure_array_like } from './index-BGrhPemF.js';
import { B as Button, I as Icon, b as btn, g as glass } from './Icon-DmoP_vdV.js';
import { e as escape_html } from './context-CSN2_sPV.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Arrow_right($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M5 12h14" }],
      ["path", { "d": "m12 5 7 7-7 7" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "arrow-right" },
      /**
       * @component @name ArrowRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Bottom($$renderer, $$props) {
  let { call, title, btn1, btn2, href1, href2, para } = $$props;
  $$renderer.push(`<section class="w-[99vw] p-8 py-16 flex flex-col gap-4 justify-center lg:items-center items-start isolate ring-white/5 ring-1 bg-opacity-white-10 bg-white/0 shadow-sm shadow-white/20 backdrop-blur-lg bg-cover bg-[url(/images/light5.png)] bg-center"><p>${escape_html(call)}</p> <h2 class="lg:text-center text-start">${html(title)}</h2> <div class="flex lg:flex-row flex-col gap-2 justify-center items-center w-full">`);
  Button($$renderer, {
    href: href1,
    target: "_blank",
    class: `${stringify(btn)} lg:w-auto w-full`,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->${escape_html(btn1)}`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  if (btn2 !== "") {
    $$renderer.push("<!--[-->");
    Button($$renderer, {
      variant: "outline",
      href: href2,
      class: `${stringify(btn)} lg:w-auto w-full text-gray-1`,
      children: ($$renderer2) => {
        $$renderer2.push(`<!---->${escape_html(btn2)}`);
      },
      $$slots: { default: true }
    });
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div> <p class="text-gray-1 !lg:text-[16px] !text-[14px]">${escape_html(para)}</p></section>`);
}
function Tags($$renderer, $$props) {
  let { content } = $$props;
  $$renderer.push(`<span${attr_class(`inline-flex items-center justify-center lg:text-[12px] text-[16px] flex-row gap-[12px] px-[16px] py-[4px] rounded-full ${stringify(glass)} `)}><img src="/icons/heroAi.svg" alt="icons"/> ${escape_html(content)}</span>`);
}
function Starts($$renderer, $$props) {
  let { title, content, para, btn: btn2 = false, btnName = "", href = "" } = $$props;
  $$renderer.push(`<div class="flex flex-col gap-4"><div class="lg:max-w-auto w-full">`);
  Tags($$renderer, { content });
  $$renderer.push(`<!----></div> <h2>${escape_html(title)}</h2> <p class="text-gray-1 lg:w-1/2 w-full">${escape_html(para)}</p> `);
  if (btn2) {
    $$renderer.push("<!--[-->");
    Button($$renderer, {
      href,
      class: "bg-white text-black w-xs",
      target: "_blank",
      children: ($$renderer2) => {
        $$renderer2.push(`<!---->${escape_html(btnName)} `);
        Arrow_right($$renderer2, {});
        $$renderer2.push(`<!---->`);
      },
      $$slots: { default: true }
    });
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
}

function Badge_check($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { "d": "m9 12 2 2 4-4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "badge-check" },
      /**
       * @component @name BadgeCheck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMy44NSA4LjYyYTQgNCAwIDAgMSA0Ljc4LTQuNzcgNCA0IDAgMCAxIDYuNzQgMCA0IDQgMCAwIDEgNC43OCA0Ljc4IDQgNCAwIDAgMSAwIDYuNzQgNCA0IDAgMCAxLTQuNzcgNC43OCA0IDQgMCAwIDEtNi43NSAwIDQgNCAwIDAgMS00Ljc4LTQuNzcgNCA0IDAgMCAxIDAtNi43NloiIC8+CiAgPHBhdGggZD0ibTkgMTIgMiAyIDQtNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/badge-check
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function pricing($$renderer, title = "", description = "", price = "", list = [""]) {
  $$renderer.push(`<div${attr_class(`p-[32px] ${stringify(glass)} flex flex-col gap-4 items-start justify-start rounded-xl`)}><h6 class="font-medium">${escape_html(title)}</h6> <p class="text-gray-1">${escape_html(description)}</p> <div class="flex flex-row gap-0 p-0 items-center"><h3>${escape_html(price)}</h3> <p class="text-gray-1">/month</p></div> `);
  Button($$renderer, {
    class: `!bg-[#0F100F] w-full ${stringify(glass)}`,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Choose this plan`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <img src="/images/line.png" class="p-8" alt=""/> <div class="flex flex-col gap-2"><!--[-->`);
  const each_array = ensure_array_like(list);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let list2 = each_array[$$index];
    $$renderer.push(`<div class="flex flex-row gap-4">`);
    Badge_check($$renderer, {});
    $$renderer.push(`<!----> ${escape_html(list2)}</div>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function Pricing($$renderer) {
  let starter = [
    "5 KW power allocation",
    "Half rack (21U)",
    "1 Gbps DIA included",
    "2 hours smart hands/month",
    "24/7 monitoring",
    "Remote rack camera access"
  ];
  let pro = [
    "10 kW power allocation",
    "Full rack (42U)",
    "1 Gbps DIA included",
    "4 hours smart hands/month",
    "Priority support",
    "Remote rack camera + telemetry"
  ];
  let enterprise = [
    " 15+ kW per rack",
    "Multiple racks available",
    "10 Gbps DIA or dual carrier",
    "Unlimited smart hands",
    "Dedicated account manager",
    "Custom SLA terms"
  ];
  $$renderer.push(`<section class="grid lg:grid-cols-3 grid-cols-1 gap-4">`);
  pricing($$renderer, "Starter", "Half rack for testing and small deployments", "$600", starter);
  $$renderer.push(`<!----> <div class="p-[32px] rounded-xl flex flex-col gap-4 items-start justify-start bg-cover bg-[url(/images/pro.png)] shadow-sm shadow-primarynp"><h6 class="font-medium">Pro</h6> <p class="text-gray-1">Full rack for production AI workloads</p> <div class="flex flex-row gap-0 p-0 items-center"><h3>$995</h3> <p class="text-gray-1">/month</p></div> `);
  Button($$renderer, {
    class: "bg-primary w-full",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Choose this plan`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <img src="/images/line.png" class="p-8" alt=""/> <div class="flex flex-col gap-2"><!--[-->`);
  const each_array_1 = ensure_array_like(pro);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let list = each_array_1[$$index_1];
    $$renderer.push(`<div class="flex flex-row gap-4">`);
    Badge_check($$renderer, {});
    $$renderer.push(`<!----> ${escape_html(list)}</div>`);
  }
  $$renderer.push(`<!--]--></div></div> `);
  pricing($$renderer, "Enterprise", "Multi-rack deployments with custom SLAs", "Custom", enterprise);
  $$renderer.push(`<!----></section>`);
}

export { Bottom as B, Pricing as P, Starts as S, Tags as T };
//# sourceMappingURL=Pricing-Cak6Ixb3.js.map
