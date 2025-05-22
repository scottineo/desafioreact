import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <div>
          <Routes>
            <Route path="/" element={""} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
