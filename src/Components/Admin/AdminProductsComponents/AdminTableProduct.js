import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Image } from "react-bootstrap";
import { Checkbox } from "@mui/material";

function AdminTableProduct({ product }) {
  const discountPercent = product.discount
    ? Math.round(product.discount * 100)
    : 0;

  return (
    <tr>
      <td>
        <Checkbox defaultChecked={product.available} />
      </td>
      <td>
        <Image src={product.imgUrl} width={40} />
      </td>
      <td>{product.title}</td>
      <td>{product.manufacture}</td>
      <td
        style={{
          color: product.available ? "green" : "red",
          fontWeight: "bold",
        }}>
        {product.available ? "Dostępny" : "Nie Dostępny"}
      </td>
      <td>{product.basePrice.toFixed(2)}zł</td>
      <td>{discountPercent}%</td>
      <td>{product.finalPrice.toFixed(2)}zł</td>
      <td>{product.size ?? "-"}</td>
      <td>
        <Button variant="outline-primary" size="sm">
          Edytuj
        </Button>{" "}
        <Button variant="outline-danger" size="sm">
          Usuń
        </Button>
      </td>
    </tr>
  );
}

export default AdminTableProduct;
