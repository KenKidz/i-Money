<template>
  <footer id="footer" class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4">
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <Icon :icon="navItem.icon" class="text-2xl text-gray-600" />
          </router-link>
        </li>
      </ul>
    </div>

    <div data-circle class="absolute top-0 left-1/2 transform -translate-x-1/2"></div>
    <div
      data-circle-inset
      class="absolute flex items-center justify-center bg-primary text-white w-12 h-12 rounded-full cursor-pointer -top-6 left-1/2 transform -translate-x-1/2"
      @click="goToRoute"
    >
      <Icon icon="radix-icons:plus" class="text-2xl" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { NAV_BOTTOM_ITEMS } from '@/constants'
import router from '@/router'

const navItems = reactive(NAV_BOTTOM_ITEMS)

const goToRoute = () => {
  router.push({ name: 'New Transaction', params: {} })
}
</script>

<style scoped>
footer#footer > div[data-circle],
footer#footer > div[data-circle] > div,
footer#footer::after {
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}

footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
