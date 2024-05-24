import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Gracien from "./components/Gracien";
import Footer from "./components/Footer"
import Aenon from "./components/Aenon";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className=" max-w-screen-2xl mx-auto"></div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gracien" element={<Gracien />} />
        <Route path="/aenon" element={<Aenon/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
