import React from "react";

// import InputAdornment from "@mui/material/InputAdornment";

import {
  InputAdornment,
  TextField,
  IconButton,
  inputLabelClasses,
  InputLabel,
} from "@mui/material";

import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";
import { Input, Button } from "@mui/material";

import { Check, VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import { styled } from "@mui/system";
import { Ref } from "react";
import { useEffect } from "react";

import { useRef } from "react";
import validator from "validator";

import { encrypt, decrypt, compare } from "n-krypta";
import { Link } from "react-router-dom";
import "./Register.css";
import { text } from "@fortawesome/fontawesome-svg-core";
import Axios, { isCancel, AxiosError } from "axios";
var ppppone = 777544222;

const zmp = "aaakotkidwa";

function Register(RegisterText) {
  const handleChangetwo = (selectedOption) => {
    // console.log(selectedOption.value);
  };
  const [pAduppaone, setpAduppaone] = useState("");
  const [pAduppatwo, setpAduppatwo] = useState("");
  const [eMails, seteMails] = useState("");
  const [namess, setnamess] = useState("");

  // login validation
  const [LevelPaswordCheck, setLevelPaswordCheck] = useState("");
  const tabcheck = [
    {
      minLength: 8,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 0,
    },
    {
      minLength: 0,
      minLowercase: 1,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 0,
    },
    {
      minLength: 0,
      minLowercase: 0,
      minUppercase: 1,
      minNumbers: 0,
      minSymbols: 0,
    },
    {
      minLength: 0,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 1,
      minSymbols: 0,
    },
    {
      minLength: 0,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 1,
    },
    {
      minLength: 4,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 0,
    },
  ];
  // valitacka hasła

  var temporaryTabmostPass = [
    "qwerty",
    "123456789",
    "12345",
    "zaq12wsx",
    "polska",
    "111111",
    "1234",
    "misiek",
    "monika",
    "marcin",
    "12345678",
    "mateusz",
    "123qwe",
    "123",
    "1234567",
    "123123",
    "1234567890",
    "qwerty1",
    "karolina",
    "agnieszka",
    "bartek",
    "polska1",
    "password",
    "qwe123",
    "damian",
    "1qaz2wsx",
    "michal",
    "samsung",
    "qwerty123",
    "zxcvbnm",
    "kacper",
    "maciek",
    "kasia",
    "kochanie",
    "qwertyuiop",
    "lol123",
    "myszka",
    "kasia1",
    "666666",
    "qazwsx",
    "natalia",
    "0",
    "lukasz",
    "piotrek",
    "dupa",
    "daniel",
    "madzia",
    "1q2w3e",
    "1q2w3e4r",
    "misiaczek",
    "patryk",
    "komputer",
    "dragon",
    "haslo1",
    "adrian",
    "abc123",
    "matrix",
    "mateusz1",
    "kochamcie",
    "niunia",
    "1qazxsw2",
    "123321",
    "dupa123",
    "aaaaaa",
    "haslo",
    "marcin1",
    "weronika",
    "robert",
    "justyna",
    "wojtek",
    "dominika",
    "kamil1",
    "paulina",
    "kamil",
    "master",
    "klaudia",
    "dominik",
    "monika1",
    "123456a",
    "sebastian",
    "kocham",
    "misiek1",
    "654321",
    "mariusz",
    "1234qwer",
    "komputer1",
    "dupadupa",
    "bartek1",
    "magda",
    "michal1",
    "1111",
    "barcelona",
    "kamila",
    "11111",
    "patrycja",
    "tomek1",
    "ewelina",
    "wiktoria",
    "marta",
  ];
  // pierwsze haslo +
  var [levelcheck, setlevelcheck] = useState(-1);
  const validate = (value) => {
    var levelcheck = 0;
    // console.log(value);
    // console.log("adam");

    tabcheck.forEach((e) => {
      if (validator.isStrongPassword(value, e)) {
        levelcheck += 1;
      }
    });
    temporaryTabmostPass.forEach((e) => {
      if (value == e && levelcheck >= 2) {
        levelcheck -= 2;
      }
    });
    if (value.includes("123") && levelcheck >= 2) {
      levelcheck -= 1;
    }
    // console.log("Poziom zabezpieczewn to: ", levelcheck);

    if (value.length >= 3) {
      setlevelcheck(levelcheck);
    } else {
      setlevelcheck(-1);
    }
    if (levelcheck > 5) {
      levelcheck = 5;
    }
    const secret = `doyo${ppppone}nothisisashit${zmp}6194684`;
    const encrypteds = encrypt(value, secret);

    if (levelcheck == 5) {
      if (encrypteds == pAduppatwo || pAduppatwo.length < 4) {
        setlevelcheck(5);
      }
      if (encrypteds != pAduppatwo && pAduppatwo.length > 4) {
        setlevelcheck(4);
      }
    }
  };
  // mail validacja
  const [levelcheckmail, setlevelcheckmail] = useState(4);
  const textFieldRefEmail = useRef();

  const readTextFieldValueEmail = () => {
    // console.log(textFieldRefEmail.current.value);
    validate(textFieldRefEmail.current.value);

    setlevelcheckmail(4);
    if (textFieldRefEmail.current.value.includes("@")) {
      setlevelcheckmail(5);
    }
    seteMails(textFieldRefEmail.current.value);
  };

  var validateColor = [
    "rgb(69, 86, 157)",
    "rgb(255, 0, 0)",
    "rgb(255, 94, 0)",
    "rgb(255, 149, 0)",
    "rgb(255, 191, 0)",
    "rgb(255, 255, 69)",
    "rgb(0, 255, 4)",
  ];

  var andrzej = "rgb(62, 86, 157)";
  var sxInputTextMail = {
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
      borderBottom: `4px solid ${validateColor[levelcheckmail + 1]}`, // stylowanie tego dolnego obramowania
      transition: "0.5s",
    },
  };

  /// name validate
  const [levelcheckName, setlevelcheckName] = useState(4);
  const textFieldRefEName = useRef();

  const readTextFieldValueEName = () => {
    // console.log(textFieldRefEName.current.value);
    validate(textFieldRefEName.current.value);

    setlevelcheckName(4);
    var text = textFieldRefEName.current.value;
    var texted = [];
    texted = text.split(" ");
    if (text.includes(" ")) {
      if (texted[0].length > 2 && texted[1].length > 2) {
        setlevelcheckName(5);
      }
    }
    setnamess(textFieldRefEName.current.value);
  };

  var validateColor = [
    "rgb(69, 86, 157)",
    "rgb(255, 0, 0)",
    "rgb(255, 94, 0)",
    "rgb(255, 149, 0)",
    "rgb(255, 191, 0)",
    "rgb(255, 255, 69)",
    "rgb(0, 255, 4)",
  ];

  var andrzej = "rgb(62, 86, 157)";
  var sxInputTextName = {
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
      borderBottom: `4px solid ${validateColor[levelcheckName + 1]}`, // stylowanie tego dolnego obramowania
      transition: "0.5s",
    },
  };
  // pierwsze haslo validacja
  const textFieldRef = useRef();

  const readTextFieldValue = () => {
    // console.log(textFieldRef.current.value);
    validate(textFieldRef.current.value);
    const secret = `doyo${ppppone}nothisisashit${zmp}6194684`;
    const encrypted = encrypt(textFieldRef.current.value, secret);
    setpAduppaone(encrypted);
  };
  // console.log(pAduppaone);
  var validateColor = [
    "rgb(69, 86, 157)",
    "rgb(255, 0, 0)",
    "rgb(255, 94, 0)",
    "rgb(255, 149, 0)",
    "rgb(255, 191, 0)",
    "rgb(255, 255, 69)",
    "rgb(0, 255, 4)",
  ];
  var andrzej = "rgb(62, 86, 157)";
  var sxInputText = {
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
      borderBottom: `4px solid ${validateColor[levelcheck + 1]}`, // stylowanie tego dolnego obramowania
      transition: "0.5s",
    },
  };

  // DRUGIE HASŁO WALIDACJA DANYCH
  const [levelcheckPassTwo, setlevelcheckPassTwo] = useState(4);
  const textFieldRefEPassTwo = useRef();

  const readTextFieldValueEPassTwo = () => {
    // console.log(textFieldRefEPassTwo.current.value);
    validate(textFieldRefEPassTwo.current.value);

    setlevelcheckPassTwo(4);
    var text = textFieldRefEPassTwo.current.value;
    const secret = `doyo${ppppone}nothisisashit${zmp}6194684`;
    const encrypted = encrypt(textFieldRefEPassTwo.current.value, secret);
    setpAduppatwo(encrypted);
    if (encrypted == pAduppaone && text.length > 3) {
      setlevelcheckPassTwo(5);
    }
  };

  var validateColor = [
    "rgb(69, 86, 157)",
    "rgb(255, 0, 0)",
    "rgb(255, 94, 0)",
    "rgb(255, 149, 0)",
    "rgb(255, 191, 0)",
    "rgb(255, 255, 69)",
    "rgb(0, 255, 4)",
  ];

  var andrzej = "rgb(62, 86, 157)";
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

  const [isBool, setIsBool] = useState(true);

  const onClickHandler = () => {
    setIsBool(!isBool);
  };

  const [isBooltwo, setIsBooltwo] = useState(true);
  const onClickHandlertwo = () => {
    setIsBooltwo(!isBooltwo);
  };

  function senddataaxios() {
    Axios.post(`${process.env.REACT_APP_URL_API}/register`, {
      Email: eMails,
      UserName: namess,
      Password: pAduppaone,
    })
      .then(() => {
        console.log("user created");
      })
      .catch(function (error) {
        console.log("error with register");
      });
  }

  return (
    <div>
      <div className="templates">
        <form>
          <InputLabel className="Labels" style={stylelabel}>
            Mail:
          </InputLabel>
          <div></div>
          <div className="black">
            <Input
              onChange={readTextFieldValueEmail}
              inputRef={textFieldRefEmail}
              sx={sxInputTextMail}
              slotProps={{ input: { className: "My input" } }}></Input>
          </div>
          <InputLabel className="Labels" style={stylelabel}>
            {RegisterText.RegisterText.name}
          </InputLabel>
          <div className="black">
            <Input
              onChange={readTextFieldValueEName}
              inputRef={textFieldRefEName}
              sx={sxInputTextName}
              slotProps={{ input: { className: "My input" } }}
            />
          </div>
          <InputLabel className="Labels" style={stylelabel}>
            {RegisterText.RegisterText.pass}
          </InputLabel>
          <div className="black">
            <Input
              id="Pass"
              onChange={readTextFieldValue}
              onClick={readTextFieldValue}
              inputRef={textFieldRef}
              defaultValue=""
              type={isBool ? "password" : "text"}
              sx={sxInputText}
              slotProps={{ input: { className: "Password-Input" } }}
            />
            <div className="div-toglepassword">
              {isBool ? (
                <Visibility onClick={onClickHandler} className="adam" />
              ) : (
                <VisibilityOff onClick={onClickHandler} />
              )}
            </div>
          </div>
          <div className="black">
            <Input
              id="Passtwo"
              onChange={readTextFieldValueEPassTwo}
              onClick={readTextFieldValueEPassTwo}
              inputRef={textFieldRefEPassTwo}
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
          <div className="black">
            <Button
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
              onClick={senddataaxios}>
              {RegisterText.RegisterText.singUp}
            </Button>
          </div>
          <div className="black">
            <Link to="/Login" className="LinkPanel">
              <Button
                to="/Login"
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
                {RegisterText.RegisterText.signIn}
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
