<template>
  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" alt="User's Profile Avatar" class="w-full h-auto object-cover">
        </div>
        <div class="font-bold text-2xl text-primary mt-3">{{user.displayName}}</div>
        <p class="font-semibold text-gray-400 mt-1">{{user.email}}</p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li v-for="profileOption in profileOptions" :key="profileOption.name" class="last:text-red">
              <router-link :to="profileOption.route" class="flex justify-between items-center py-3">
                <div class="flex items-center text-left">
                  <Icon :icon="profileOption.icon" class="text-2xl"></Icon>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <Icon icon="tabler:chevron-right" class="text-gray-400"/>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PROFILE_OPTIONS} from '@/constants'
import {useUser} from '@/composables/useUser'

const profileOptions = reactive(PROFILE_OPTIONS)
const {getUser} = useUser()
const { user } = getUser()
</script>

<style scoped>

</style>
