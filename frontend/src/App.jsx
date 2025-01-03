import "./App.css";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>  
     <Navbar/>
       <main className="main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
    </Routes>
  </main>
  </div>
  );
}
export default App;
