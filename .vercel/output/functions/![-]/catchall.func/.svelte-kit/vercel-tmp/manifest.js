export const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.BypinuMU.js",app:"_app/immutable/entry/app.94TCz0I1.js",imports:["_app/immutable/entry/start.BypinuMU.js","_app/immutable/chunks/Jd4Ue1X_.js","_app/immutable/chunks/DHUcLXTE.js","_app/immutable/chunks/BdpL96RW.js","_app/immutable/entry/app.94TCz0I1.js","_app/immutable/chunks/BdpL96RW.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DHUcLXTE.js","_app/immutable/chunks/CpZ3wE_r.js","_app/immutable/chunks/fw9SIEIh.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
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
