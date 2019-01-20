import firebase from '@firebase/app'
import firebaseApp from '@/api/firebase/firebase'
import '@firebase/firestore'
import store from "@/store/store"

export default {
    init() {
        this.firestore = firebase.firestore()
        this.firestore.settings({timestampsInSnapshots: true})
        this.getBooksAllData()
    },
    getBooksCollection() {
        return firebase.firestore().collection("books")
    },
    getUsersCollection() {
        return firebase.firestore().collection("users")
    },
    getBorrowLogCollection() {
        return firebase.firestore().collection("log")
    },
    getOwnersCollection() {
        return firebase.firestore().collection("owners")
    },
    getBooksAllData() {
        this.getBooksCollection().get().then(querySnapshot => {
            let booksData = []
            querySnapshot.forEach(doc => {
                let data = {
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                    borrowable: doc.data().borrowable
                }
                booksData.push(data)
            })
            store.commit('bookDataChanged', booksData)
        })
    },
    getBooksBorrowableData() {
        let booksData = []
        this.getBooksCollection().where("borrowable", "==", true)
            get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    let data = {
                        id: doc.id,
                        title: doc.data().title,
                        description: doc.data().description,
                        borrowable: doc.data().borrowable
                    }
                    booksData.push(data)
                })
            })
            return booksData
    },
    getBorrowLogDocId(targetBookId, userId) {
        let docId = []
        this.getBorrowLogCollection()
            .where("whetherCompletion", "==", false)
            .where("borrowedPersonId", "==", userId)
            .where("bookId", "==", targetBookId)
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    docId.push(doc.id)
                })
            })
            return docId
    },
    getBorrowLogIdByUsersLogDocId(userId) {
        const _logId = []
        this.getUsersCollection().doc(userId).get().then(doc => {
            [...Object.keys(doc.data().log)].forEach(el => {
                _logId.push(el)
            })
        })
        return _logId
    },
    getBookIdByUsersLogDocId(targetLogId, userId) {
        const _bookId = []
        this.getUsersCollection().doc(userId).get().then(doc => {
            [...Object.keys(doc.data().log)].forEach(el => {
                targetLogId.forEach(wl => {
                    if(el == wl) {
                        this.getBorrowLogCollection().doc(wl).get().then(doc => {
                            _bookId.push(doc.data().bookId)
                        })
                    }
                })
            })
        })
        return _bookId
    },
    getBookByBorrowLogId(userId) {
        const _bookId = []
        this.getUsersCollection().doc(userId).get().then(doc => {
            [...Object.keys(doc.data().log)].forEach(el => {
                _bookId.push(this.getBookIdByUsersLogDocId(el, userId))
            })
        })
        return _bookId
    },

    getBookByLogDocId(userId) {
        const _targetLogId = this.getBorrowLogIdByUsersLogDocId(userId)
        const _bookId = []
        _bookId.push(this.getBookIdByUsersLogDocId(_targetLogId, userId))
        let booksData = []
        this.getBooksCollection().get().then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id)
                Object.entries(_bookId).forEach(el => {
                    //console.log(el)
                    //console.log(el["1"])
                    el["1"].forEach(wl => console.log(wl))
                    if(doc.id == el) {
                        // let data = {
                        //     id: doc.id,
                        //     title: doc.data().title,
                        //     owner: doc.data().owner,
                        //     description: doc.data().description,
                        //     borrowable: doc.data().borrowable
                        // }
                        booksData.push(doc.id)
                    }
                })
            })
         })
        //console.log(booksData)
    },
    // getBookIdByUsersLogDocId(userId) {
    //     const usersLogId = []
    //     this.getUsersCollection().doc(userId).get().then(doc => {
    //         [...Object.keys(doc.data().log)].forEach(el => {
    //             usersLogId.push(el)
    //         })
    //     })
    //     return usersLogId
    // },
    // getMyList(userId) {
    //     const _bookId = []
    //     this.getBookIdByUsersLogDocId(userId).forEach(el => {
    //         // this.getBorrowLogCollection().doc(el).get().then(doc => {
    //         //     _bookId.push(doc.data().bookId)
    //         // })
    //         console.log(el)
    //     })
    //     //return _bookId
    // },
    setBorrowBook() {
        this.getBooksCollection().add({
            title: "",
            description: "",
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            log: {},
            borrowable: true,
            owner: ""
        })
        .then(() => {
            console.log("success!")
        })
        .catch(error => {
            console.error("Error writing document: ", error);
        })
    },
    setBorrowLog(targetBookId, userId) {
        this.getBorrowLogCollection().add({
            bookId: targetBookId,
            startedAt: firebase.firestore.FieldValue.serverTimestamp(),
            expiredAt: "",
            borrowedPersonId: userId,
            whetherCompletion: false
        })
        .then(() => {
            // this.updateBooksBorrowable(targetBookId)
            // this.updateUsersHavingLog(targetBookId, userId)
            // this.updateWhetherCompletion(targetBookId)
            // console.log(this.getBookIdByUsersLogDocId("yOo5bgsymhS6k27GdQ65", userId))
            //console.log(this.getBookByLogDocId(userId))
            this.getBookByLogDocId(userId)
            //console.log(this.getMyList(userId))
            //console.log(this.getBookIdByUsersLogDocId(userId))
            //this.getBookIdByUsersLogDocId(userId)
        })
        .catch(error => {
            console.error("Error writing document: ", error);
        })
    },
    updateWhetherCompletion(targetBookId) {
        let targetDoc = this.getBorrowLogCollection().doc(targetBookId)
        firebase.firestore().runTransaction(transaction => {
            return transaction.get(targetDoc).then(targetDoc => {
                if (!targetDoc.exists) {
                    throw "Document does not exist!";
                }

                let newBorrowable = !targetDoc.data().borrowable;
                if (newBorrowable == null) {
                    return Promise.reject("Sorry! It was failed")
                }
                else {
                    transaction.update(
                        // here, it doesnt work variable "targetDoc".
                        // thus uses this~.doc(targetBookId).
                        this.getBorrowLogCollection().doc(targetBookId),
                        {
                            borrowable: newBorrowable,
                            expiredAt: firebase.firestore.FieldValue.serverTimestamp()
                        }
                    )
                    return newBorrowable
                }
            });
        })
        .then(newBorrowable => {
            console.log("Updated successfully to ", newBorrowable)
        })
        .catch(error => {
            console.error("Error writing document: ", error);
        })
    },
    updateBooksBorrowable(targetBookId) {
        let targetDoc = this.getBooksCollection().doc(targetBookId)
        firebase.firestore().runTransaction(transaction => {
            return transaction.get(targetDoc).then(targetDoc => {
                if (!targetDoc.exists) {
                    throw "Document does not exist!";
                }

                let newBorrowable = !targetDoc.data().borrowable;
                if (newBorrowable == null) {
                    return Promise.reject("Sorry! It is failed")
                }
                else {
                    transaction.update(
                        // here, it doesnt work variable "targetDoc".
                        // thus uses this~.doc(targetBookId).
                        this.getBooksCollection().doc(targetBookId),
                        { borrowable: newBorrowable }
                    )
                    return newBorrowable
                }
            });
        })
        .then(newBorrowable => {
            console.log("Updated successfully to ", newBorrowable)
        })
        .catch(error => {
            console.error("Error writing document: ", error);
        })
    },
    updateUsersHavingLog(targetBookId, userId) {
        let userDoc = this.getUsersCollection().doc(userId)
        let docLog_Array = this.getBorrowLogDocId(targetBookId, userId)
        firebase.firestore().runTransaction(transaction => {
            return transaction.get(userDoc).then(userDoc => {
                if (!userDoc.exists) {
                    throw "Document does not exist!";
                }

                if (docLog_Array == null) {
                    return Promise.reject("Sorry! It is failed")
                }
                else {
                    transaction.update(
                        // here, it doesnt work variable "targetDoc".
                        // thus uses this~.doc(targetBookId).
                        this.getUsersCollection().doc(userId),
                        {[`log.${docLog_Array}`]: true }
                    )
                    return docLog_Array
                }
            });
        })
        .then(docLog_Array => {
            console.log("Updated successfully to ", docLog_Array)
        })
        .catch(error => {
            console.error("Error writing document: ", error);
        })
    }
}


