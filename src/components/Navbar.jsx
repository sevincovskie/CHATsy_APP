


import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("Logout error:", error); // Debugging log
    }
  };

  return (
    <div className="navbar fixed z-10 bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Chatsy</a>
        {currentUser ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;

