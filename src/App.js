import logo from "./logo.svg";
import "./App.css";
import Head from "./Components/Head";
import Footer from "./Components/Footer";
import Main from "./Components/MainPages/Main";
import ErorPage from "./Components/MainPages/ErorPage";
import Login from "./Components/MainPages/Login";
import Basket from "./Components/MainPages/Basket";
import Register from "./Components/MainPages/Register";
import Products from "./Components/MainPages/Products";
import DashboardUser from "./Components/MainPages/Dashbordrduser";
import Passchange from "./Components/MainPages/PassChange";
import MainAdmin from "./Components/Admin/MainAdmin";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// ... inne importy

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  const [PanelParametersSecond, setPanelParametersSecond] = useState(null);
  const choosePanelParametersSecond = (PanelParametersSecond) => {
    setPanelParametersSecond({ PanelParametersSecond: PanelParametersSecond });
  };

  const [actuallang, setactuallange] = useState("Polish");
  const [FootText, setFootText] = useState({
    kontakt: "Kontakt",
    reg: "Regulamin",
    regskl: "Regulamin sklepu",
    polit: "Polityka Prywatności",
    Social: "Nasze Sociale",
    question: "Najczęściej zadawane pytania",
  });
  const [MainText, setMainText] = useState({
    descriptionH1: "Platforma dostarczająca sprzęt do nurkowania",
    descriptionH5:
      "Szybka wysyłka sprzętu 24/7, niskie ceny, oraz pełna obsługa",
  });
  const [RegisterText, setRegisterText] = useState({
    name: "Imię i Nazwisko:",
    pass: "Hasło:",
    signIn: "ZALOGUJ SIĘ",
    singUp: "Zarejestruj SIĘ",
    Reset: "Zresetuj",
  });

  function setLanguege(e) {
    setactuallange(e);
  }

  useEffect(() => {
    if (actuallang === "Polish") {
      setFootText({
        kontakt: "Kontakt",
        reg: "Regulamin",
        regskl: "Regulamin sklepu",
        polit: "Polityka Prywatności",
        Social: "Nasze Sociale",
        question: "Najczęściej zadawane pytania",
      });
      setRegisterText({
        name: "Imię i Nazwisko:",
        pass: "Hasło:",
        signIn: "ZALOGUJ SIĘ",
        singUp: "Zarejestruj SIĘ",
        Reset: "Zresetuj",
      });
      setMainText({
        descriptionH1: "Platforma dostarczająca sprzęt do nurkowania",
        descriptionH5:
          "Szybka wysyłka sprzętu 24/7, niskie ceny, oraz pełna obsługa",
      });
    } else if (actuallang === "English") {
      setFootText({
        kontakt: "Contact",
        reg: "Policity",
        regskl: "Store Policy",
        polit: "Privacy Policy",
        Social: "Social Media",
        question: "Frequently Asked Questions",
      });
      setRegisterText({
        name: "Name and Last Name:",
        pass: "Password:",
        signIn: "Sign In",
        singUp: "Sign Up",
        Reset: "Reset",
      });
      setMainText({
        descriptionH1: "Platform providing diving equipment",
        descriptionH5:
          "Fast delivery of equipment 24/7, low prices, and full service",
      });
    }
  }, [actuallang]);

  return (
    <>
      {!isAdminRoute && <Head setLanguege={setLanguege} />}
      <Routes>
        <Route path="/admin/*" element={<MainAdmin />} />
        <Route index element={<Main />} />
        <Route path="/HomePages" element={<Main MainText={MainText} />} />
        <Route path="/Products" element={<Products />} />
        <Route
          path="/Login"
          element={
            <Login
              loginText={RegisterText}
              choosePanelParametersSecond={choosePanelParametersSecond}
            />
          }
        />
        <Route
          path="/Register"
          element={<Register RegisterText={RegisterText} />}
        />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/DashboardUser" element={<DashboardUser />} />
        <Route
          path="/Passchange"
          element={<Passchange RegisterText={RegisterText} />}
        />
        <Route path="*" element={<ErorPage />} />
      </Routes>
      {!isAdminRoute && <Footer FootText={FootText} />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
