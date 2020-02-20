import Vue from 'vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import App from './App.vue'

process.env.NODE_ENV === 'production' && Sentry.init({
  dsn: 'https://949ae61a229949b8aaeef4e69b613e1e@sentry.io/2454547',
  integrations: [new Integrations.Vue({ Vue, attachProps: true })],
  environment:'staging',
  logErrors:true,
  release:'test@1.0.1',
  beforeSend(event) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  }
});
Sentry.setUser({'username':"zhangLei"})
Sentry.setTag("page_locale", "de-at");
Sentry.addBreadcrumb({
  category: 'auth',
  message: 'Authenticated user zhangleilei',
  level: Sentry.Severity.Info
});

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

