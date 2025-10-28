import { a as attr_class, d as attr, b as stringify } from './index-CSxFwnw_.js';
import { g as glass } from './Icon-DSSx7BZD.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function Card2($$renderer, $$props) {
  let { title, content, image } = $$props;
  $$renderer.push(`<div${attr_class(`${stringify(glass)} w-full h-full rounded-2xl flex flex-col gap-8 justify-center p-8 items-center`)}><img${attr("src", image)} alt="Card Illustration"/> <h6>${escape_html(title)}</h6> <p class="text-gray-1 lg:w-sm w-full text-center">${escape_html(content)}</p></div>`);
}
function Card($$renderer, $$props) {
  let { title, content, image } = $$props;
  $$renderer.push(`<div${attr_class(`${stringify(glass)} rounded-2xl flex flex-col gap-2 p-8 pb-0 w-full`)}><h6>${escape_html(title)}</h6> <p class="text-gray-1">${escape_html(content)}</p> <img${attr("src", image)} alt="Card Illustration"/></div>`);
}

export { Card as C, Card2 as a };
//# sourceMappingURL=Card-WDICJawt.js.map
