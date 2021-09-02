import PWA from "../src/modules/pwa";
import options from "../data/config.json";
import routes from '../src/routes/index';

window.pwa = new PWA({
  ...options,
  routes: routes
});

