import {
  onAuthStateChanged,
} from 'firebase/auth'
import {auth} from "@/configs/firebase"

const user = ref<any>(auth.currentUser)
onAuthStateChanged(auth, (_user) => {
  if(_user) user.value = _user
})

function getUser() {
  return { user }
}

export function useUser() {
  return {getUser}
}
