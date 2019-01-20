import firebase from '@firebase/app'
import "@firebase/auth"
import firebaseConfig from './firebaseConfig'
import Firestore from '@/api/firebase/firestore'
import store from "@/store/store"

export default {
    init() {
        firebase.initializeApp(firebaseConfig)
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    },
    onAuthStateChanged() {
        firebase.auth().onAuthStateChanged(user => {
            user = user ? user : {}
            store.commit('onAuthStateChanged', user)
            store.commit('onUserStatusChanged', user.uid ? true : false)
        })
    },
    signIn() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(user => {
            Firestore.getUsersCollection().doc(this.getUserUid(user)).set(this.setUserData(user))
                .then(() => {
                    alert("Welcome to Sharebnb!")
                })
                .catch(error => {
                    console.error("Error writing document: ", error);
                })
        })
    },
    signOut() {
        firebase.auth().signOut()
    },
    isUserSignIn() {
        return !!firebase.auth().currentUser || false
    },
    getUserPicUrl(user) {
        return user.user.photoURL || '../../static/images/profile_placeholder.png'
    },
    getUserName(user) {
        return user.user.displayName
    },
    getUserUid(user) {
        return user.user.uid
    },
    getUserEmail(user) {
        return user.user.email
    },
    setUserData(user) {
        let userData = {
            displayName: this.getUserName(user),
            email: this.getUserEmail(user),
            userPic: this.getUserPicUrl(user),
            uid: this.getUserUid(user),
            log: {}
        }
        return userData;
    }
}

