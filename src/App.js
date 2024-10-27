import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Information from './components/Information';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  const [headerText, setHeaderText] = useState("Hello World");

  const changeHeaderText = (newText) => {
    setHeaderText(newText);
  };

  return (
    <div className="App">
      <NavBar/>
      <Header text={headerText} />
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<MainPage changeHeaderText={changeHeaderText} />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/information" element={<Information/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
