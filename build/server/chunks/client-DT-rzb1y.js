import { l as writable } from './utils-CokCpG6h.js';
import { Z as noop } from './context-DrF2FtW9.js';

function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    url: new URL("https://example.com")
  });
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
function invalidateAll() {
  {
    throw new Error("Cannot call invalidateAll() on the server");
  }
}
async function applyAction(result) {
  {
    throw new Error("Cannot call applyAction(...) on the server");
  }
}

export { applyAction as a, invalidateAll as i, stores as s };
//# sourceMappingURL=client-DT-rzb1y.js.map
