import React, { useEffect } from "react";
import { useState } from "react";
import "./Basket.css";
import { Input, Button, Checkbox } from "@mui/material";
import productdivin from "./../../Images/productdivin.png";

function Basket() {
  var [rabatComp, setRabatComp] = useState("");
  var [totalpriceComp, settotalpriceComp] = useState(
    <div className="price-discount prom-div">
      <div>Wartość produktów:</div>
      <div>0</div>
    </div>
  );
  var [finalPriceComp, setfinalPriceComp] = useState(
    <div className="price-discount prom-div">
      <div>Kwota Finalna:</div>
      <div>0</div>
    </div>
  );
  var Rabat = "20.00";
  var totalprice = "30.00";
  var curency = "EUR";
  var finalPrice = (parseFloat(totalprice) - parseFloat(Rabat)).toFixed(2);

  var ChecksomeCheckbox = true;

  useEffect(() => {
    if (Rabat.length > 3) {
      setRabatComp(
        <div className="price-discount prom-div">
          <div>Rabat:</div>
          <div>
            -{Rabat}
            {curency}
          </div>
        </div>
      );
    }
    if (totalprice.length > 3) {
      settotalpriceComp(
        <div className="price-discount prom-div">
          <div>Wartość produktów:</div>
          <div>
            {totalprice}
            {curency}
          </div>
        </div>
      );
    } else if (ChecksomeCheckbox) {
      settotalpriceComp(
        <div className="price-discount prom-div">
          <div>Wartość produktów:</div>
          <div>loading</div>
        </div>
      );
    }
    if (finalPrice.length > 3) {
      setfinalPriceComp(
        <div className="price-discount prom-div">
          <div>Wartość produktów:</div>
          <div>
            {finalPrice}
            {curency}
          </div>
        </div>
      );
    } else {
      setfinalPriceComp(
        <div className="price-discount prom-div">
          <div>Wartość produktów:</div>
          <div>loading</div>
        </div>
      );
    }
    
  }, [Rabat]);
  var checkboxSx = {
    color: "gray",
    "&.Mui-checked": {
      color: "#ea5632",
    },
  };
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
      <div className="basket">
        <div className="productcolumn-basket">
          <div className="check-all">
            <div className="product-text-checkall">
              <div className="description-product-basket-check">
                zaznaczyć wszystko?
              </div>
              <div className="buttons-products-basket">
                <Checkbox sx={checkboxSx} defaultChecked color="default" />
              </div>
            </div>
          </div>
          <div className="Product-result-basket">
            <div className="product-logo-field-basket">
              <img
                className="product-logo-basket"
                alt="Product-logo"
                src={productdivin}
              />
            </div>
            <div className="product-text-basket">
              <div className="description-product-basket">
                <div className="desc-main-product-basket">skafander</div>
                <div className="desc-desc-product-basket">
                  tani skafander do nurkowania
                </div>
                <div className="avaiable-basket">nie dostępny</div>
              </div>
              <div className="buttons-products-basket">
                <Checkbox sx={checkboxSx} defaultChecked color="default" />
              </div>
            </div>
          </div>
          <div className="Product-result-basket">
            <div className="product-logo-field-basket">
              <img
                className="product-logo-basket"
                alt="Product-logo"
                src={productdivin}
              />
            </div>
            <div className="product-text-basket">
              <div className="description-product-basket">
                <div className="desc-main-product-basket">skafander </div>
                <div className="desc-desc-product-basket">
                  tani skafander do nurkowania
                </div>
                <div className="avaiable-basket">nie dostępny</div>
              </div>
              <div className="buttons-products-basket">
                <Checkbox defaultChecked color="default" />
              </div>
            </div>
          </div>
          <div className="Product-result-basket">
            <div className="product-logo-field-basket">
              <img
                className="product-logo-basket"
                alt="Product-logo"
                src={productdivin}
              />
            </div>
            <div className="product-text-basket">
              <div className="description-product-basket">
                <div className="desc-main-product-basket">skafander </div>
                <div className="desc-desc-product-basket">
                  tani skafander do nurkowania
                </div>
                <div className="avaiable-basket">nie dostępny</div>
              </div>
              <div className="buttons-products-basket">
                <Checkbox defaultChecked color="default" />
              </div>
            </div>
          </div>
        </div>
        <div className="infocolumn-basket">
          <div className="Promocion-basket">
            {totalpriceComp}
            {rabatComp}
            <div className="price-discount prom-div">
              <div>Dostawa:</div>
              <div className="free-ship">Darmowa</div>
            </div>
            {finalPriceComp}
            <div className="prom-gap prom-div"></div>
            <div className="order-buttons">
              <Button sx={sxStyle}>Dostawa i Płatność</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Basket;
