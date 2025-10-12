import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Signup from './pages/Signup';
// import Login from './pages/Login';
import Home from './components/Home';
// import LiveScores from './pages/LiveScore';
// import Quize from './pages/Quize';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
             <Route path="/" element={<Home />} />
           {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/live" element={<LiveScores />} />
            <Route path="/quiz" element={<Quize />} /> */}
          </Routes>
        </main>
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
