<template>
<div class="my-4">
    <h1 class="my-4">{{ title }}</h1>
    <p class="mx-2">{{ description }}</p>
    <h2 class="my-4">{{ name }}</h2>
    <p class="my-4">さあ、早速始めてみよう</p>
    <sign-in/>
</div>
</template>


<script>
import SignIn from "@/components/SignIn"

export default {
    components: {
        SignIn
    },
    data() {
        return {
            name: 'Sharing Books and Borrow',
            title: 'Welcome to sharebnb',
            description: "個人が簡単に安全に本を貸し借り出来るサービス"
        }
    }
}
// import firebaseApp from '@/api/firebase/firebase'
// import firebase from 'firebase'
// // import FirebaseAuth from '@/api/firebase/firebaseAuth'
//
// export default {
//     name: 'SignIn',
//     data() {
//         return {
//             userName: null,
//             userPic: null,
//             isSignIn: null,
//             authButtonText: null,
//             authFunction: function() {},
//         }
//     },
//     created() {
//        this.onAuthStateChanged()
//     },
//     methods: {
//         onAuthStateChanged() {
//             firebase.auth().onAuthStateChanged(user => {
//                 this.userName = user ? this.getUserName() : null
//                 this.userPic = user ? this.getUserPicUrl() : null
//                 this.authButtonText = user ? 'Sign-out' : 'Sign-in with Google'
//                 this.authFunction = user ? this.signOut : this.signIn
//                 this.isSignIn = user ? true : false
//             })
//         },
//         signIn() {
//             const provider = new firebase.auth.GoogleAuthProvider()
//             firebase.auth().signInWithPopup(provider).then(user => {
//                 alert('success')
//                 this.$router.push('/booklists')
//             })
//         },
//         signOut() {
//             firebase.auth().signOut()
//         },
//         isUserSignIn() {
//             return !!firebase.auth().currentUser || false
//         },
//         getUserPicUrl() {
//             return firebase.auth().currentUser.photoURL || '../../static/images/profile_placeholder.png'
//         },
//         getUserName() {
//             return firebase.auth().currentUser.displayName
//         }
//     }
// }
</script>


<style scoped></style>
