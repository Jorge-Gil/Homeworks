import React from "react";
import { useState, useEffect } from "react";
import useCollection from "./firebase/firestore";

export const Crud = () => {
  const [user, setUser] = useState({ name: "" });
  const [selectedId, setSelectedId] = useState(null);
  const { add, getAll, results, isPending, update, remove } = useCollection(
    "users"
  );

  const getAllDocs = async () => {
    await getAll();
  };

  const save = async () => {
    await add(user);
    await getAllDocs();
  };

  const handleSetUser = (event) => {
    setUser({ name: event.target.value });
  };

  const handleSelect = (id) => {
    setSelectedId(id);
    setUser(results.find((item) => item.id === id));
  };

  const handleUpdate = async () => {
    await update(selectedId, user);
    await getAllDocs();
    setSelectedId(null);
    setUser({ name: "" });
  };

  const handleRemove = async (id) => {
    await remove(id);
    await getAllDocs();
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <>
      <input type="text" onChange={handleSetUser} value={user.name} />
      {selectedId ? (
        <>
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
          <button type="button" onClick={() => setSelectedId(null)}>
            Cancel
          </button>
        </>
      ) : (
        <button type="button" onClick={save}>
          Save
        </button>
      )}
      {isPending ? <span>saving...</span> : ""}
      <ul>
        {results.map((item) => {
          return (
            <li key={item.id}>
              <span onClick={() => handleSelect(item.id)}>
                {JSON.stringify(item)}
              </span>
              <button type="button" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
