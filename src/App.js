import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Daetail from "./pages/detailPage";
import Euro from "./pages/euro";
import Home from "./pages/home";
import National from "./pages/national";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/national" element={<National />} />
        <Route path="/euro" element={<Euro />} />
        <Route path="/euro/:id" element={<Daetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
