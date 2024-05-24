import { auth } from '@/configs/firebase'
import { signOut } from 'firebase/auth'

const error = ref<any>(null)

async function logout() {
  error.value = null
  try{
    const res = await signOut(auth)
    return res
  } catch (err: any) {
    console.log(err)
    error.value = err.message
  }
}

export function useLogout() {
  return {error, logout}
}
