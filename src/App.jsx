import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initFlowbite } from "flowbite";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import DetailPage from "./pages/DetailPage";
import "@splidejs/react-splide/css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:movieId" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
