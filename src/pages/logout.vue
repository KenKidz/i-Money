<template>
  <div>
    Logout page...
  </div>
</template>

<script setup lang="ts">
import { useLogout } from '@/composables/useLogout'
import router from '@/router'

const {error, logout} = useLogout()
const onLogout = async () => {
  await logout()
  if(!error.value) {
    router.push({
      name: "Login",
      params: {}
    })
  }
}
onLogout()
</script>

<style scoped>

</style>
