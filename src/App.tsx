// import './App.css';
import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
//import { CountryDetail } from "./components/CountryDetails"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        {/* <Route path="detail/country/:name" element={<CountryDetail />} /> */}
      </Route>
    </Routes>
  );
}

export default App;