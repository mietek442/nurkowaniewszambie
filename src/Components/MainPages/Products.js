import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "./Products.css";
import Axios from "axios"; // Import Axios
import { Button } from "@mui/material";
import productdivin from "./../../Images/productdivin.png";

function Products() {
  const sxStyle = {
    mx: 1,
    marginTop: "auto",
    marginBottom: "auto",
    width: "auto",
    textIndent: "0px",
    py: "12px",
    fontSize: "10px",
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
  };

  const [returnedData, setReturnedData] = useState([]); // Initialize as an array
  const [returnDiv, setReturnDiv] = useState([]);

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get(`${process.env.REACT_APP_URL_API}api/products`, {
      withCredentials: true,
    })
      .then((res) => {
        setReturnedData(res.data.value.list || []); // Ensure it's an array
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  useEffect(() => {
    if (Array.isArray(returnedData) && returnedData.length > 0) {
      const renderedItems = returnedData.map((item, index) => (
        <div key={index} className="Product-result">
          <div className="product-logo-field">
            <img
              className="product-logo"
              alt="Product-logo"
              src={item.imgUrl}
            />
          </div>
          <div className="product-text">
            <div className="description-product">
              <div className="desc-main-product">{item.title}</div>
              <div className="desc-desc-product">{item.shortDesc}</div>
              <div
                className="avaiable"
                style={{
                  color: item.available ? "green" : "red",
                }}>
                {item.available ? "Dostępny" : "Niedostępny"}
              </div>
            </div>
            <div className="buttons-products">
              <Button sx={sxStyle}>Dodaj do koszyka</Button>
              <Button className="Button-product" sx={sxStyle}>
                Sprawdź opis
              </Button>
            </div>
          </div>
        </div>
      ));
      setReturnDiv(renderedItems);
    }
  }, [returnedData]); // Trigger rerender when returnedData changes

  return (
    <div>
      <div className="Productss">
        <div className="productcolumn">{returnDiv}</div>
        <div className="infocolumn">
          <div className="Promocion">sdasasd</div>
        </div>
      </div>
    </div>
  );
}

export default Products;
