import React, { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.css';
const Form = React.lazy(() => import("./components/Form/Form.jsx"))
import { DotLoader } from "react-spinners";
import { BrowserRouter, Routes, Route } from "react-router-dom"
// const Home = import("./Home")
import Home from "./Home.jsx";
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"))
const Footer = React.lazy(()=>import("./components/Footer/Footer"))
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="w-full flex justify-center items-center min-h-screen"><DotLoader color="#D0021B" /></div>}>
      <Navbar/>
      <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adler/message" element={<Form />} />
      </Routes>
      <Footer/>
      </Suspense >
    </BrowserRouter>
  );
}

export default App;
