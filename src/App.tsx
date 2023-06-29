import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Houses from "./pages/houses/Houses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home goto="home" />} />
        <Route path="/acercade" element={<Home goto="acercade" />} />
        <Route path="/casa-colonial" element={<Houses name="casa colonial" />} />
        <Route path="/tiny-house" element={<Houses name="tiny house" />} />
        <Route path="/servicios" element={<Home goto="servicios" />} />
        <Route path="/galeria" element={<Home goto="galeria" />} />
        <Route path="/contacto" element={<Home goto="contacto" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
