import { s as spread_props, g as derived, p as props_id, h as attributes, j as bind_props, f as attr, T as attr_class, k as clsx, e as ensure_array_like, m as stringify, o as head } from "../../../chunks/index.js";
import { T as Tags, S as Starts, B as Bottom } from "../../../chunks/Starts.js";
import { I as Icon, c as cn, g as glass } from "../../../chunks/Icon.js";
import { m as run, e as escape_html } from "../../../chunks/context.js";
import { C as Context, a as attachRef, A as ARROW_LEFT, t as ARROW_RIGHT, u as ARROW_UP, v as ARROW_DOWN, H as HOME, x as END, w as watch, h as isElementOrSVGElement, c as createBitsAttrs, D as DOMContext, e as boolToEmptyStrOrUndef, d as boolToStr, q as createId, n as noop, b as boxWith, r as mergeProps } from "../../../chunks/create-id.js";
import { P as Pricing } from "../../../chunks/Pricing.js";
function Circle_alert($$renderer, $$props) {
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
      ["circle", { "cx": "12", "cy": "12", "r": "10" }],
      ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }],
      [
        "line",
        { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "circle-alert" },
      /**
       * @component @name CircleAlert
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjgiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMi4wMSIgeTE9IjE2IiB5Mj0iMTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/circle-alert
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
function Dot($$renderer, $$props) {
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
    const iconNode = [["circle", { "cx": "12.1", "cy": "12.1", "r": "1" }]];
    Icon($$renderer2, spread_props([
      { name: "dot" },
      /**
       * @component @name Dot
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMi4xIiBjeT0iMTIuMSIgcj0iMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/dot
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
function Plus($$renderer, $$props) {
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
    const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
    Icon($$renderer2, spread_props([
      { name: "plus" },
      /**
       * @component @name Plus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJNMTIgNXYxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/plus
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
function getRangeStyles(direction, min, max) {
  const styles = {
    position: "absolute"
  };
  if (direction === "lr") {
    styles.left = `${min}%`;
    styles.right = `${max}%`;
  } else if (direction === "rl") {
    styles.right = `${min}%`;
    styles.left = `${max}%`;
  } else if (direction === "bt") {
    styles.bottom = `${min}%`;
    styles.top = `${max}%`;
  } else {
    styles.top = `${min}%`;
    styles.bottom = `${max}%`;
  }
  return styles;
}
function getThumbStyles(direction, thumbPos) {
  const styles = {
    position: "absolute"
  };
  if (direction === "lr") {
    styles.left = `${thumbPos}%`;
    styles.translate = "-50% 0";
  } else if (direction === "rl") {
    styles.right = `${thumbPos}%`;
    styles.translate = "50% 0";
  } else if (direction === "bt") {
    styles.bottom = `${thumbPos}%`;
    styles.translate = "0 50%";
  } else {
    styles.top = `${thumbPos}%`;
    styles.translate = "0 -50%";
  }
  return styles;
}
function getTickStyles(direction, tickPosition, offsetPercentage) {
  const style = {
    position: "absolute"
  };
  if (direction === "lr") {
    style.left = `${tickPosition}%`;
    style.translate = `${offsetPercentage}% 0`;
  } else if (direction === "rl") {
    style.right = `${tickPosition}%`;
    style.translate = `${-offsetPercentage}% 0`;
  } else if (direction === "bt") {
    style.bottom = `${tickPosition}%`;
    style.translate = `0 ${-offsetPercentage}%`;
  } else {
    style.top = `${tickPosition}%`;
    style.translate = `0 ${offsetPercentage}%`;
  }
  return style;
}
function getDecimalPlaces(num) {
  if (Math.floor(num) === num)
    return 0;
  const str = num.toString();
  if (str.indexOf(".") !== -1 && str.indexOf("e-") === -1) {
    return str.split(".")[1].length;
  } else if (str.indexOf("e-") !== -1) {
    const parts = str.split("e-");
    return parseInt(parts[1], 10);
  }
  return 0;
}
function roundToPrecision(num, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
}
function normalizeSteps(step, min, max) {
  if (typeof step === "number") {
    const difference = max - min;
    let count = Math.ceil(difference / step);
    const precision = getDecimalPlaces(step);
    const factor = Math.pow(10, precision);
    const intDifference = Math.round(difference * factor);
    const intStep = Math.round(step * factor);
    if (intDifference % intStep === 0) {
      count++;
    }
    const steps = [];
    for (let i = 0; i < count; i++) {
      const value = min + i * step;
      const roundedValue = roundToPrecision(value, precision);
      steps.push(roundedValue);
    }
    return steps;
  }
  return [...new Set(step)].filter((value) => value >= min && value <= max).sort((a, b) => a - b);
}
function snapValueToCustomSteps(value, steps) {
  if (steps.length === 0)
    return value;
  let closest = steps[0];
  let minDistance = Math.abs(value - closest);
  for (const step of steps) {
    const distance = Math.abs(value - step);
    if (distance < minDistance) {
      minDistance = distance;
      closest = step;
    }
  }
  return closest;
}
function getAdjacentStepValue(currentValue, steps, direction) {
  const currentIndex = steps.indexOf(currentValue);
  if (currentIndex === -1) {
    return snapValueToCustomSteps(currentValue, steps);
  }
  if (direction === "next") {
    return currentIndex < steps.length - 1 ? steps[currentIndex + 1] : currentValue;
  } else {
    return currentIndex > 0 ? steps[currentIndex - 1] : currentValue;
  }
}
function linearScale(domain, range, clamp = true) {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const slope = (r1 - r0) / (d1 - d0);
  return (x) => {
    const result = r0 + slope * (x - d0);
    if (!clamp)
      return result;
    if (result > Math.max(r0, r1))
      return Math.max(r0, r1);
    if (result < Math.min(r0, r1))
      return Math.min(r0, r1);
    return result;
  };
}
const sliderAttrs = createBitsAttrs({
  component: "slider",
  parts: [
    "root",
    "thumb",
    "range",
    "tick",
    "tick-label",
    "thumb-label"
  ]
});
const SliderRootContext = new Context("Slider.Root");
class SliderBaseRootState {
  opts;
  attachment;
  isActive = false;
  #direction = derived(() => {
    if (this.opts.orientation.current === "horizontal") {
      return this.opts.dir.current === "rtl" ? "rl" : "lr";
    } else {
      return this.opts.dir.current === "rtl" ? "tb" : "bt";
    }
  });
  get direction() {
    return this.#direction();
  }
  set direction($$value) {
    return this.#direction($$value);
  }
  #normalizedSteps = derived(() => {
    return normalizeSteps(this.opts.step.current, this.opts.min.current, this.opts.max.current);
  });
  get normalizedSteps() {
    return this.#normalizedSteps();
  }
  set normalizedSteps($$value) {
    return this.#normalizedSteps($$value);
  }
  domContext;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(opts.ref);
    this.domContext = new DOMContext(this.opts.ref);
  }
  isThumbActive(_index) {
    return this.isActive;
  }
  #touchAction = derived(() => {
    if (this.opts.disabled.current) return void 0;
    return this.opts.orientation.current === "horizontal" ? "pan-y" : "pan-x";
  });
  getAllThumbs = () => {
    const node = this.opts.ref.current;
    if (!node) return [];
    return Array.from(node.querySelectorAll(sliderAttrs.selector("thumb")));
  };
  getThumbScale = () => {
    const trackPadding = this.opts.trackPadding?.current;
    if (trackPadding !== void 0 && trackPadding > 0) {
      return [trackPadding, 100 - trackPadding];
    }
    if (this.opts.thumbPositioning.current === "exact") {
      return [0, 100];
    }
    const isVertical = this.opts.orientation.current === "vertical";
    const activeThumb = this.getAllThumbs()[0];
    const thumbSize = isVertical ? activeThumb?.offsetHeight : activeThumb?.offsetWidth;
    if (thumbSize === void 0 || Number.isNaN(thumbSize) || thumbSize === 0) return [0, 100];
    const trackSize = isVertical ? this.opts.ref.current?.offsetHeight : this.opts.ref.current?.offsetWidth;
    if (trackSize === void 0 || Number.isNaN(trackSize) || trackSize === 0) return [0, 100];
    const percentPadding = thumbSize / 2 / trackSize * 100;
    const min = percentPadding;
    const max = 100 - percentPadding;
    return [min, max];
  };
  getPositionFromValue = (thumbValue) => {
    const thumbScale = this.getThumbScale();
    const scale = linearScale([this.opts.min.current, this.opts.max.current], thumbScale);
    return scale(thumbValue);
  };
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-orientation": this.opts.orientation.current,
    "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
    style: { touchAction: this.#touchAction() },
    [sliderAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SliderSingleRootState extends SliderBaseRootState {
  opts;
  isMulti = false;
  constructor(opts) {
    super(opts);
    this.opts = opts;
    watch(
      [
        () => this.opts.step.current,
        () => this.opts.min.current,
        () => this.opts.max.current,
        () => this.opts.value.current
      ],
      ([step, min, max, value]) => {
        const steps = normalizeSteps(step, min, max);
        const isValidValue = (v) => {
          return steps.includes(v);
        };
        const gcv = (v) => {
          return snapValueToCustomSteps(v, steps);
        };
        if (!isValidValue(value)) {
          this.opts.value.current = gcv(value);
        }
      }
    );
  }
  isTickValueSelected = (tickValue) => {
    return this.opts.value.current === tickValue;
  };
  applyPosition({ clientXY, start, end }) {
    const min = this.opts.min.current;
    const max = this.opts.max.current;
    const percent = (clientXY - start) / (end - start);
    const val = percent * (max - min) + min;
    if (val < min) {
      this.updateValue(min);
    } else if (val > max) {
      this.updateValue(max);
    } else {
      const steps = this.normalizedSteps;
      const newValue = snapValueToCustomSteps(val, steps);
      this.updateValue(newValue);
    }
  }
  updateValue = (newValue) => {
    this.opts.value.current = snapValueToCustomSteps(newValue, this.normalizedSteps);
  };
  handlePointerMove = (e) => {
    if (!this.isActive || this.opts.disabled.current) return;
    e.preventDefault();
    e.stopPropagation();
    const sliderNode = this.opts.ref.current;
    const activeThumb = this.getAllThumbs()[0];
    if (!sliderNode || !activeThumb) return;
    activeThumb.focus();
    const { left, right, top, bottom } = sliderNode.getBoundingClientRect();
    if (this.direction === "lr") {
      this.applyPosition({ clientXY: e.clientX, start: left, end: right });
    } else if (this.direction === "rl") {
      this.applyPosition({ clientXY: e.clientX, start: right, end: left });
    } else if (this.direction === "bt") {
      this.applyPosition({ clientXY: e.clientY, start: bottom, end: top });
    } else if (this.direction === "tb") {
      this.applyPosition({ clientXY: e.clientY, start: top, end: bottom });
    }
  };
  handlePointerDown = (e) => {
    if (e.button !== 0 || this.opts.disabled.current) return;
    const sliderNode = this.opts.ref.current;
    const closestThumb = this.getAllThumbs()[0];
    if (!closestThumb || !sliderNode) return;
    const target = e.composedPath()[0] ?? e.target;
    if (!isElementOrSVGElement(target) || !sliderNode.contains(target)) return;
    e.preventDefault();
    closestThumb.focus();
    this.isActive = true;
    this.handlePointerMove(e);
  };
  handlePointerUp = () => {
    if (this.opts.disabled.current) return;
    if (this.isActive) {
      this.opts.onValueCommit.current(run(() => this.opts.value.current));
    }
    this.isActive = false;
  };
  #thumbsPropsArr = derived(() => {
    const currValue = this.opts.value.current;
    return Array.from({ length: 1 }, () => {
      const thumbValue = currValue;
      const thumbPosition = this.getPositionFromValue(thumbValue);
      const style = getThumbStyles(this.direction, thumbPosition);
      return {
        role: "slider",
        "aria-valuemin": this.opts.min.current,
        "aria-valuemax": this.opts.max.current,
        "aria-valuenow": thumbValue,
        "aria-disabled": boolToStr(this.opts.disabled.current),
        "aria-orientation": this.opts.orientation.current,
        "data-value": thumbValue,
        "data-orientation": this.opts.orientation.current,
        style,
        [sliderAttrs.thumb]: ""
      };
    });
  });
  get thumbsPropsArr() {
    return this.#thumbsPropsArr();
  }
  set thumbsPropsArr($$value) {
    return this.#thumbsPropsArr($$value);
  }
  #thumbsRenderArr = derived(() => {
    return this.thumbsPropsArr.map((_, i) => i);
  });
  get thumbsRenderArr() {
    return this.#thumbsRenderArr();
  }
  set thumbsRenderArr($$value) {
    return this.#thumbsRenderArr($$value);
  }
  #ticksPropsArr = derived(() => {
    const steps = this.normalizedSteps;
    const currValue = this.opts.value.current;
    return steps.map((tickValue, i) => {
      const tickPosition = this.getPositionFromValue(tickValue);
      const isFirst = i === 0;
      const isLast = i === steps.length - 1;
      const offsetPercentage = isFirst ? 0 : isLast ? -100 : -50;
      const style = getTickStyles(this.direction, tickPosition, offsetPercentage);
      const bounded = tickValue <= currValue;
      return {
        "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
        "data-orientation": this.opts.orientation.current,
        "data-bounded": bounded ? "" : void 0,
        "data-value": tickValue,
        "data-selected": this.isTickValueSelected(tickValue) ? "" : void 0,
        style,
        [sliderAttrs.tick]: ""
      };
    });
  });
  get ticksPropsArr() {
    return this.#ticksPropsArr();
  }
  set ticksPropsArr($$value) {
    return this.#ticksPropsArr($$value);
  }
  #ticksRenderArr = derived(() => {
    return this.ticksPropsArr.map((_, i) => i);
  });
  get ticksRenderArr() {
    return this.#ticksRenderArr();
  }
  set ticksRenderArr($$value) {
    return this.#ticksRenderArr($$value);
  }
  #tickItemsArr = derived(() => {
    return this.ticksPropsArr.map((tick, i) => ({ value: tick["data-value"], index: i }));
  });
  get tickItemsArr() {
    return this.#tickItemsArr();
  }
  set tickItemsArr($$value) {
    return this.#tickItemsArr($$value);
  }
  #thumbItemsArr = derived(() => {
    const currValue = this.opts.value.current;
    return [{ value: currValue, index: 0 }];
  });
  get thumbItemsArr() {
    return this.#thumbItemsArr();
  }
  set thumbItemsArr($$value) {
    return this.#thumbItemsArr($$value);
  }
  #snippetProps = derived(() => ({
    ticks: this.ticksRenderArr,
    thumbs: this.thumbsRenderArr,
    tickItems: this.tickItemsArr,
    thumbItems: this.thumbItemsArr
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
}
class SliderMultiRootState extends SliderBaseRootState {
  opts;
  isMulti = true;
  activeThumb = null;
  currentThumbIdx = 0;
  constructor(opts) {
    super(opts);
    this.opts = opts;
    watch(
      [
        () => this.opts.step.current,
        () => this.opts.min.current,
        () => this.opts.max.current,
        () => this.opts.value.current
      ],
      ([step, min, max, value]) => {
        const steps = normalizeSteps(step, min, max);
        const isValidValue = (v) => {
          return steps.includes(v);
        };
        const gcv = (v) => {
          return snapValueToCustomSteps(v, steps);
        };
        if (value.some((v) => !isValidValue(v))) {
          this.opts.value.current = value.map(gcv);
        }
      }
    );
  }
  isTickValueSelected = (tickValue) => {
    return this.opts.value.current.includes(tickValue);
  };
  isThumbActive(index) {
    return this.isActive && this.activeThumb?.idx === index;
  }
  applyPosition({ clientXY, activeThumbIdx, start, end }) {
    const min = this.opts.min.current;
    const max = this.opts.max.current;
    const percent = (clientXY - start) / (end - start);
    const val = percent * (max - min) + min;
    if (val < min) {
      this.updateValue(min, activeThumbIdx);
    } else if (val > max) {
      this.updateValue(max, activeThumbIdx);
    } else {
      const steps = this.normalizedSteps;
      const newValue = snapValueToCustomSteps(val, steps);
      this.updateValue(newValue, activeThumbIdx);
    }
  }
  #getClosestThumb = (e) => {
    const thumbs = this.getAllThumbs();
    if (!thumbs.length) return;
    for (const thumb of thumbs) {
      thumb.blur();
    }
    const distances = thumbs.map((thumb) => {
      if (this.opts.orientation.current === "horizontal") {
        const { left, right } = thumb.getBoundingClientRect();
        return Math.abs(e.clientX - (left + right) / 2);
      } else {
        const { top, bottom } = thumb.getBoundingClientRect();
        return Math.abs(e.clientY - (top + bottom) / 2);
      }
    });
    const node = thumbs[distances.indexOf(Math.min(...distances))];
    const idx = thumbs.indexOf(node);
    return { node, idx };
  };
  handlePointerMove = (e) => {
    if (!this.isActive || this.opts.disabled.current) return;
    e.preventDefault();
    e.stopPropagation();
    const sliderNode = this.opts.ref.current;
    const activeThumb = this.activeThumb;
    if (!sliderNode || !activeThumb) return;
    activeThumb.node.focus();
    const { left, right, top, bottom } = sliderNode.getBoundingClientRect();
    const direction = this.direction;
    if (direction === "lr") {
      this.applyPosition({
        clientXY: e.clientX,
        activeThumbIdx: activeThumb.idx,
        start: left,
        end: right
      });
    } else if (direction === "rl") {
      this.applyPosition({
        clientXY: e.clientX,
        activeThumbIdx: activeThumb.idx,
        start: right,
        end: left
      });
    } else if (direction === "bt") {
      this.applyPosition({
        clientXY: e.clientY,
        activeThumbIdx: activeThumb.idx,
        start: bottom,
        end: top
      });
    } else if (direction === "tb") {
      this.applyPosition({
        clientXY: e.clientY,
        activeThumbIdx: activeThumb.idx,
        start: top,
        end: bottom
      });
    }
  };
  handlePointerDown = (e) => {
    if (e.button !== 0 || this.opts.disabled.current) return;
    const sliderNode = this.opts.ref.current;
    const closestThumb = this.#getClosestThumb(e);
    if (!closestThumb || !sliderNode) return;
    const target = e.composedPath()[0] ?? e.target;
    if (!isElementOrSVGElement(target) || !sliderNode.contains(target)) return;
    e.preventDefault();
    this.activeThumb = closestThumb;
    closestThumb.node.focus();
    this.isActive = true;
    this.handlePointerMove(e);
  };
  handlePointerUp = () => {
    if (this.opts.disabled.current) return;
    if (this.isActive) {
      this.opts.onValueCommit.current(run(() => this.opts.value.current));
    }
    this.isActive = false;
  };
  getAllThumbs = () => {
    const node = this.opts.ref.current;
    if (!node) return [];
    const thumbs = Array.from(node.querySelectorAll(sliderAttrs.selector("thumb")));
    return thumbs;
  };
  updateValue = (thumbValue, idx) => {
    const currValue = this.opts.value.current;
    if (!currValue.length) {
      this.opts.value.current.push(thumbValue);
      return;
    }
    const valueAtIndex = currValue[idx];
    if (valueAtIndex === thumbValue) return;
    const newValue = [...currValue];
    if (!isValidIndex(idx, newValue)) return;
    const direction = newValue[idx] > thumbValue ? -1 : 1;
    const swap = () => {
      const diffIndex = idx + direction;
      newValue[idx] = newValue[diffIndex];
      newValue[diffIndex] = thumbValue;
      const thumbs = this.getAllThumbs();
      if (!thumbs.length) return;
      thumbs[diffIndex]?.focus();
      this.activeThumb = { node: thumbs[diffIndex], idx: diffIndex };
    };
    if (this.opts.autoSort.current && (direction === -1 && thumbValue < newValue[idx - 1] || direction === 1 && thumbValue > newValue[idx + 1])) {
      swap();
      this.opts.value.current = newValue;
      return;
    }
    const steps = this.normalizedSteps;
    newValue[idx] = snapValueToCustomSteps(thumbValue, steps);
    this.opts.value.current = newValue;
  };
  #thumbsPropsArr = derived(() => {
    const currValue = this.opts.value.current;
    return Array.from({ length: currValue.length || 1 }, (_, i) => {
      const currThumb = run(() => this.currentThumbIdx);
      if (currThumb < currValue.length) {
        run(() => {
          this.currentThumbIdx = currThumb + 1;
        });
      }
      const thumbValue = currValue[i];
      const thumbPosition = this.getPositionFromValue(thumbValue ?? 0);
      const style = getThumbStyles(this.direction, thumbPosition);
      return {
        role: "slider",
        "aria-valuemin": this.opts.min.current,
        "aria-valuemax": this.opts.max.current,
        "aria-valuenow": thumbValue,
        "aria-disabled": boolToStr(this.opts.disabled.current),
        "aria-orientation": this.opts.orientation.current,
        "data-value": thumbValue,
        "data-orientation": this.opts.orientation.current,
        style,
        [sliderAttrs.thumb]: ""
      };
    });
  });
  get thumbsPropsArr() {
    return this.#thumbsPropsArr();
  }
  set thumbsPropsArr($$value) {
    return this.#thumbsPropsArr($$value);
  }
  #thumbsRenderArr = derived(() => {
    return this.thumbsPropsArr.map((_, i) => i);
  });
  get thumbsRenderArr() {
    return this.#thumbsRenderArr();
  }
  set thumbsRenderArr($$value) {
    return this.#thumbsRenderArr($$value);
  }
  #ticksPropsArr = derived(() => {
    const steps = this.normalizedSteps;
    const currValue = this.opts.value.current;
    return steps.map((tickValue, i) => {
      const tickPosition = this.getPositionFromValue(tickValue);
      const isFirst = i === 0;
      const isLast = i === steps.length - 1;
      const offsetPercentage = isFirst ? 0 : isLast ? -100 : -50;
      const style = getTickStyles(this.direction, tickPosition, offsetPercentage);
      const bounded = currValue.length === 1 ? tickValue <= currValue[0] : currValue[0] <= tickValue && tickValue <= currValue[currValue.length - 1];
      return {
        "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
        "data-orientation": this.opts.orientation.current,
        "data-bounded": bounded ? "" : void 0,
        "data-value": tickValue,
        style,
        [sliderAttrs.tick]: ""
      };
    });
  });
  get ticksPropsArr() {
    return this.#ticksPropsArr();
  }
  set ticksPropsArr($$value) {
    return this.#ticksPropsArr($$value);
  }
  #ticksRenderArr = derived(() => {
    return this.ticksPropsArr.map((_, i) => i);
  });
  get ticksRenderArr() {
    return this.#ticksRenderArr();
  }
  set ticksRenderArr($$value) {
    return this.#ticksRenderArr($$value);
  }
  #tickItemsArr = derived(() => {
    return this.ticksPropsArr.map((tick, i) => ({ value: tick["data-value"], index: i }));
  });
  get tickItemsArr() {
    return this.#tickItemsArr();
  }
  set tickItemsArr($$value) {
    return this.#tickItemsArr($$value);
  }
  #thumbItemsArr = derived(() => {
    const currValue = this.opts.value.current;
    return currValue.map((value, index) => ({ value, index }));
  });
  get thumbItemsArr() {
    return this.#thumbItemsArr();
  }
  set thumbItemsArr($$value) {
    return this.#thumbItemsArr($$value);
  }
  #snippetProps = derived(() => ({
    ticks: this.ticksRenderArr,
    thumbs: this.thumbsRenderArr,
    tickItems: this.tickItemsArr,
    thumbItems: this.thumbItemsArr
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
}
class SliderRootState {
  static create(opts) {
    const { type, ...rest } = opts;
    const rootState = type === "single" ? new SliderSingleRootState(rest) : new SliderMultiRootState(rest);
    return SliderRootContext.set(rootState);
  }
}
const VALID_SLIDER_KEYS = [
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  ARROW_DOWN,
  HOME,
  END
];
class SliderRangeState {
  static create(opts) {
    return new SliderRangeState(opts, SliderRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
  }
  #rangeStyles = derived(() => {
    if (Array.isArray(this.root.opts.value.current)) {
      const min = this.root.opts.value.current.length > 1 ? this.root.getPositionFromValue(Math.min(...this.root.opts.value.current) ?? 0) : 0;
      const max = 100 - this.root.getPositionFromValue(Math.max(...this.root.opts.value.current) ?? 0);
      return {
        position: "absolute",
        ...getRangeStyles(this.root.direction, min, max)
      };
    } else {
      const trackPadding = this.root.opts.trackPadding?.current;
      const currentValue = this.root.opts.value.current;
      const maxValue = this.root.opts.max.current;
      const min = 0;
      const max = trackPadding !== void 0 && trackPadding > 0 && currentValue === maxValue ? 0 : (
        // 100% - 0% = full width
        100 - this.root.getPositionFromValue(currentValue)
      );
      return {
        position: "absolute",
        ...getRangeStyles(this.root.direction, min, max)
      };
    }
  });
  get rangeStyles() {
    return this.#rangeStyles();
  }
  set rangeStyles($$value) {
    return this.#rangeStyles($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-orientation": this.root.opts.orientation.current,
    "data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
    style: this.rangeStyles,
    [sliderAttrs.range]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SliderThumbState {
  static create(opts) {
    return new SliderThumbState(opts, SliderRootContext.get());
  }
  opts;
  root;
  attachment;
  #isDisabled = derived(() => this.root.opts.disabled.current || this.opts.disabled.current);
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
    this.onkeydown = this.onkeydown.bind(this);
  }
  #updateValue(newValue) {
    if (this.root.isMulti) {
      this.root.updateValue(newValue, this.opts.index.current);
    } else {
      this.root.updateValue(newValue);
    }
  }
  onkeydown(e) {
    if (this.#isDisabled()) return;
    const currNode = this.opts.ref.current;
    if (!currNode) return;
    const thumbs = this.root.getAllThumbs();
    if (!thumbs.length) return;
    const idx = thumbs.indexOf(currNode);
    if (this.root.isMulti) {
      this.root.currentThumbIdx = idx;
    }
    if (!VALID_SLIDER_KEYS.includes(e.key)) return;
    e.preventDefault();
    const min = this.root.opts.min.current;
    const max = this.root.opts.max.current;
    const value = this.root.opts.value.current;
    const thumbValue = Array.isArray(value) ? value[idx] : value;
    const orientation = this.root.opts.orientation.current;
    const direction = this.root.direction;
    const steps = this.root.normalizedSteps;
    switch (e.key) {
      case HOME:
        this.#updateValue(min);
        break;
      case END:
        this.#updateValue(max);
        break;
      case ARROW_LEFT:
        if (orientation !== "horizontal") break;
        if (e.metaKey) {
          const newValue = direction === "rl" ? max : min;
          this.#updateValue(newValue);
        } else {
          const stepDirection = direction === "rl" ? "next" : "prev";
          const newValue = getAdjacentStepValue(thumbValue, steps, stepDirection);
          this.#updateValue(newValue);
        }
        break;
      case ARROW_RIGHT:
        if (orientation !== "horizontal") break;
        if (e.metaKey) {
          const newValue = direction === "rl" ? min : max;
          this.#updateValue(newValue);
        } else {
          const stepDirection = direction === "rl" ? "prev" : "next";
          const newValue = getAdjacentStepValue(thumbValue, steps, stepDirection);
          this.#updateValue(newValue);
        }
        break;
      case ARROW_UP:
        if (e.metaKey) {
          const newValue = direction === "tb" ? min : max;
          this.#updateValue(newValue);
        } else {
          const stepDirection = direction === "tb" ? "prev" : "next";
          const newValue = getAdjacentStepValue(thumbValue, steps, stepDirection);
          this.#updateValue(newValue);
        }
        break;
      case ARROW_DOWN:
        if (e.metaKey) {
          const newValue = direction === "tb" ? max : min;
          this.#updateValue(newValue);
        } else {
          const stepDirection = direction === "tb" ? "next" : "prev";
          const newValue = getAdjacentStepValue(thumbValue, steps, stepDirection);
          this.#updateValue(newValue);
        }
        break;
    }
    this.root.opts.onValueCommit.current(this.root.opts.value.current);
  }
  #props = derived(() => ({
    ...this.root.thumbsPropsArr[this.opts.index.current],
    id: this.opts.id.current,
    onkeydown: this.onkeydown,
    "data-active": this.root.isThumbActive(this.opts.index.current) ? "" : void 0,
    "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current || this.root.opts.disabled.current),
    tabindex: this.opts.disabled.current || this.root.opts.disabled.current ? -1 : 0,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Slider$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      id = createId(uid),
      ref = null,
      value = void 0,
      type,
      onValueChange = noop,
      onValueCommit = noop,
      disabled = false,
      min: minProp,
      max: maxProp,
      step = 1,
      dir = "ltr",
      autoSort = true,
      orientation = "horizontal",
      thumbPositioning = "contain",
      trackPadding,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const min = (() => {
      if (minProp !== void 0) return minProp;
      if (Array.isArray(step)) return Math.min(...step);
      return 0;
    })();
    const max = (() => {
      if (maxProp !== void 0) return maxProp;
      if (Array.isArray(step)) return Math.max(...step);
      return 100;
    })();
    watch.pre(() => value, () => {
    });
    const rootState = SliderRootState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      value: boxWith(() => value, (v) => {
        value = v;
        onValueChange(v);
      }),
      // @ts-expect-error - we know
      onValueCommit: boxWith(() => onValueCommit),
      disabled: boxWith(() => disabled),
      min: boxWith(() => min),
      max: boxWith(() => max),
      step: boxWith(() => step),
      dir: boxWith(() => dir),
      autoSort: boxWith(() => autoSort),
      orientation: boxWith(() => orientation),
      thumbPositioning: boxWith(() => thumbPositioning),
      type,
      trackPadding: boxWith(() => trackPadding)
    });
    const mergedProps = mergeProps(restProps, rootState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps, ...rootState.snippetProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<span${attributes({ ...mergedProps })}>`);
      children?.($$renderer2, rootState.snippetProps);
      $$renderer2.push(`<!----></span>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref, value });
  });
}
function Slider_range($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      ref = null,
      id = createId(uid),
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rangeState = SliderRangeState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, rangeState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<span${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></span>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Slider_thumb($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      ref = null,
      id = createId(uid),
      index,
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const thumbState = SliderThumbState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      index: boxWith(() => index),
      disabled: boxWith(() => disabled)
    });
    const mergedProps = mergeProps(restProps, thumbState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, {
        active: thumbState.root.isThumbActive(thumbState.opts.index.current),
        props: mergedProps
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<span${attributes({ ...mergedProps })}>`);
      children?.($$renderer2, {
        active: thumbState.root.isThumbActive(thumbState.opts.index.current)
      });
      $$renderer2.push(`<!----></span>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Slider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      value = void 0,
      orientation = "horizontal",
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      {
        let children = function($$renderer4, { thumbs }) {
          $$renderer4.push(`<span${attr("data-orientation", orientation)} data-slot="slider-track"${attr_class(clsx(cn("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1.5")))}><!---->`);
          Slider_range($$renderer4, {
            "data-slot": "slider-range",
            class: cn("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
          });
          $$renderer4.push(`<!----></span> <!--[-->`);
          const each_array = ensure_array_like(thumbs);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let thumb = each_array[$$index];
            $$renderer4.push(`<!---->`);
            Slider_thumb($$renderer4, {
              "data-slot": "slider-thumb",
              index: thumb,
              class: "border-primary bg-background ring-ring/50 focus-visible:outline-hidden block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
            });
            $$renderer4.push(`<!---->`);
          }
          $$renderer4.push(`<!--]-->`);
        };
        Slider$1($$renderer3, spread_props([
          {
            "data-slot": "slider",
            orientation,
            class: cn("relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50", className)
          },
          restProps,
          {
            get ref() {
              return ref;
            },
            set ref($$value) {
              ref = $$value;
              $$settled = false;
            },
            get value() {
              return value;
            },
            set value($$value) {
              value = $$value;
              $$settled = false;
            },
            children,
            $$slots: { default: true }
          }
        ]));
      }
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref, value });
  });
}
function Calculator($$renderer) {
  let value = 4;
  let gpus = [
    { name: "RTX 4090", size: 24, hr: 50 },
    { name: "A10", size: 24, hr: 70 },
    { name: "A100", size: 40, hr: 150 },
    { name: "A100", size: 80, hr: 200 },
    { name: "H100", size: 80, hr: 300 }
  ];
  let index = 0;
  let name = gpus[index].name;
  let mul = value * gpus[index].hr * 0.1;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<section class="grid lg:grid-cols-2 grid-cols-1 gap-6 w-full"><div${attr_class(`${stringify(glass)} p-4 flex flex-col gap-6 rounded-lg`)}><h6>Cost Calculator</h6> <div class="grid lg:grid-cols-3 grid-cols-2 gap-2 rounded-lg"><!--[-->`);
    const each_array = ensure_array_like(gpus);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let gpu = each_array[i];
      $$renderer2.push(`<button${attr_class(`flex flex-col gap-2 ${stringify(glass)} hover:bg-primary ${stringify(index === i ? "bg-primary!" : "")} rounded-lg p-4 justify-start items-start`)}><span class="text-[14px]">${escape_html(gpu.name)} ${escape_html(i)}</span> <div class="flex flex-row text-[12px] justify-center items-center"><span>${escape_html(gpu.size)}GB</span> `);
      Dot($$renderer2, { class: "w-6 h-6" });
      $$renderer2.push(`<!----> <span>${escape_html(gpu.hr)}cr.hr</span></div></button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="flex flex-col gap-4"><p class="font-medium">Usage Hours</p> <div class="flex flex-row gap-2">`);
    Slider($$renderer2, {
      type: "single",
      max: 100,
      step: 1,
      get value() {
        return value;
      },
      set value($$value) {
        value = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----> <p>${escape_html(value)}hr</p></div> <div class="text-gray-1 flex flex-row justify-between"><p>1hour</p> <p>100hour</p></div></div> <div${attr_class(`${stringify(glass)} p-6 flex flex-col gap-6 rounded-lg`)}><div class="flex flex-col rounded-lg gap-6"><div class="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-6"><div class="flex flex-col gap-2"><p class="text-gray-1">Estimated Cost</p> <h3>$${escape_html(mul)}</h3> <p class="text-gray-1">500 credits</p></div> <div class="flex flex-col gap-1 lg:items-center items-start"><p class="text-gray-1">Recommended Package</p> <h3 class="text-transparent bg-clip-text bg-linear-to-r from-primary to-green-2">Starter</h3> <p class="text-gray-1 flex flex-row gap-0 font-medium justify-center">$${escape_html(mul)}`);
    Dot($$renderer2, {});
    $$renderer2.push(`<!---->500 Credits</p></div></div> <img src="/images/line.png" alt=""/> <p class="text-gray-1 lg:text-start text-center flex lg:flex-row flex-col lg:items-start justify-center items-center gap-2">`);
    Circle_alert($$renderer2, { class: "text-[#D97706]" });
    $$renderer2.push(`<!----> 18 hours on ${escape_html(name)} = 2,700 credits. You'll have 7,300 credits remaining.</p></div></div></div> <div${attr_class(`p-4 ${stringify(glass)} rounded-lg gap-2`)}><div class="w-full"><div class="p-[1px] rounded-lg bg-gradient-to-r from-primary/10 via-green-1/10 to-white mb-4"><div class="grid grid-cols-3 border-1 border-primary shadow-sm shadow-primary rounded-lg bg-[#171C1A] text-white font-semibold p-4"><div class="text-left">GPU Type</div> <div class="text-center">VRAM</div> <div class="text-right">Approx. Cost</div></div></div> <!--[-->`);
    const each_array_1 = ensure_array_like(gpus);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let gpu = each_array_1[$$index_1];
      $$renderer2.push(`<div class="grid grid-cols-3 p-4 bg-[#171C1A] backdrop-blur-lg rounded-lg mt-2"><div class="text-left font-medium">${escape_html(gpu.name)}</div> <div class="text-center">${escape_html(gpu.size)}GB</div> <div class="text-right text-primary text-sm">${escape_html(gpu.hr)} credits/hr</div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
function Accordion($$renderer, $$props) {
  let { title } = $$props;
  $$renderer.push(`<div${attr_class(`flex flex-col w-full lg:justify-self-center gap-2 px-6 py-8 rounded-lg ${stringify(glass)} transition-all duration-300 ease-in-out`)}><button class="flex flex-row justify-between lg:items-center"><span class="lg:text-[16px] text-[14px]">${escape_html(title)}</span> `);
  Plus($$renderer, {
    class: `h-6 w-6 ${stringify("")} transition-transform duration-600`
  });
  $$renderer.push(`<!----></button> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
function FAQ($$renderer) {
  let faq = [
    {
      title: "How do credits work?",
      description: "Credits are used to access premium features. You purchase or receive credits with plans or promotions, and each action deducts a set amount. Check your dashboard for your current balance and usage history."
    },
    {
      title: "Do credits expire",
      description: "Credits may expire after a specified period from the date of purchase—check your billing or promotions page for exact expiry terms. Promotional credits can have different rules."
    },
    {
      title: "Can I get a refund?",
      description: "Refund eligibility depends on the purchase type and local laws. Unused credits may be refundable in certain cases—contact support with your order details to request a review."
    },
    {
      title: "What happens when I run out of credits?",
      description: "When you run out of credits, credit-based features will be disabled until you top up. The app will prompt you to purchase more; some features may offer limited free usage or trials."
    },
    {
      title: "Is there a monthly subscription?",
      description: "We offer subscription plans that include recurring credits and additional benefits. You can view, change, or cancel subscriptions anytime in your billing settings."
    }
  ];
  $$renderer.push(`<div class="w-full flex flex-col gap-4 justify-start items-start">`);
  Tags($$renderer, { content: "FAQ" });
  $$renderer.push(`<!----> <h2 class="!font-normal">Frequently Asked Questions</h2> <div class="w-full p-0 flex flex-col gap-4"><!--[-->`);
  const each_array = ensure_array_like(faq);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let faq2 = each_array[$$index];
    Accordion($$renderer, { title: faq2.title, description: faq2.description });
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function _page($$renderer) {
  let btns = false;
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Pricing</title>`);
    });
    $$renderer2.push(`<meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/> <meta name="description" content="Syaala LLC — Enterprise-grade AI infrastructure and colocation. Deploy models in under 60 seconds, scale securely, and get enterprise support for mission-critical AI workloads."/> <link rel="canonical" href="/pricing"/> <meta property="og:type" content="website"/> <meta property="og:title" content="Syaala LLC, AI Infrastructure &amp; Colocation"/> <meta property="og:description" content="Deploy and scale AI workloads with Syaala: fast model deployment, secure infrastructure, and enterprise support."/> <meta property="og:image" content="/images/server.png"/> <meta property="og:image:alt" content="Syaala, AI infrastructure and colocation"/> <meta property="og:url" content="/pricing"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Syaala LLC — AI Infrastructure &amp; Colocation"/> <meta name="twitter:description" content="Deploy and scale AI workloads with Syaala: fast model deployment, secure infrastructure, and enterprise support."/> <meta name="twitter:image" content="/images/server.png"/> <meta name="theme-color" content="#000000"/>`);
  });
  $$renderer.push(`<section class="flex flex-col gap-16 items-center justify-center px-[7%] pb-8 lg:pt-32 pt-8 relative"><div class="w-full">`);
  Starts($$renderer, {
    title: "Simple, Transparent Pricing",
    content: "Pricing",
    para: "Choose the plan that fits your AI workload  pay per GPU, rack, \r\nor per request, with no hidden costs.",
    btn: btns,
    btnName: "",
    href: ""
  });
  $$renderer.push(`<!----></div> `);
  Pricing($$renderer);
  $$renderer.push(`<!----> `);
  Calculator($$renderer);
  $$renderer.push(`<!----> `);
  FAQ($$renderer);
  $$renderer.push(`<!----> `);
  Bottom($$renderer, {
    call: "Ready to power your next AI project?",
    title: "Scale your workloads with confidence <br /> start with the Pro plan today.",
    btn1: "Get Started with Pro",
    btn2: "",
    href1: "",
    href2: "",
    para: ""
  });
  $$renderer.push(`<!----></section>`);
}
export {
  _page as default
};
