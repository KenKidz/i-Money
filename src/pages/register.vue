<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form class="flex flex-col justify-start space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg border border-gray-300 mt-1"
              type="text"
              placeholder="IMoney..."
              v-model="fullName"
            />
          </label>
        </div>
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
            Sign Up
          </button>
          <button v-else type="button" class="py-3 text-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed" disabled>
            Loading...
          </button>
        </div>
      </form>

      <div v-if="error" class="text-left text-red mt-4">
        <span>{{ error }}</span>
      </div>

      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link :to="{name: 'Login', params: {}}" class="text-primary font-bold">Sign In</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useSignUp} from '@/composables/useSignUp'
import router from '@/router'

const { error, isPending, signUp} = useSignUp()
const fullName = ref<string>("")
const email = ref<string>("")
const password = ref<string>("")
const onSubmit = async (): Promise<void> => {
  await signUp(email.value, password.value, fullName.value)
  if(!error.value) {
    await router.push({ name: "Profile", params: {} })
  }
}
</script>
