<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div v-if="meta.leading" class="w-10 h-10 overflow-hidden rounded-full">
            <img class="w-full h-auto object-cover" src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" alt="User's Profile Data">
          </div>
          <h1 class="text-xl font-bold text-dark ml-2">{{meta.text}}</h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <Icon icon="ic:outline-notifications" class="text-2xl"></Icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

const route = useRoute()
const meta = computed(() => route.meta)
</script>

<style scoped>

</style>
