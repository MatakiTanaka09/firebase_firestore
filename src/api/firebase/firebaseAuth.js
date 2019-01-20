import firebase from 'firebase/app'
import firebaseApp from '@/api/firebase/firebase'

class FirebaseAuth
{

    onAuthStateChanged() {
        firebase.auth().onAuthStateChanged(user => {
            this.userName = user ? this.getUserName : null
            this.userPic = user ? this.getUserPicUrl() : null
            this.authButtonText = user ? 'Sign-out' : 'Sign-in with Google'
            this.authFunction = user ? this.signOut : this.signIn
            this.isSignIn = user ? true : false
        })
    }
    signIn() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(user => {
            alert('success')
            this.$router.push('/booklists')
        })
    }
    signOut() {
        firebase.auth().signOut()
    }
    isUserSignIn() {
        return !!firebase.auth().currentUser || false
    }
    getUserPicUrl() {
        return firebase.auth().currentUser.photoURL || '../../static/images/profile_placeholder.png'
    }
    getUserName() {
        return firebase.auth().currentUser.displayName
    }
}

const firebaseAuth = new FirebaseAuth();
export default firebaseAuth

