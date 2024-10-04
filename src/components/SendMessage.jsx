import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const {currentUser} = UserAuth();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() ==="") {
        alert("Enter valid message!");
        return;
    }


    try {
        const {uid, displayName, photoURL} = currentUser;
        await addDoc(collection(db, "messages"),{
            text: value,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid

        })
        
    } catch (error) {
        
    }
    setValue("");
    console.log(value);
  };
  return (
    <div className="w-full py-10 fixed bottom-0 bg-green-700 shadow-lg">
      <form onSubmit={handleSendMessage} className="containerWrap flex px-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none rounded-r-none"
          type="text"
        />
        <button
          type="submit"
          className="w-auto bg-black text-white rounded-r-lg px-5 text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
