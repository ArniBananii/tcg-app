import React from "react";
import "./style/App.css";
import CreateList from "./CreateList";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Nav from "./components/Nav";
import Detail from "./views/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="cardList" element={<CreateList />}></Route>
          <Route path="cardList/:name" element={<Detail />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//! storybook.js, try it!
