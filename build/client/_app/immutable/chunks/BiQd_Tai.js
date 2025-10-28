import{p as V,a3 as q,a as K,a4 as Z,a2 as J,b as _,c as Q,u as T,n as X,f as M,R as O,s as d,t as S,d as p,r as o,S as A,O as w,a5 as k,e as $,a6 as C}from"./DiNgYI7j.js";import"./DsnmJJEf.js";import"./ChmF6P2E.js";import{I as Y,B as U,e as j,g as B,i as z,s as y}from"./CNLxLsD9.js";import{s as tt,r as et}from"./wqhjZqmC.js";function E(t,e){V(e,!0);/**
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
 */let s=et(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]];Y(t,tt({name:"badge-check"},()=>s,{get iconNode(){return n},children:(a,h)=>{var l=q(),f=K(l);Z(f,()=>e.children??J),_(a,l)},$$slots:{default:!0}})),Q()}function ft(t){T(()=>X(()=>t()))}function ut(t,e){return t>=0&&t<e.length}function gt(t,e,s=!0){if(!(t.length===0||e<0||e>=t.length))return t.length===1&&e===0?t[0]:e===t.length-1?s?t[0]:void 0:t[e+1]}function mt(t,e,s=!0){if(!(t.length===0||e<0||e>=t.length))return t.length===1&&e===0?t[0]:e===0?s?t[t.length-1]:void 0:t[e-1]}function vt(t,e,s,n=!0){if(t.length===0||e<0||e>=t.length)return;let a=e+s;return n?a=(a%t.length+t.length)%t.length:a=Math.max(0,Math.min(a,t.length-1)),t[a]}function xt(t,e,s,n=!0){if(t.length===0||e<0||e>=t.length)return;let a=e-s;return n?a=(a%t.length+t.length)%t.length:a=Math.max(0,Math.min(a,t.length-1)),t[a]}function st(t,e,s){const n=e.toLowerCase();if(n.endsWith(" ")){const r=n.slice(0,-1);if(t.filter(v=>v.toLowerCase().startsWith(r)).length<=1)return st(t,r,s);const g=s?.toLowerCase();if(g&&g.startsWith(r)&&g.charAt(r.length)===" "&&e.trim()===r)return s;const m=t.filter(v=>v.toLowerCase().startsWith(n));if(m.length>0){const v=s?t.indexOf(s):-1;return G(m,Math.max(v,0)).find(b=>b!==s)||s}}const h=e.length>1&&Array.from(e).every(r=>r===e[0])?e[0]:e,l=h.toLowerCase(),f=s?t.indexOf(s):-1;let u=G(t,Math.max(f,0));h.length===1&&(u=u.filter(r=>r!==s));const i=u.find(r=>r?.toLowerCase().startsWith(l));return i!==s?i:void 0}function G(t,e){return t.map((s,n)=>t[(e+n)%t.length])}const N=(t,e,s,n,a)=>{let h=k(()=>C(e?.(),"")),l=k(()=>C(s?.(),"")),f=k(()=>C(n?.(),"")),u=k(()=>C(a?.(),()=>[""],!0));var x=rt(),i=p(x),r=p(i,!0);o(i);var c=d(i,2),g=p(c,!0);o(c);var m=d(c,2),v=p(m),P=p(v,!0);o(v),A(2),o(m);var I=d(m,2);U(I,{get class(){return`bg-[#0F100F]! w-full ${B}`},children:(W,R)=>{A();var D=O("Choose this plan");_(W,D)},$$slots:{default:!0}});var b=d(I,4);j(b,5,()=>w(u),z,(W,R,D,lt)=>{var L=at(),F=p(L);E(F,{});var H=d(F);o(L),S(()=>$(H,` ${w(R)??""}`)),_(W,L)}),o(b),o(x),S(()=>{y(x,1,`p-8 ${B} flex flex-col gap-4 items-start justify-start rounded-xl`),$(r,w(h)),$(g,w(l)),$(P,w(f))}),_(t,x)};var at=M('<div class="flex flex-row gap-4"><!> </div>'),rt=M('<div><h6 class="font-medium"> </h6> <p class="text-gray-1"> </p> <div class="flex flex-row gap-0 p-0 items-center"><h3> </h3> <p class="text-gray-1">/month</p></div> <!> <img src="/images/line.webp" class="p-8" alt=""/> <div class="flex flex-col gap-2"></div></div>'),nt=M('<div class="flex flex-row gap-4"><!> </div>'),ot=M(`<section class="grid lg:grid-cols-3 grid-cols-1 gap-4"><!> <div class="p-8 rounded-xl flex flex-col gap-4 items-start justify-start
        bg-cover bg-[url(/images/pro.webp)] shadow-sm shadow-primarynp
       "><h6 class="font-medium">Pro</h6> <p class="text-gray-1">Full rack for production AI workloads</p> <div class="flex flex-row gap-0 p-0 items-center"><h3>$995</h3> <p class="text-gray-1">/month</p></div> <!> <img src="/images/line.webp" class="p-8" alt=""/> <div class="flex flex-col gap-2"></div></div> <!></section>`);function _t(t){let e=["5 KW power allocation","Half rack (21U)","1 Gbps DIA included","2 hours smart hands/month","24/7 monitoring","Remote rack camera access"],s=["10 kW power allocation","Full rack (42U)","1 Gbps DIA included","4 hours smart hands/month","Priority support","Remote rack camera + telemetry"],n=[" 15+ kW per rack","Multiple racks available","10 Gbps DIA or dual carrier","Unlimited smart hands","Dedicated account manager","Custom SLA terms"];var a=ot(),h=p(a);N(h,()=>"Starter",()=>"Half rack for testing and small deployments",()=>"$600",()=>e);var l=d(h,2),f=d(p(l),6);U(f,{class:"bg-primary w-full",children:(i,r)=>{A();var c=O("Choose this plan");_(i,c)},$$slots:{default:!0}});var u=d(f,4);j(u,5,()=>s,z,(i,r)=>{var c=nt(),g=p(c);E(g,{});var m=d(g);o(c),S(()=>$(m,` ${w(r)??""}`)),_(i,c)}),o(u),o(l);var x=d(l,2);N(x,()=>"Enterprise",()=>"Multi-rack deployments with custom SLAs",()=>"Custom",()=>n),o(a),_(t,a)}export{_t as P,xt as b,vt as f,st as g,ut as i,gt as n,ft as o,mt as p};
