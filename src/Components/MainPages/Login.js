import React from "react";
import { useState } from "react";
import { Input, Button } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import { encrypt, decrypt, compare } from "n-krypta";
import { styled } from "@mui/system";

// import { Cookie } from "@mui/icons-material";
import Axios, { isCancel, AxiosError } from "axios";
import { Link } from "react-router-dom";
// import useHistory from "use-history";
import { useNavigate } from "react-router-dom";
import {
  InputAdornment,
  TextField,
  IconButton,
  inputLabelClasses,
  InputLabel,
} from "@mui/material";
import { useEffect } from "react";
import { useRef } from "react";
import { useJwt } from "react-jwt";
import "./Login.css";
var ppppone = 777544222;

const zmp = "aaakotkidwa";
const MyComponent = styled("div")({
  width: "200px",
  margin: "20px",
  marginLeft: "  auto",
  marginRight: "auto",

  color: "darkslategray",
  backgroundColor: "gray",
  padding: 8,
  borderRadius: 4,
});
const WhiteInput = styled(Input)({
  ":after": {
    borderBottom: "1px solid rgba(255, 0, 0)",
  },
});
const stylelabel = {
  textAlign: "left",
  width: "20%",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "0px",
  fontSize: "1.2rem",
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  // color: "#e6bf85",
  // fontWeight: "bold",
  marginBottom: "0px",
};

