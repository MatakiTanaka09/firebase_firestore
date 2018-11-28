<template>
    <div class="signin">
        <h1 class="my-3">Sign In</h1>
        <b-button variant="success" class="auth-button my-2" @click="authFunction">
            {{ authButtonText }}
        </b-button>
    </div>
</template>


<script>
import firebaseApp from '@/api/firebase/firebase'
import firebase from 'firebase'
// import FirebaseAuth from '@/api/firebase/firebaseAuth'

export default {
    name: 'SignIn',
    data() {
        return {
            userName: null,
            userPic: null,
            isSignIn: null,
            authButtonText: null,
            authFunction: function() {},
        }
    },
    created() {
       this.onAuthStateChanged()
    },
    methods: {
        onAuthStateChanged() {
            firebase.auth().onAuthStateChanged(user => {
                this.userName = user ? this.getUserName : null
                this.userPic = user ? this.getUserPicUrl() : null
                this.authButtonText = user ? 'Sign-out' : 'Sign-in with Google'
                this.authFunction = user ? this.signOut : this.signIn
                this.isSignIn = user ? true : false
            })
        },
        signIn() {
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider).then(user => {
                alert('success')
                this.$router.push('/booklists')
            })
        },
        signOut() {
            firebase.auth().signOut()
        },
        isUserSignIn() {
            return !!firebase.auth().currentUser || false
        },
        getUserPicUrl() {
            return firebase.auth().currentUser.photoURL || '../../static/images/profile_placeholder.png'
        },
        getUserName() {
            return firebase.auth().currentUser.displayName
        }
    }
}
</script>


<style scoped></style>
