import React from 'react';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App bg-slate-900">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
