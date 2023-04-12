import React, { useEffect, useState } from "react";
import { useUploadHook } from "./useUploadHook";
import { deleteFile } from "./firebase/files";

export const Upload = () => {
  const { files, percent, handleChange, handleUpload, handleGetAll, handleDelete } =
    useUploadHook();
    const [deleteFileList, setDeleteFileList] = useState([]);

  useEffect(() => {
    handleGetAll();
  }, []);

//   const handleDelete = async (fileName) => {
//     await deleteFile(fileName);
//     setDeleteFileList(list => [...list, fileName]);
//   }

  return (
    <div>
      <input type="file" onChange={handleChange} accept="" />
      <button className="border border-slate-800 rounded-md p-2" onClick={() => handleUpload()}>Upload to firebase</button>
      <p>{percent}% done</p>
      {files.map((item, key) => {
         return (
            <div key={key}>
              <img width="100px" src={item} alt=''/>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          )
        })}
      </div>
  );
};
