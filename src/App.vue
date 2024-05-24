<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script setup lang="ts">
import { PUBLIC_LAYOUT } from '@/constants'

const route = useRoute()
const layout = computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout")
</script>
