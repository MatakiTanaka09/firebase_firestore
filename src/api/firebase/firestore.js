import firebase from 'firebase/app'
import firebaseApp from '@/api/firebase/firebase'
import 'firebase/firestore'

export class Firestore
{

    constructor() {
        this.firestore = firebaseApp.firestore()
        this.firestore.settings({timestampsInSnapshots: true})
    }

    getBooksCollection() {
        return firebase.firestore().collection("books")
    }

    getBooksAllData(booksData) {
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

    getBooksBorrowablData(booksData) {
        this.getBooksCollection().where("borrowable", "==", true)
            get().then(querySnapshot => {
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

}

const firestore = new Firestore()
export default firestore

// export const firestore = firebaseApp.firestore()
// firestore.settings({timestampsInSnapshots: true})
