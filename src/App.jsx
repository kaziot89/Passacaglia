import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import innych stron, jeśli będą np. About, Contact
// import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* inne strony można dodać w ten sposób */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
