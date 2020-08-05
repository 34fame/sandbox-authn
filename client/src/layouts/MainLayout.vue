<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Q-AuthN Sandbox
        </q-toolbar-title>

        <div>
            <template v-if="isAuthenticated">
               <template v-if="loggedIn.photoUrl">
                  <q-btn flat round>
                     <q-avatar size="40px">
                        <q-img :src="loggedIn.photoUrl" />
                     </q-avatar>

                     <q-menu>
                        <div class="column q-gutter-md">
                           <q-btn
                              color="primary"
                              flat
                              label="Logout"
                              no-caps
                              :to="{ name: 'logout' }"
                           />
                        </div>
                     </q-menu>
                  </q-btn>
               </template>
               <template v-else>
                  <q-btn flat color="blue-2" :label="loggedIn.displayName" no-caps>
                     <q-menu>
                        <q-btn flat label="Logout" :to="{ name: 'logout' }" />
                     </q-menu>
                  </q-btn>
               </template>
            </template>

           <template v-else>
                 <q-btn flat round icon="perm_identity" :to="{ name: 'login' }"/>
           </template>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
   computed: {
      ...mapState('auth',['isAuthenticated', 'loggedIn'])
   },

}
</script>
