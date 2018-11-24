import firebase from 'firebase/app'
import firebaseConfig from './firebaseConfig'
import 'firebase/firestore'

export class Firestore
{

    constructor() {
        const firebaseApp = firebase.initializeApp(firebaseConfig)
        this.firestore = firebaseApp.firestore()
        this.firestore.settings({timestampsInSnapshots: true})
    }

    getBooksCollection() {
        return firebase.firestore().collection("books")
    }

    getBooksData(booksData) {
        this.getBooksCollection().get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = {
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    borrowable: doc.data().borrowable
                }
                booksData.push(data)
            })
            return booksData
        })
    }

    getFirestoreProperty() {
        return this.firestore
    }

}

export default Firestore

// export const firestore = firebaseApp.firestore()
// firestore.settings({timestampsInSnapshots: true})
