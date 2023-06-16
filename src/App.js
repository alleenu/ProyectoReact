import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Home from "./pages/Home";
import BarraDeBusqueda from "./pages/BarraDeBusqueda.jsx"
import About from "./pages/SobreNostros";
import Contact from "./pages/Contacto";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/BarraDeBusqueda" element={<BarraDeBusqueda />} /> {/* Ruta donde aparecerá la barra de búsqueda */}
        </Routes>
        <Footer />     
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
