import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar fixed z-10 bg-black text-neutral-content ">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">CHATsy</a>
      </div>

      {currentUser ? 
        <button
          onClick={handleLogout}
          className="btn btn-light max-auto max-w-4xl px-5"
        >
          Logout
        </button>
      : 
        ""
      }
    </div>
  );
};

export default Navbar;
