import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom"; // Link import edin

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
    <div className="navbar fixed z-10 bg-black text-neutral-content">
      <div className="containerWrap flex justify-between">
        <Link to="/" className="btn btn-ghost normal-case text-xl">CHATsy</Link>
        
        <div>
          {currentUser ? (
            <>
              <span className="text-white">{currentUser.displayName}</span> {/* İstifadəçi adı */}
              <button
                onClick={handleLogout}
                className="btn btn-light max-auto max-w-4xl px-5 ml-4"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-light">Login</Link> // Daxil ol düyməsi
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

