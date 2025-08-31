import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";   // ✅ this is important
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";   // ✅ import Toaster

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>

        <App />
         <Toaster position="top-center" reverseOrder={false} />  {/* ✅ add Toaster */}
    </BrowserRouter>
  </React.StrictMode>
);
