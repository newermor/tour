import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import DetailEuroPage from "./pages/detailPageEuro";
import DetailNatsionalPage from "./pages/detailPageNational";
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
        <Route path="/national/:id" element={<DetailNatsionalPage />} />
        <Route path="/euro" element={<Euro />} />
        <Route path="/euro/:id" element={<DetailEuroPage/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
