import { a as attr_class, b as stringify, c as spread_props } from './index-CSxFwnw_.js';
import { B as Button, g as glass, b as btn, I as Icon } from './Icon-DSSx7BZD.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

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
  $$renderer.push(`<!--]--></div> <p class="text-gray-1 !lg:text-[16px] text-[14px]!">${escape_html(para)}</p></section>`);
}
function Tags($$renderer, $$props) {
  let { content } = $$props;
  $$renderer.push(`<span${attr_class(`inline-flex items-center justify-center lg:text-[12px] text-[16px] flex-row gap-3 px-4 py-1 rounded-full ${stringify(glass)} `)}><img src="/icons/heroAi.svg" alt="icons"/> ${escape_html(content)}</span>`);
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

export { Arrow_right as A, Bottom as B, Starts as S, Tags as T };
//# sourceMappingURL=Starts-DCCTkG5T.js.map
