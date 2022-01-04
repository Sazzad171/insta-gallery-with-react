import { useState, useEffect } from "react";

// for router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// axios
import axios from "axios";

// css import
import "./assets/css/style.css"

// all components import
import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";

function App() {

  // state
  

  // fetch initial data
  

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
