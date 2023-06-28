import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Houses from "./pages/houses/Houses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casa-colonial" element={<Houses name="casa colonial" />} />
        <Route path="/tiny-house" element={<Houses name="tiny house" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
