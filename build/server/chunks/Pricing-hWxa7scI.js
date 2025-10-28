import { e as ensure_array_like, a as attr_class, b as stringify, c as spread_props } from './index-CSxFwnw_.js';
import { B as Button, g as glass, I as Icon } from './Icon-DSSx7BZD.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

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
function isValidIndex(index, arr) {
  return index >= 0 && index < arr.length;
}
function next(array, index, loop = true) {
  if (array.length === 0 || index < 0 || index >= array.length)
    return;
  if (array.length === 1 && index === 0)
    return array[0];
  if (index === array.length - 1)
    return loop ? array[0] : void 0;
  return array[index + 1];
}
function prev(array, index, loop = true) {
  if (array.length === 0 || index < 0 || index >= array.length)
    return;
  if (array.length === 1 && index === 0)
    return array[0];
  if (index === 0)
    return loop ? array[array.length - 1] : void 0;
  return array[index - 1];
}
function forward(array, index, increment, loop = true) {
  if (array.length === 0 || index < 0 || index >= array.length)
    return;
  let targetIndex = index + increment;
  if (loop) {
    targetIndex = (targetIndex % array.length + array.length) % array.length;
  } else {
    targetIndex = Math.max(0, Math.min(targetIndex, array.length - 1));
  }
  return array[targetIndex];
}
function backward(array, index, decrement, loop = true) {
  if (array.length === 0 || index < 0 || index >= array.length)
    return;
  let targetIndex = index - decrement;
  if (loop) {
    targetIndex = (targetIndex % array.length + array.length) % array.length;
  } else {
    targetIndex = Math.max(0, Math.min(targetIndex, array.length - 1));
  }
  return array[targetIndex];
}
function getNextMatch(values, search, currentMatch) {
  const lowerSearch = search.toLowerCase();
  if (lowerSearch.endsWith(" ")) {
    const searchWithoutSpace = lowerSearch.slice(0, -1);
    const matchesWithoutSpace = values.filter((value) => value.toLowerCase().startsWith(searchWithoutSpace));
    if (matchesWithoutSpace.length <= 1) {
      return getNextMatch(values, searchWithoutSpace, currentMatch);
    }
    const currentMatchLowercase = currentMatch?.toLowerCase();
    if (currentMatchLowercase && currentMatchLowercase.startsWith(searchWithoutSpace) && currentMatchLowercase.charAt(searchWithoutSpace.length) === " " && search.trim() === searchWithoutSpace) {
      return currentMatch;
    }
    const spacedMatches = values.filter((value) => value.toLowerCase().startsWith(lowerSearch));
    if (spacedMatches.length > 0) {
      const currentMatchIndex2 = currentMatch ? values.indexOf(currentMatch) : -1;
      let wrappedMatches = wrapArray(spacedMatches, Math.max(currentMatchIndex2, 0));
      const nextMatch2 = wrappedMatches.find((match) => match !== currentMatch);
      return nextMatch2 || currentMatch;
    }
  }
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const normalizedLowerSearch = normalizedSearch.toLowerCase();
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find((value) => value?.toLowerCase().startsWith(normalizedLowerSearch));
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
function pricing($$renderer, title = "", description = "", price = "", list = [""]) {
  $$renderer.push(`<div${attr_class(`p-8 ${stringify(glass)} flex flex-col gap-4 items-start justify-start rounded-xl`)}><h6 class="font-medium">${escape_html(title)}</h6> <p class="text-gray-1">${escape_html(description)}</p> <div class="flex flex-row gap-0 p-0 items-center"><h3>${escape_html(price)}</h3> <p class="text-gray-1">/month</p></div> `);
  Button($$renderer, {
    class: `bg-[#0F100F]! w-full ${stringify(glass)}`,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Choose this plan`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <img src="/images/line.webp" class="p-8" alt=""/> <div class="flex flex-col gap-2"><!--[-->`);
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
  $$renderer.push(`<!----> <div class="p-8 rounded-xl flex flex-col gap-4 items-start justify-start bg-cover bg-[url(/images/pro.webp)] shadow-sm shadow-primarynp"><h6 class="font-medium">Pro</h6> <p class="text-gray-1">Full rack for production AI workloads</p> <div class="flex flex-row gap-0 p-0 items-center"><h3>$995</h3> <p class="text-gray-1">/month</p></div> `);
  Button($$renderer, {
    class: "bg-primary w-full",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Choose this plan`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <img src="/images/line.webp" class="p-8" alt=""/> <div class="flex flex-col gap-2"><!--[-->`);
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

export { Pricing as P, backward as b, forward as f, getNextMatch as g, isValidIndex as i, next as n, prev as p };
//# sourceMappingURL=Pricing-hWxa7scI.js.map
