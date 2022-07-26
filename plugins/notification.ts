// eslint-disable-next-line import/no-extraneous-dependencies
import Notifications, { notify } from '@kyvg/vue3-notification';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Notifications);
  nuxtApp.provide('notify', notify);
});
