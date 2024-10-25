// import React, { useEffect } from "react";
// import { UserAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const { currentUser, signinWithGoogle } = UserAuth();
//   console.log(currentUser);

//   const handleLogin = async () => {
//     console.log("Giriş etməyə çalışır...");
//     try {
//       await signinWithGoogle();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (currentUser) {
//       navigate("/chat");
//     }

//   }, [currentUser]);

//   return (
//     <div
//       className="hero min-h-screen bg-base-200"
//       style={{
//         backgroundImage:
//           "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
//       }}
//     >
//       <div className="hero-overlay bg-opacity-60"></div>
//       <div className="hero-content text-neutral-content text-center">
//         <div className="max-w-md">
//           <h1 className="mb-5 text-5xl font-bold flex text-center justify-center">
//             Hello <div className="swap-on">🥳</div>
//           </h1>
//           <p className="mb-5 py-6">
//             Join the conversation, meet new people and make connections in one
//             shared room.
//           </p>
//           <button onClick={handleLogin} className="btn bg-slate-100 btn-light">
//             Login with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();
  console.log("İstifadəçi statusu:", currentUser); // Debugging log

  const handleLogin = async () => {
    console.log("Giriş etməyə çalışır...");
    try {
      await signinWithGoogle();
      console.log("Giriş uğurlu oldu"); // Debugging log
    } catch (error) {
      console.log("Login error:", error); // Debugging log
    }
  };

  useEffect(() => {
    console.log("Current user changed:", currentUser); // Debugging log
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser, navigate]);

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold flex text-center justify-center">
            Hello <div className="swap-on">🥳</div>
          </h1>
          <p className="mb-5 py-6">
            Join the conversation, meet new people and make connections in one
            shared room.
          </p>
          <button onClick={handleLogin} className="btn bg-slate-100 btn-light">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

