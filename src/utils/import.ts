export function registerGlobalComponents(app: any) {
  app.component('auth-layout', defineAsyncComponent(() => import("@/layouts/auth.vue")))
  app.component('default-layout', defineAsyncComponent(() => import("@/layouts/default.vue")))
}
