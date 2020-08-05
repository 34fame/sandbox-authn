const routes = [
   {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
         { name: 'home', path: '', component: () => import('pages/Index.vue') },
         { name: 'logout', path: 'logout', component: () => import('src/services/authn/components/Logout.vue') },
         {
            name: 'login',
            path: 'login',
            component: () => import('src/services/authn/components/Login.vue')
         },
         {
            name: 'login-password',
            path: 'login/password',
            component: () => import('src/services/authn/components/UsernamePassword.vue')
         },
         {
            name: 'login-phone',
            path: 'login/phone',
            component: () => import('src/services/authn/components/Phone.vue')
         },
         {
            name: 'register',
            path: 'register',
            component: () => import('src/services/authn/components/Register.vue')
         },

         {
            name: 'private',
            path: 'private',
            meta: { isPrivate: true },
            component: () => import('pages/Private.vue'),
         },
      ],
   },

   {
      path: '*',
      component: () => import('pages/Error404.vue'),
   },
]

export default routes
