import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Globe from "./pages/Globe.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/globe" element={<Globe />} />
      </Routes>
    </Router>
  );
}

export default App;
