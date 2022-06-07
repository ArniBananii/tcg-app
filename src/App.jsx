import React from "react";
import "./style/App.css";
import CreateList from "./CreateList";
import { AuthContextProvider } from "./components/AuthContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Nav from "./components/Nav";
import Detail from "./views/Detail";
import { FavContextProvider } from "./components/FavContext";
import ProtectedRoute from "../src/ProtectedRoute";
import Register from "./views/Register";
import Login from "./views/Login";

import Favorites from "./views/Favorites";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <FavContextProvider>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>

              <Route path="cardList" element={<CreateList />}></Route>
              <Route path="cardList/:name" element={<Detail />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute>
                    <Favorites />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </FavContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;

//! storybook.js, try it!
