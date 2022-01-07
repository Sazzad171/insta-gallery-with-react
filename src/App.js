import { Fragment } from "react";

// for router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// css import
import "./assets/css/style.css"

// all components import
import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {

  // state
  

  // fetch initial data
  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
          
          {/* root route */}
          <Route path="/" exact element={
            <Fragment>
              <UploadForm />
              <ImageGrid />
            </Fragment>
            } 
          />

          {/* about route */}
          <Route path="about" element={ <About /> } />

          {/* contact route */}
          <Route path="contact" element={ <Contact /> } />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
