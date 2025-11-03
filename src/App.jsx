import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavHeader from './components/Navigation';
import Home from './components/Home';
import Imageone from './components/Imageone';
import Gallery from './components/Gallery';
import Adobe from './components/Adobe';
import { useImageProtection } from './hooks/useImageProtection';

function App() {
  // Initialize global image protection
  useImageProtection();

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavHeader />}>
          <Route index element={<Home />} />
          <Route path="/:imageno" element={<Imageone />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Adobe" element={<Adobe />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
