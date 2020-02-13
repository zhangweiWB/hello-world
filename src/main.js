import Vue from 'vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import App from './App.vue'

process.env.NODE_ENV === 'production' && Sentry.init({
  dsn: 'https://949ae61a229949b8aaeef4e69b613e1e@sentry.io/2454547',
  integrations: [new Integrations.Vue({ Vue, attachProps: true })],
  logErrors:true,
  release:'test@1.0.1'
});

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  mounted: function () {
    console.log(this.testFn())
  }
}).$mount('#app')

