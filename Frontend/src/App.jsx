import { useState } from "react";

import "./App.css";
import Left from "./pages/left/Left";
import Right from "./pages/right/Right";
import Logout from "./components/Logout";

function App() {
  return (
    <div className=" flex h-screen bg-slate-900 ">
      <Logout />
      <Left />
      <Right />
    </div>
  );
}

export default App;
