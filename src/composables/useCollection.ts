import { fireStoreCore } from '@/configs/firebase'
import { addDoc, collection } from 'firebase/firestore'

const useCollection = (name: any) => {
  const error = ref<any>(null)
  async function addRecord(record: any) {
    error.value = null
    try{
      const res = await addDoc(collection(fireStoreCore, name), record)
      return res
    } catch (err: any) {
      console.log(err)
      error.value = err.message
    }
  }
  return { error, addRecord}
}

export default useCollection
