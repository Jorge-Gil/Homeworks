import { firebaseStorage } from "./config"
import { ref, uploadBytesResumable, listAll, deleteObject  } from "firebase/storage";

export const upload = (file) => {

    if (!file) {
        alert("Please choose a file first!")
    }
    const storageRef = ref(firebaseStorage,`/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return uploadTask;
}

export const  getAll = async () => {

    const listRef = ref(firebaseStorage, '/files/');
    return listAll(listRef);
}

export const deleteFile = async (fileName) => {
    const fileRef = ref(firebaseStorage, `files/${fileName}`);
    await deleteObject(fileRef);
  }