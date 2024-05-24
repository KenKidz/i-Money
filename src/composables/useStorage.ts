import { storage } from '@/configs/firebase'
import { useUser } from '@/composables/useUser'
import { ref as firebaseRef, uploadBytes, getDownloadURL  } from "firebase/storage";

const { getUser } = useUser()
const { user } = getUser()

const useStorage = (name: any) => {
  const error = ref<any>(null)
  const filePath = ref<any>(null)
  const url = ref<any>(null)

  async function uploadFile(file: any) {
    filePath.value = `${name}/${user.value.uid}/${file.name}`
    const fileRef = firebaseRef(storage, filePath.value)
    error.value = null
    try{
      const res = await uploadBytes(fileRef, file)
      url.value = await getDownloadURL(res.ref)
      return url.value
    } catch (err: any) {
      console.log(err)
      error.value = err.message
    }
  }
  return { error, filePath, url, uploadFile}
}

export default useStorage
