import React, { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.css';
const Form = React.lazy(() => import("./components/Form/Form.jsx"))
import { DotLoader } from "react-spinners";
import { BrowserRouter, Routes, Route } from "react-router-dom"
// const Home = import("./Home")
import Home from "./Home.jsx";
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"))
function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="w-full flex justify-center items-center min-h-screen"><DotLoader color="#D0021B" /></div>}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adler/message" element={<Form />} />
      </Routes>
      </Suspense >
    </BrowserRouter>
  );
}

export default App;
