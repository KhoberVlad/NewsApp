
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/NewsApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/NewsApp/main",
    "route": "/NewsApp"
  },
  {
    "renderMode": 1,
    "route": "/NewsApp/main"
  },
  {
    "renderMode": 1,
    "route": "/NewsApp/about-us"
  },
  {
    "renderMode": 1,
    "route": "/NewsApp/contact"
  },
  {
    "renderMode": 1,
    "route": "/NewsApp/privacy"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5029, hash: 'e3aaf6cf67c7f2c85cbfe9bf6619d1c158fcd2d4cade9580a6d3a402fc69dafd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: '9d0b7217d73ebc8d660edfcda0e714aa6f71b88cb2bd396e1ceb8b2811470013', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JG7EAGFK.css': {size: 230853, hash: 'YlmivfEfBiI', text: () => import('./assets-chunks/styles-JG7EAGFK_css.mjs').then(m => m.default)}
  },
};
