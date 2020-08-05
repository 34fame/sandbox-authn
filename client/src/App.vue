<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Loading } from 'quasar'

export default {
   methods: {
      ...mapActions(['auth/handleAuthStateChange']),

      async onAuthStateChange() {
         Loading.show({message: 'Logging in...'})
         await this['auth/handleAuthStateChange']()
         Loading.hide()
      }
   },

   async mounted() {
      await this.onAuthStateChange()
   },
}
</script>
