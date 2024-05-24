<template>
  <div>
    <h1>Hello world</h1>
    <Icon icon="tabler:home"></Icon>
    <div class="mt-6" v-if="user">{{user.displayName}}</div>
  </div>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/useUser'

const {getUser} = useUser()


const { user } = getUser()

</script>

<style scoped>

</style>
