import React, { useEffect } from "react";
import "./Dashbordrduser.css";
import Axios, { isCancel, AxiosError } from "axios";
import { useState } from "react";
import {
  InputAdornment,
  TextField,
  IconButton,
  inputLabelClasses,
  InputLabel,
} from "@mui/material";
import { useRef } from "react";
import { useJwt } from "react-jwt";
import { Input, Button } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

function Dashbordrduser() {
  const navigate = useNavigate();
  const [returnedData, setreturnedData] = useState({});
  const obj = {};
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3002/returndata", { withCredentials: true })
      .then((res) => {
        setreturnedData(res.data);
      })
      .catch(function (error) {
        console.log("Error ", error);
      });
  }, []);

  const [isBooltwo, setIsBooltwo] = useState(true);
  const onClickHandlertwo = () => {
    setIsBooltwo(!isBooltwo);
  };
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
      borderBottom: `4px solid gray`, // stylowanie tego dolnego obramowania
      transition: "0.5s",
    },
  };
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

  var [loginMail, setloginMail] = useState("");
  const loginEmailref = useRef();
  const loginEmailchange = () => {
    setloginMail(loginEmailref.current.value);
  };
  var [usernamechanged, setusernamechanged] = useState("");
  const usernamechangeref = useRef();
  const usernamechanges = () => {
    setusernamechanged(usernamechangeref.current.value);
  };
  var [streedchanged, setstreedchanged] = useState("");
  const streedchangeref = useRef();
  const streedchanges = () => {
    setstreedchanged(streedchangeref.current.value);
  };
  var [postcodechanged, setpostcodechanged] = useState("");
  const postcodechangeref = useRef();
  const postcodechanges = () => {
    setpostcodechanged(postcodechangeref.current.value);
  };
  var [citychanged, setcitychanged] = useState("");
  const citychangeref = useRef();
  const citychanges = () => {
    setcitychanged(citychangeref.current.value);
  };
  const objecttochange = [
    { name: "email", value: loginMail },
    { name: "username", value: usernamechanged },
    { name: "street", value: streedchanged },
    { name: "postCode", value: postcodechanged },
    { name: "city", value: citychanged },
  ];
  const token = "Your JWT";
  const { decodedToken, isExpired, reEvaluateToken } = useJwt(token);
  const [changedserver, setchangedserver] = useState("");
  const changeValues = async () => {
    var leftab = [];
    var righttab = [];
    objecttochange.forEach((e) => {
      if (e?.value?.length > 1) {
        leftab.push(e.name);
        // console.log(e.name, ":", e.value);
        righttab.push(e.value);
      }
    });
    // console.log(leftab, righttab);

    const obj = {
      id: returnedData?.id,
      lefttab: leftab,
      righttab: righttab,
    };

    Axios.defaults.withCredentials = true;
    Axios.post("http://localhost:3002/changeSValue", obj, {
      withCredentials: true,
    })
      .then((res) => {
        const updateToken = () => {
          const newToken = "A new JWT";
          reEvaluateToken(newToken); // decodedToken and isExpired will be updated

          setchangedserver(res?.data?.message);
        };
        updateToken();
      })
      .catch(function (error) {
        console.log("Error ", error);
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
        color: changedserver?.color,
        // fontWeight: "bold",
        marginBottom: "0px",
      }}
    >
      {changedserver?.text}
    </InputLabel>
  );
  //reset pass

  const genereteresetToken = async () => {
    // console.log(leftab, righttab);

    const obj = {
      email: returnedData?.email,
    };

    Axios.defaults.withCredentials = true;
    Axios.post("http://localhost:3002/generateresetpass", obj, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res?.data);
        if (res?.data) {
          navigate(res?.data);
        }
      })
      .catch(function (error) {
        console.log("Error ", error);
      });
  };
  const LoginOut = async () => {
    const obj = {};

    Axios.defaults.withCredentials = true;
    Axios.post("http://localhost:3002/logout", obj, {
      withCredentials: true,
    })
      .then((res) => {
        const updateToken = () => {
          const newToken = "A new JWT";
          reEvaluateToken(newToken); // decodedToken and isExpired will be updated

          setchangedserver(res?.data?.message);
          if (res?.data?.message?.color == "green") {
            navigate("/Login");
          }
        };
        updateToken();
        setreturnedData(res?.data);

        console.log("mess", res?.data);
      })
      .catch(function (error) {
        console.log("Error ", error);
      });
  };

  return (
    <div className="dash-user">
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
              placeholder={returnedData?.email}
            />
          </div>
          <InputLabel className="Labels" style={stylelabel}>
            Imie Nazwisko:
          </InputLabel>
          <div className="black">
            <Input
              onChange={usernamechanges}
              inputRef={usernamechangeref}
              sx={sxInputTextPassTwo}
              slotProps={{ input: { className: "My input" } }}
              placeholder={returnedData?.personInfo}
            />
          </div>
          <InputLabel className="Labels" style={stylelabel}>
            Ulica
          </InputLabel>
          <div className="black">
            <Input
              onChange={streedchanges}
              inputRef={streedchangeref}
              sx={sxInputTextPassTwo}
              slotProps={{ input: { className: "My input" } }}
              placeholder={returnedData?.street}
            />
          </div>
          <InputLabel className="Labels" style={stylelabel}>
            Kod pocztowy
          </InputLabel>
          <div className="black">
            <Input
              onChange={postcodechanges}
              inputRef={postcodechangeref}
              sx={sxInputTextPassTwo}
              slotProps={{ input: { className: "My input" } }}
              placeholder={returnedData?.postCode}
            />
          </div>
          <InputLabel className="Labels" style={stylelabel}>
            Miasto
          </InputLabel>
          <div className="black">
            <Input
              onChange={citychanges}
              inputRef={citychangeref}
              sx={sxInputTextPassTwo}
              slotProps={{ input: { className: "My input" } }}
              placeholder={returnedData?.city}
            />
          </div>
          <div className="black">{componentLoginMess}</div>
          <div className="black" style={{ marginBottom: "50px" }}>
            <Link>
              <Button
                onClick={genereteresetToken}
                sx={{
                  mx: 1,
                  width: "40%",
                  textIndent: "17px",
                  py: "3px",
                  fontSize: "10px",
                  backgroundColor: "#02081d",
                  marginBottom: "50px",

                  borderRadius: "3px",
                  color: " #e6bf85",
                  margin: "0",
                  marginTop: "20px",
                  position: "absolute",
                  left: "0",

                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "700",
                  border: "1.5px solid rgba(0, 0, 0, 0.4)",
                  "&&.MuiInputBase-root:after": {
                    borderBottom: "4px solid rgb(62, 86, 157)", // stylowanie tego dolnego obramowania
                    transition: "0.5s",
                    color: "#02081d",
                  },
                }}
              >
                Resetuj hasło
              </Button>
            </Link>
          </div>
          <div className="black" style={{ marginBottom: "20px" }}>
            <Button
              onClick={changeValues}
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
              }}
            >
              zmień dane
            </Button>
            <Button
              onClick={LoginOut}
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
              }}
            >
              Wyloguj
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Dashbordrduser;
