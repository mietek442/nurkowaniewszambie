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
import { useLocation } from "react-router-dom";
var ppppone = 777544222;

const zmp = "aaakotkidwa";

function ChangePass(RegisterText) {
  const [pAduppaone, setpAduppaone] = useState("");
  const [pAduppatwo, setpAduppatwo] = useState("");

  // login validation

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
  var [samepass, setsamepass] = useState(false);
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
    console.log("poziom zabezpieczen", levelcheck);
    if (encrypteds == pAduppatwo) {
      setsamepass(true);
    } else {
      setsamepass(false);
    }
    if (levelcheck == 5) {
      if (encrypteds == pAduppatwo || pAduppatwo.length < 4) {
        setlevelcheck(5);
      }
      if (encrypteds != pAduppatwo && pAduppatwo.length > 4) {
        setlevelcheck(4);
      }
    }

    console.log(encrypteds == pAduppatwo);
    console.log(encrypteds, "- haslo 1", " ", pAduppatwo, "  - haslo two");
  };
  // mail validacja
  const [levelcheckmail, setlevelcheckmail] = useState(4);
  const textFieldRefEmail = useRef();

  /// name validate

  var validateColor = [
    "rgb(69, 86, 157)",
    "rgb(255, 0, 0)",
    "rgb(255, 94, 0)",
    "rgb(255, 149, 0)",
    "rgb(255, 191, 0)",
    "rgb(255, 255, 69)",
    "rgb(0, 255, 4)",
  ];

  // pierwsze haslo validacja
  const textFieldRef = useRef();

  const readTextFieldValue = () => {
    // console.log(textFieldRef.current.value);
    validate(textFieldRef.current.value);
    const secret = `doyo${ppppone}nothisisashit${zmp}6194684`;
    const encrypted = encrypt(textFieldRef.current.value, secret);
    setpAduppaone(encrypted);
  };

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
    console.log(encrypted);
    setpAduppatwo(encrypted);
    if (encrypted == pAduppaone && text.length > 3) {
      setlevelcheckPassTwo(5);
    }
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
  const [colormessage, setcolormessage] = useState("");
  const [textmessage, settextmessage] = useState("");
  const { search } = useLocation();
  const passchangetoken = "2";
  function senddataaxios() {
    const params = new URLSearchParams(search);
    const messagefromUrl = params.get("message");
    if (levelcheck > 3) {
      if (pAduppatwo == pAduppaone) {
        Axios.post("http://localhost:3002/ResetPass", {
          passchangetoken: messagefromUrl,
          Password: pAduppaone,
        }).then((res) => {
          console.log("user created");
          settextmessage(res?.data?.message.text);
          setcolormessage(res?.data?.message.color);
        });
      } else {
        settextmessage("pass is not the same");
        setcolormessage("red");
      }
    } else {
      settextmessage("password too simply");
      setcolormessage("red");
    }
  }
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
        color: colormessage,
        // fontWeight: "bold",
        marginBottom: "0px",
      }}>
      {textmessage}
    </InputLabel>
  );
  return (
    <div>
      <div className="templates">
        <form>
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
          <div className="black">{componentLoginMess}</div>
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
              {RegisterText.RegisterText.Reset}
            </Button>
          </div>
          <div className="black"></div>
        </form>
      </div>
    </div>
  );
}
export default ChangePass;
