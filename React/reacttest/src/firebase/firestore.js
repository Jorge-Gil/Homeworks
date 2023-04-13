import { db } from "./config";
import { collection, getDocs, addDoc, deleteDoc, doc, query, where, orderBy, updateDoc } from "firebase/firestore";
import { useState } from "react";

const useCollection = (table) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const getAll = async (condition) => {
    setResults([]);
    let resDoc = null,
      q = null;
    if (condition && condition.lengt == 3) {
      q = query(
        collection(db, table),
        where(condition[0], condition[1], condition[2])
      );
    } else {
      q = query(collection(db, table));
    }
    resDoc = await getDocs(q);

    resDoc.forEach((doc) => {
      setResults((list) => [...list, { ...doc.data(), id: doc.id }]);
    });
  };

  const add = async (doc) => {
    setError(null);
    setIsPending(true);

    try {
      const resDoc = await addDoc(collection(db, table), doc);
      console.log("Document ID: " + resDoc.id);
      setIsPending(false);
      return resDoc;
    } catch (err) {
      console.log(err.message);
      setError("Could not send the message");
      setIsPending(false);
      return null;
    }
  };

  const update = async (docId, doc) => {
    setError(null);
    setIsPending(true);

    try {
      const docRef = doc(db, table, docId);
      await updateDoc(docRef, doc);
      setIsPending(false);
      return true;
    } catch (err) {
      console.log(err.message);
      setError("Could not update the document");
      setIsPending(false);
      return false;
    }
  };

  const remove = async (docId) => {
    setError(null);
    setIsPending(true);

    try {
      const docRef = doc(db, table, docId);
      await deleteDoc(docRef);
      setIsPending(false);
      return true;
    } catch (err) {
      console.log(err.message);
      setError("Could not delete the document");
      setIsPending(false);
      return false;
    }
  };

  return { error, isPending, results, getAll, add, update, remove };
};
 
export default useCollection