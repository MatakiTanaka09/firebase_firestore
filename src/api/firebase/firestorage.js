import firebase from 'firebase/app'
import firebaseConfig from './firebaseConfig'
import 'firebase/storage'

export class Firestorage
{

    constructor() {
        const firebaseApp = firebase.initializeApp(firebaseConfig)
        this.storage = firebaseApp.storage()
    }

    uploadBookImage() {
        let filePath = firebase.auth().currentUser.uid + '/' + messageRef.key + '/' + file.name;
        return firebase.storage().ref(filePath).put(file).then(function(fileSnapshot){
            // 3 - Generate a public URL for the file.
            return fileSnapshot.ref.getDownloadURL().then((url) => {
                // 4 - Update the chat message placeholder with the image's URL.
                return messageRef.update({
                    imageUrl: url,
                    storageUri: fileSnapshot.metadata.fullPath
                })
            })
        })
    }

}

export default Firestorage

