import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ListPassagens from "./components/passagens/listpassagens/ListPassagens";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/passagens" element={<ListPassagens />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
