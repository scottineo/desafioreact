import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import BannerServicos from "./components/bannerservicos/BannerServicos";
import FaleConosco from "./components/faleconosco/FaleConosco";
import Passagem from "./components/passagens/cardpassagem/CardPassagem";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Banner />
          <BannerServicos />
          <FaleConosco />
          <Passagem />
          <div>
            <Routes>
              <Route path="/" />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
