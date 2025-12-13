import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './components/Home';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Stories from './pages/Stories';
import Blog from './pages/Blog';
import Partner from './pages/Partner';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
             <Route path="/signup" element={<Signup />} />
             <Route path='/about' element={<About/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/stories' element={<Stories/>}/>
             <Route path='/blogs' element={<Blog/>}/>
             <Route path='/partner' element={<Partner/>}/>
            
          </Routes>
        </main>
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
