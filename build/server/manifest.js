const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/heroAi.svg","images/Bottom - shadow (1).png","images/bottom.png","images/gpu.png","images/gpu1.png","images/green.png","images/Illustration.png","images/Illustration10.png","images/Illustration11 (1).png","images/Illustration11.png","images/Illustration12.png","images/Illustration13.png","images/Illustration14.png","images/Illustration15.png","images/Illustration16.png","images/Illustration17.png","images/Illustration18.png","images/Illustration19.png","images/Illustration2.png","images/Illustration20.png","images/Illustration21.png","images/Illustration22.png","images/Illustration23.png","images/Illustration3.png","images/Illustration4.png","images/Illustration5.png","images/Illustration6.png","images/Illustration7.png","images/Illustration8.png","images/Illustration9.png","images/left.png","images/light.png","images/light2.png","images/light3.png","images/light4.png","images/light5.png","images/lightnew.png","images/line.png","images/pro.png","images/right.png","images/server.png","images/Syaala.png","images/top.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CugY8S5o.js",app:"_app/immutable/entry/app.BdJE0xUg.js",imports:["_app/immutable/entry/start.CugY8S5o.js","_app/immutable/chunks/CXw9Tl6S.js","_app/immutable/chunks/DHUcLXTE.js","_app/immutable/chunks/BdpL96RW.js","_app/immutable/entry/app.BdJE0xUg.js","_app/immutable/chunks/BdpL96RW.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DHUcLXTE.js","_app/immutable/chunks/CpZ3wE_r.js","_app/immutable/chunks/fw9SIEIh.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BDfOqMtw.js')),
			__memo(() => import('./chunks/1-3s6sRR88.js')),
			__memo(() => import('./chunks/3-DSjmAKzd.js')),
			__memo(() => import('./chunks/4-CX767tAB.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/colocation",
				pattern: /^\/colocation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
