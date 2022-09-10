import { Route, Routes } from "react-router-dom";

import "./styles.scss";

import VistaCard from "./views/VistaCard";
import Lista from "./views/Lista";
import Adicionar from "./views/Adicionar";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VistaCard />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/adicionar" element={<Adicionar />} />
      </Routes>
    </div>
  );
}
