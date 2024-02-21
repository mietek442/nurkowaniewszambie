import React from "react";
import "./Products.css";
import { styled } from "@mui/system";
import { Input, Button } from "@mui/material";
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
  return (
    <div>
      <div className="Productss">
        <div className="productcolumn">
          <div className="Product-result">
            <div className="product-logo-field">
              <img
                className="product-logo"
                alt="Product-logo"
                src={productdivin}
              />
            </div>
            <div className="product-text">
              <div className="description-product">
                <div className="desc-main-product">konto takie oooo</div>
                <div className="desc-desc-product">
                  konto takie i owakie polacam magda gesler
                </div>
                <div className="avaiable">nie dostępny</div>
              </div>
              <div className="buttons-products">
                <Button sx={sxStyle}>Dodaj do koszyka</Button>
                <Button className="Button-product" sx={sxStyle}>
                  Sprawdź opis
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="infocolumn">
          <div className="Promocion">dd</div>
        </div>
      </div>
    </div>
  );
}
export default Products;
