import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import BannerServicos from "./components/bannerservicos/BannerServicos";
import FaleConosco from "./components/faleconosco/FaleConosco";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <BannerServicos />
        <FaleConosco />
        <div>
          <Routes>
            <Route path="/" />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
