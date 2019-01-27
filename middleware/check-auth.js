export default async function({ isServer, store, req, route, redirect }) {
  // If nuxt generate, pass this middleware
  if (isServer && !req) return

  // logout when directing to logout page
  if (route.name === 'auth-logout' || route.fullPath.indexOf('/logout') > -1) {
    store.dispatch('auth/logout')
  }

  // check if logged in
  await store.dispatch('auth/checkAuth')

  const isLoginPage = () => {
    return route.name === 'auth-Login' || route.fullPath.indexOf('/login') > -1
  }
  if (!isLoginPage() && !store.getters['auth/isAuthenticated']) {
    return redirect('/auth/login')
  }
  if (isLoginPage() && store.getters['auth/isAuthenticated']) {
    return redirect('/')
  }
}
