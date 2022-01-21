import React, { Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import All from "./components/All/All";
import { Routes, Route } from "react-router-dom";
import Action from './components/Action/Action';
import Puzzle from "./components/Puzzle/Puzzle";
import Sport from "./components/Sport/Sport";
import Arcade from "./components/Arcade/Arcade";
import Adventure from "./components/Adventure/Adventure";
import Footer from "./components/Footer";



function App() {
  return (
    <Fragment>
      <Header />

      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/action" element={<Action />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/Sport" element={<Sport />} />
        <Route path="/arcade" element={<Arcade />} />
        <Route path="/adventure" element={<Adventure />} />
      </Routes>

      <Footer />

    </Fragment>
  );
}

export default App;
