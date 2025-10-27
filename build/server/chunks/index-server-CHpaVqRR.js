import { Y as ssr_context } from './context-Daw8ILuF.js';
import { l as lifecycle_function_unavailable } from './errors-B8liwVcD.js';

function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function mount() {
  lifecycle_function_unavailable("mount");
}
function unmount() {
  lifecycle_function_unavailable("unmount");
}
async function tick() {
}

export { mount as m, onDestroy as o, tick as t, unmount as u };
//# sourceMappingURL=index-server-CHpaVqRR.js.map
