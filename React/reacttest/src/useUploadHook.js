import React, { useState } from "react";
import { getAll, upload } from "./firebase/files";
import { getDownloadURL, ref, deleteObject  } from "firebase/storage";
import { firebaseStorage } from "./firebase/config.js";

export const useUploadHook = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const uploadTask = upload(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),

      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setFiles(list => [...list, url]);
      }
    );
  };

  const handleGetAll = async () => {
    const { items } = await getAll();
    items.forEach(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      setFiles(list => [...list, url]);
    });
  };

 const handleDelete = async (url) => {
    const storageRef = refFromURL(url);

    if (storageRef) {
      await deleteObject(storageRef);
      setFiles((list) => list.filter((item) => item !== url));
    }
  };

  const refFromURL = (url) => {
    const storage = firebaseStorage();
    const storageRef = storage.ref();
    const path = url.replace(storageRef.child("/").toString(), "");
    return ref(storage, path);
  };
  

  return{ files, percent, handleChange, handleUpload, handleGetAll, handleDelete};
};
