import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import { CountryDetail } from "./components/CountryDetails";

function App() {
  return (
    <Routes>
      {/* Route principale per la Homepage */}
      <Route path="/" element={<Homepage />} />

      {/* Route dinamica per i dettagli del paese */}
      <Route path="/detail/country/:name" element={<CountryDetail />} />
    </Routes>
  );
}

export default App;