// export class Firestore
// {
//
//     constructor() {
//         this.firestore = firebase.firestore()
//         this.firestore.settings({timestampsInSnapshots: true})
//     }
//
//     getBooksCollection() {
//         return firebase.firestore().collection("books")
//     }
//
//     getBooksAllData() {
//         let booksData = []
//         this.getBooksCollection().get().then(querySnapshot => {
//             querySnapshot.forEach(doc => {
//                 let data = {
//                     id: doc.id,
//                     name: doc.data().name,
//                     description: doc.data().description,
//                     borrowable: doc.data().borrowable
//                 }
//                 booksData.push(data)
//             })
//             return booksData
//         })
//     }
//
//     getBooksBorrowablData() {
//         let booksData = []
//         this.getBooksCollection().where("borrowable", "==", true)
//             get().then(querySnapshot => {
//                 querySnapshot.forEach(doc => {
//                 let data = {
//                     id: doc.id,
//                     name: doc.data().name,
//                     description: doc.data().description,
//                     borrowable: doc.data().borrowable
//                 }
//                 booksData.push(data)
//             })
//             return booksData
//         })
//     }
//
// }
//
// const firestore = new Firestore()
// export default firestore

// export const firestore = firebaseApp.firestore()
// firestore.settings({timestampsInSnapshots: true})
