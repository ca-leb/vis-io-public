import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import * as React from "react";

function App() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;
