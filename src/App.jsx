import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Worms from "./Worms";
import FourLoko from "./FourLoko";

import "./App.css";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/chips" element={<Chips />} />
          <Route exact path="/worms" element={<Worms />} />
          <Route exact path="/fourloko" element={<FourLoko />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
