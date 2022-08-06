import Home from "./pages/Home";
import Usuario from "./pages/Usuario";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/" element={<h1>Sin ruta</h1>} />
    </Routes>
  );
}

export default App;
