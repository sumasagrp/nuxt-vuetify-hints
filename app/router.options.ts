import type { RouterConfig } from '@nuxt/schema'

// This file is used to configure the router for a Nuxt.js application.
// It exports a RouterConfig object that defines a function for transforming the routes scanned by Nuxt.js.

export default <RouterConfig> {
  // For each route, it checks if the route's path is '/auth'.
  routes: scannedRoutes => scannedRoutes.map((route) => {
    if (route.path === '/auth') {
      // If the route's path is '/auth', it returns a new route object that's the same as the original route,
      // but with a redirect property set to '/auth/signin'.
      // This means that when a user navigates to '/auth', they will be redirected to '/auth/signin'.
      return {
        ...route,
        redirect: '/auth/signin',
      }
    }

    return route
  }),
}
