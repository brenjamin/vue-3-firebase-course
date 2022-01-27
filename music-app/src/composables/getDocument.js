import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDocument = (collection, id) => {
    const document = ref(null)
    const error = ref(null)

    let documentRef = projectFirestore.collection(collection).doc(id)

    const unsub = documentRef.onSnapshot( doc => {
        if (doc.data()) {
            document.value = {...doc.data(), id: doc.id}
        } else {
            error.value = 'that document does not exist'
        }
    }, err => {
        console.log(err.message)
        error.value = 'could not fetch the document'
    })

    watchEffect((onInvalidate) => {
        // unsub from prev doc when watcher is stopped (component unmounted)
        onInvalidate(() => {
            unsub()
        })
    })

    return { document, error }
}

export default getDocument