import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Tour from "./pages/tour";
import Travel from "./pages/travel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/tour" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
