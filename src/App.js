import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Donate from "./routes/Donate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
