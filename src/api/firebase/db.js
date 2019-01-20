// import Firestore from "@/api/firebase/firestore"
//
// export default {
//     fetchAllBooksData() {
//         return Firestore.getBooksAllData()
//     }
// }

// const db = {
//     fetchAllBooksData: function(data) {
//         return firestoreApp.getBooksAllData(data)
//     }
// }
// export default db

// function saveImageMessage(file) {
//     // TODO 9: Posts a new image as a message.
//     // 1 - We add a message with a loading icon that will get updated with the shared image
//     firebase.database().ref('/messages/').push({
//         name: getUserName(),
//         imageUrl: LOADING_IMAGE_URL,
//         profilePicUrl: getProfilePicUrl()
//     }).then(function(messageRef) {
//         // 2 - Upload the image to Cloud Storage.
//         let filePath = firebase.auth().currentUser.uid + '/' + messageRef.key + '/' + file.name;
//         return firebase.storage().ref(filePath).put(file).then(function(fileSnapshot){
//             // 3 - Generate a public URL for the file.
//             return fileSnapshot.ref.getDownloadURL().then((url) => {
//                 // 4 - Update the chat message placeholder with the image's URL.
//                 return messageRef.update({
//                     imageUrl: url,
//                     storageUri: fileSnapshot.metadata.fullPath
//                 });
//             });
//         });
//     }).catch(function(error) {
//         console.log('There was an error uploading a file to Cloud Storage: ', error);
//     });
// }
