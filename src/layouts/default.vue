<template>
  <NavigationHeader />
  <slot/>
  <NavigationBottom v-if="meta.isShowFooter" />
</template>
<script setup lang="ts">

const route = useRoute()
const meta = computed(() => route.meta)
</script>
