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
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";

function App() {
  const [PanelParametersSecond, setPanelParametersSecond] = useState(null);
  const choosePanelParametersSecond = (PanelParametersSecond) => {
    setPanelParametersSecond({ PanelParametersSecond: PanelParametersSecond });
  };
  console.log(PanelParametersSecond?.PanelParametersSecond);
  var [actuallang, setactuallange] = useState("Polish");
  var [FootText, setFootText] = useState({
    kontakt: "Kontakt",
    reg: "Regulamin",
    regskl: "Regulamin sklepu",
    polit: "Polityka Prywatności",
    Social: "Nasze Sociale",
    question: "Najczęściej zadawane pytania",
  });
  var [MainText, setMainText] = useState({
    descriptionH1: "Platforma dostarczająca sprzęt do nurkowania",
    descriptionH5:
      "Szybka wysyłka sprzętu 24/7, niskie ceny, oraz pełna obsługa",
  });
  var [RegisterText, setRegisterText] = useState({
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
    }
    if (actuallang === "English") {
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
  // const [acountInfo, setacountInfo] = useState(null);
  // const AcountInfoFunction = (setter) => {
  //   if (e) {
  //     setacountInfo(e.value);
  //   }
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Head setLanguege={setLanguege} />
        <Routes>
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
      </BrowserRouter>
      <Footer FootText={FootText} />
    </div>
  );
}
export default App;