function Login({ loginText, choosePanelParametersSecond }) {
  const navigate = useNavigate();
  const [LgP, setLgP] = useState(true);
  useEffect(() => {
    choosePanelParametersSecond("sdadsd");
    if (loginText.pass === "Haslo:") {
      setLgP(true);
    } else if (loginText.pass === "Password:") {
      setLgP(false);
    }
  }, [loginText]);

  const handleChangetwo = (selectedOption) => {
    console.log(selectedOption.value);
  };
  const [levelcheckPassTwo, setlevelcheckPassTwo] = useState(4);

  var [loginMail, setloginMail] = useState("");
  var [loginPassword, setloginPassword] = useState("");
  const loginEmailref = useRef();
  const loginEmailchange = () => {
    console.log(loginEmailref.current.value);
    setloginMail(loginEmailref.current.value);
  };
  const loginPasswordRef = useRef();
  const loginPasswordchange = () => {
    console.log(loginPasswordRef.current.value);
    setloginPassword(loginPasswordRef.current.value);
  };
  const token = "Your JWT";
  const { decodedToken, isExpired, reEvaluateToken } = useJwt(token);
  const [messageLogin, setmessageLogin] = useState("");
  const [valuesfromserver, setvaluesfromserver] = useState(null);
  const LoginServer = async () => {
    const secret = `doyo${ppppone}nothisisashit${zmp}6194684`;
    const encryptedss = encrypt(loginPassword, secret);

    // Pisząc w Reactcie dane powinieneś trzymać np w reduxie.
    const obj = {
      LoginMail: loginMail,
      LoginPassword: encryptedss,
    };

    Axios.defaults.withCredentials = true;
    Axios.post("http://localhost:3002/login", obj, { withCredentials: true })
      .then((res) => {
        // console.log(res);

        const updateToken = () => {
          const newToken = "A new JWT";
          reEvaluateToken(newToken); // decodedToken and isExpired will be updated
        };
        updateToken();
        setvaluesfromserver(res.data.response);

        console.log(res.data.response);
        localStorage.setItem("token", res.data.response);
        console.log(valuesfromserver);
        // console.log("nie wywalilo bazy danych");
        if (LgP) {
          // ustawiaj po poslku
          switch (res?.data?.dbstatus) {
            case "login":
              setmessageLogin({ color: "green", text: "Pomyślnie zalogowano" });
              // history.push("https://www.example.com");
              navigate("/DashboardUser");
              break;
            case "notlogin":
              setmessageLogin({
                color: "red",
                text: (
                  <div>
                    Złe Hasło{"  "} <br />
                    <Link to="/Register" className="LinkPanel">
                      nie pamiętasz? Zresetuj
                    </Link>
                  </div>
                ),
              });
              break;
            case "wrongemail":
              setmessageLogin({ color: "red", text: "Zły Email" });
              break;
            case "error":
              setmessageLogin({
                color: "red",
                text: "Coś poszło nie tak, przepraszamy",
              });
              break;
            default:
              setmessageLogin({
                color: "red",
                text: "Coś poszło nie tak, przepraszamy",
              });
              break;
          }
        }
        if (!LgP) {
          //set englih names of information values
          switch (res.data.dbstatus) {
            case "login":
              setmessageLogin({ color: "green", text: "Login sucess" });
              navigate("/DashboardUser");
              break;
            case "notlogin":
              setmessageLogin({
                color: "red",
                text: (
                  <div>
                    Wrong Password{"  "} <br />
                    <Link to="/Register" className="LinkPanel">
                      Not remember? Restet
                    </Link>
                  </div>
                ),
              });
              break;
            case "wrongemail":
              setmessageLogin({ color: "red", text: "Wrong E-mail" });
              break;
            case "error":
              setmessageLogin({
                color: "red",
                text: "Something is wrong, Sorry",
              });
              break;
            default:
              setmessageLogin({
                color: "red",
                text: "Something is wrong, Sorry",
              });
              break;
          }
        }
        if (res.data.dbstatus === "userfind") {
          if (LgP) {
            setmessageLogin({ color: "green", text: "Pomyślnie zalogowano" });
          }
          if (!LgP) {
            setmessageLogin({ color: "green", text: "Login Succes" });
          }
        }
        if (res.data.dbstatus === "notuser") {
          if (LgP) {
            setmessageLogin({ color: "red", text: "Zły E-mail lub Hasło" });
          }
          if (!LgP) {
            setmessageLogin({
              color: "red",
              text: "Wrong E-mail or wrong Password",
            });
          }
        }
        if (res.data.dbstatus === "error") {
          if (LgP) {
            setmessageLogin({
              color: "red",
              text: "Coś poszło nie tak,spróbuj ponownie",
            });
          }
          if (!LgP) {
            setmessageLogin({
              color: "red",
              text: "Somthing is wrong, try again",
            });
          }
        }
      })
      .catch(function (error) {
        console.log("Error ", error);
        if (LgP) {
          setmessageLogin({
            color: "red",
            text: "Coś poszło nie tak, przepraszamy",
          });
        }
        if (LgP) {
          setmessageLogin({
            color: "red",
            text: "Something is wrong, try again",
          });
        }
      });
  };
  const componentLoginMess = (
    <InputLabel
      className="messLogin"
      style={{
        textAlign: "right",
        width: "auto",
        maxWidth: "200px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0px",
        fontSize: "0.8rem",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        color: messageLogin?.color,
        // fontWeight: "bold",
        marginBottom: "0px",
      }}>
      {messageLogin?.text}
    </InputLabel>
  );
  console.log(messageLogin);
  var validateColor = [
    "rgb(69, 86, 157)",
    "rgb(255, 0, 0)",
    "rgb(255, 94, 0)",
    "rgb(255, 149, 0)",
    "rgb(255, 191, 0)",
    "rgb(255, 255, 69)",
    "rgb(0, 255, 4)",
  ];

  var sxInputTextPassTwo = {
    padding: "5px",
    mx: 3,
    width: "100%",
    textIndent: "17px",
    py: "12px",
    fontSize: "20px",
    borderRadius: "3px",
    border: "1.5px solid rgba(0, 0, 0, 0.4)",
    display: "block",
    margin: "10px auto",
    inputRoot: {
      width: "300px",
    },

    "&&.MuiInputBase-root:after": {
      borderBottom: `4px solid ${validateColor[levelcheckPassTwo + 1]}`, // stylowanie tego dolnego obramowania
      transition: "0.5s",
    },
  };
  // login validation

  const [isBooltwo, setIsBooltwo] = useState(true);
  const onClickHandlertwo = () => {
    setIsBooltwo(!isBooltwo);
  };

  return (
    <div>
      <div className="templates">
        <form>
          <InputLabel className="Labels" style={stylelabel}>
            E-mail:
          </InputLabel>
          <div className="black">
            <Input
              onChange={loginEmailchange}
              inputRef={loginEmailref}
              sx={sxInputTextPassTwo}
              slotProps={{ input: { className: "My input" } }}
            />
          </div>
          <InputLabel className="Labels" style={stylelabel}>
            {loginText.pass}
          </InputLabel>
          <div className="black">
            <Input
              id="Pass"
              onChange={loginPasswordchange}
              inputRef={loginPasswordRef}
              defaultValue=""
              type={isBooltwo ? "password" : "text"}
              sx={sxInputTextPassTwo}
              slotProps={{ input: { className: "Password-Input" } }}
            />
            <div className="div-toglepassword">
              {isBooltwo ? (
                <Visibility onClick={onClickHandlertwo} className="adam" />
              ) : (
                <VisibilityOff onClick={onClickHandlertwo} />
              )}
            </div>
          </div>
          {componentLoginMess}

          <div className="black">
            <Button
              onClick={LoginServer}
              sx={{
                mx: 1,
                width: "100%",
                textIndent: "17px",
                py: "12px",
                fontSize: "20px",
                backgroundColor: "#02081d",

                borderRadius: "3px",
                color: " #e6bf85",
                margin: "0",
                marginTop: "40px",

                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "700",
                border: "1.5px solid rgba(0, 0, 0, 0.4)",
                "&&.MuiInputBase-root:after": {
                  borderBottom: "4px solid rgb(62, 86, 157)", // stylowanie tego dolnego obramowania
                  transition: "0.5s",
                  color: "#02081d",
                },
              }}>
              {loginText.signIn}
            </Button>
          </div>
          <div className="black">
            <Link to="/Register" className="LinkPanel">
              <Button
                sx={{
                  mx: 1,
                  width: "40%",
                  textIndent: "17px",
                  py: "3px",
                  fontSize: "10px",
                  backgroundColor: "#02081d",

                  borderRadius: "3px",
                  color: " #e6bf85",
                  margin: "0",
                  marginTop: "20px",
                  position: "absolute",
                  right: "0",

                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "700",
                  border: "1.5px solid rgba(0, 0, 0, 0.4)",
                  "&&.MuiInputBase-root:after": {
                    borderBottom: "4px solid rgb(62, 86, 157)", // stylowanie tego dolnego obramowania
                    transition: "0.5s",
                    color: "#02081d",
                  },
                }}>
                {loginText.singUp}
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
