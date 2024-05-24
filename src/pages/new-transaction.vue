<template>
  <form @submit.prevent="onSubmit">
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-300 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  v-model.number="total"
                  id="total"
                  class="text-4xl text-dark w-full outline-none mt-1"
                  type="text"
                  placeholder="0"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div class="flex items-center flex-none w-10 text-right leading-10 mr-4">
                <span class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"></span>
              </div>
              <div class="flex-1 border-b border-gray-300 py-3">
                <input
                  v-model="category"
                  id="category"
                  class="text-xl text-dark w-full outline-none"
                  type="text"
                  placeholder="Select a category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div class="flex items-center flex-none w-10 text-right leading-10 mr-4">
                <span class="flex-none w-10 mr-4">
                  <Icon icon="mdi:file-document-outline" class="text-2xl ml-auto" />
                </span>
              </div>
              <div class="flex-1 border-b border-gray-300 py-3">
                <input
                  v-model="note"
                  id="note"
                  class="text-dark w-full outline-none"
                  type="text"
                  placeholder="Note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <Icon icon="mdi:calendar-month-outline" class="text-2xl ml-auto" />
                </span>
              </div>
              <div class="flex-1 py-2 border-b border-gray-300">
                <div class="text-dark w-full">{{new Date()}}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <Icon icon="mdi:wallet-bifold-outline" class="text-2xl ml-auto" />
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-8" v-if="!isMoreDetails">
      <button
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
        @click="isMoreDetails = true"
      >
        More Details
      </button>
    </div>

    <template v-if="isMoreDetails">
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="flex items-center flex-none w-10 text-right leading-10 mr-4">
                  <span class="flex-none w-10 mr-4">
                    <Icon icon="mdi:location-on-outline" class="text-2xl ml-auto" />
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-300 py-3">
                  <input
                    v-model="location"
                    id="location"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="Select a location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <Icon icon="mdi:user-multiple-outline" class="text-2xl ml-auto" />
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <input
                    v-model="person"
                    id="withPerson"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="With person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-primary">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <Icon icon="mdi:camera-outline" class="text-2xl ml-auto" />
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <div class="w-full font-semibold">Upload photos</div>
                  <input id="file" type="file" class="w-0 h-0 overflow-hidden absolute" @change="onChangeFile">
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="text-red mt-3">{{ errorFile }}</div>
    </template>
    <button class="bg-primary text-white" type="submit">Add Transaction Test</button>
  </form>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/useUser'
import useCollection from '@/composables/useCollection'
import useStorage from '@/composables/useStorage'

const { getUser } = useUser()
const { user } = getUser()
const {error, addRecord} = useCollection("transactions")
const { uploadFile, url } = useStorage('transactions')
const isMoreDetails = ref<boolean>(false)
const total = ref<number>(0)
const category = ref<string>("")
const note = ref<string>("")
const time = ref<any>(new Date())
const location = ref<string>("")
const person = ref<string>("")
const file = ref<any>(null)
const errorFile = ref<any>(null)

const onChangeFile = (event: any) => {
  const selected = event.target.files[0]
  const typesFile = ["image/png", "image/jpeg"]
  if(selected && typesFile.includes(selected.type)) {
    file.value = selected
  } else {
    file.value = null
    errorFile.value = "Please select a type file png or jpg"
  }
}

const onSubmit = async () => {
  if(file.value) {
    await uploadFile(file.value)
  }
  const transaction = {
    total: total.value,
    category: category.value,
    note: note.value,
    time: time.value,
    location: location.value,
    person: person.value,
    userId: user.value.uid,
    thumbnail: url.value
  }
  await addRecord(transaction)
  console.log(transaction, "created")
}
</script>

<style scoped></style>
