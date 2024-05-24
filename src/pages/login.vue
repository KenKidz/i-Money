<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form class="flex flex-col justify-start space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-300 mt-1"
              type="email"
              placeholder="example@example.com"
              autocomplete="email"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-300 mt-1"
              type="password"
              placeholder="Password"
              autocomplete="current-password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button v-if="!isPending" type="submit" class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">
            Sign In
          </button>
          <button v-else type="button" class="py-3 flex justify-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed" disabled>
            <Icon icon="svg-spinners:180-ring" class="text-2xl"></Icon>
          </button>
        </div>
      </form>

      <div v-if="error" class="text-left text-red mt-4">
        <span>{{ error }}</span>
      </div>

      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new member.</span>
        <span class="ml-1">
          <router-link :to="{name: 'Register', params: {}}" class="text-primary font-bold">Sign Up</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useSignIn} from '@/composables/useSignIn'
import router from '@/router'

const {error, isPending, signIn } = useSignIn()
const email = ref<string>("")
const password = ref<string>("")
const onSubmit = async (): Promise<void> => {
  await signIn(email.value, password.value)
  if(!error.value) {
    await router.push({name: 'Profile', params: {}})
  }
}
</script>
