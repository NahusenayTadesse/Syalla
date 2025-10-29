const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/heroAi.svg","images/Bottom - shadow (1).png","images/Bottom - shadow (1).webp","images/bottom.png","images/bottom.webp","images/gpu.png","images/gpu.webp","images/gpu1.png","images/gpu1.webp","images/green.png","images/green.webp","images/Illustration.png","images/Illustration.webp","images/Illustration10.png","images/Illustration10.webp","images/Illustration11 (1).png","images/Illustration11 (1).webp","images/Illustration11.png","images/Illustration11.webp","images/Illustration12.png","images/Illustration12.webp","images/Illustration13.png","images/Illustration13.webp","images/Illustration14.png","images/Illustration14.webp","images/Illustration15.png","images/Illustration15.webp","images/Illustration16.png","images/Illustration16.webp","images/Illustration17.png","images/Illustration17.webp","images/Illustration18.png","images/Illustration18.webp","images/Illustration19.png","images/Illustration19.webp","images/Illustration2.png","images/Illustration2.webp","images/Illustration20.png","images/Illustration20.webp","images/Illustration21.png","images/Illustration21.webp","images/Illustration22.png","images/Illustration22.webp","images/Illustration23.png","images/Illustration23.webp","images/Illustration3.png","images/Illustration3.webp","images/Illustration4.png","images/Illustration4.webp","images/Illustration5.png","images/Illustration5.webp","images/Illustration6.png","images/Illustration6.webp","images/Illustration7.png","images/Illustration7.webp","images/Illustration8.png","images/Illustration8.webp","images/Illustration9.png","images/Illustration9.webp","images/left.png","images/left.webp","images/light.png","images/light.webp","images/light2.png","images/light2.webp","images/light3.png","images/light3.webp","images/light4.png","images/light4.webp","images/light5.png","images/light5.webp","images/lightnew.png","images/lightnew.webp","images/line.png","images/line.webp","images/preview.webp","images/pro.png","images/pro.webp","images/right.png","images/right.webp","images/server.png","images/server.webp","images/Syaala.png","images/Syaala.webp","images/top.png","images/top.webp","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CvZaHpu_.js",app:"_app/immutable/entry/app.y9Al5Lje.js",imports:["_app/immutable/entry/start.CvZaHpu_.js","_app/immutable/chunks/nJyKhzr9.js","_app/immutable/chunks/awTmE6os.js","_app/immutable/chunks/DiNgYI7j.js","_app/immutable/entry/app.y9Al5Lje.js","_app/immutable/chunks/DiNgYI7j.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/awTmE6os.js","_app/immutable/chunks/wqhjZqmC.js","_app/immutable/chunks/BdUzcsDJ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-k6KF1B87.js')),
			__memo(() => import('./chunks/1-CvSWndTw.js')),
			__memo(() => import('./chunks/2-DOZqRROc.js')),
			__memo(() => import('./chunks/3-GZ-AhhYY.js').then(function (n) { return n._; })),
			__memo(() => import('./chunks/4-DPe5ojaM.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/colocation",
				pattern: /^\/colocation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
