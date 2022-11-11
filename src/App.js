import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/home";
import { List } from "./pages/list";
import { Detail } from "./pages/detail";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/list/:msbn" element={<List/>}/>
        <Route exact path="/detail/:msbn/:date" element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
