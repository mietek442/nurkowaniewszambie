import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import "./AdminMainProducts.css";
import AdminProductsParams from "./AdminProductsComponents/AdminProductsParams";
import AdminTableProduct from "./AdminProductsComponents/AdminTableProduct";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Typography, TextField, Checkbox } from "@mui/material";

const productParamExample = {
  id: "0197fa05-8775-73bf-bf5a-290deaa052ba",
  title: "Wędka",
  parameter: "Wielofunkcyjna",
  description: "bardzo krótko",
  infoParam: "222",
  productId: "0197fa04-c695-76d4-bd01-4582b0a41480",
  product: {
    id: "0197fa04-c695-76d4-bd01-4582b0a41480",
    title: "Wędka ",
    shortDesc: "tania i dobrra",
    description: "tania i dobrra, każdy poleca, dobrea jest ",
    manufacture: "najlepsza fabryka",
    available: true,
    basePrice: 22,
    discount: 0.22,
    size: 12,
    createdAt: "2025-07-11T15:05:06.294326Z",
    updatedAt: "2025-07-11T15:05:06.294326Z",
    productParams: [null],
    imageUrls: [
      "https://localhost:5001/api/files/cc501261-ba98-4ef6-a5fa-efcd5c066827",
      "https://localhost:5001/api/files/dbd80cfa-0317-416c-a90c-0d187d2c5438",
      "https://localhost:5001/api/files/477e438b-2a1d-4640-8b5b-f36e8c2ba64b",
      "https://localhost:5001/api/files/c5de6a06-7812-4976-bb8b-1e5445533396",
    ],
  },
};

function AdminMainProducts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    Axios.get("https://localhost:5001/api/products", { withCredentials: true })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Błąd pobierania produktów:", err);
      });
  }, []);

  const handleProductClick = (productId) => {
    Axios.get(`https://localhost:5001/api/products/${productId}`, {
      withCredentials: true,
    })
      .then((res) => {
        console.log("Dane produktu po kliknięciu:", res.data);
        setSelectedProduct(res.data);
      })
      .catch((err) => {
        console.error("Błąd pobierania szczegółów produktu:", err);
      });
  };

  return (
    <Container fluid className="bg-white text-dark py-3">
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <Button variant="danger">+ Dodaj Produkt</Button>{" "}
          <Button variant="outline-secondary">Filters</Button>
        </Col>

        <Col xs="auto">
          <TextField
            size="small"
            placeholder="Szukaj..."
            variant="outlined"
            style={{ minWidth: 200 }}
          />
        </Col>

        <Col className="text-end">
          <Typography component="span" style={{ fontWeight: 500 }}>
            1 row selected
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table className="custom-table" hover responsive variant="light">
            <thead>
              <tr>
                <th style={{ verticalAlign: "middle", textAlign: "center" }}>
                  <Checkbox />
                </th>
                <th style={{ verticalAlign: "middle", textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                    }}>
                    <span>Zdjęcie Główne</span>
                  </div>
                </th>
                <th style={{ verticalAlign: "middle", textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                    }}>
                    <span>Tytuł</span>
                    <div className="sort-arrow active">↑</div>
                  </div>
                </th>
                <th style={{ verticalAlign: "middle", textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                    }}>
                    <span>Producent</span>
                    <div className="sort-arrow">↓</div>
                  </div>
                </th>
                <th style={{ verticalAlign: "middle", textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                    }}>
                    <span>Dostępność</span>
                    <div className="sort-arrow">↓</div>
                  </div>
                </th>
                <th style={{ verticalAlign: "middle", textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                    }}>
                    <span>Cena Początkowa</span>
                    <div className="sort-arrow">↓</div>
                  </div>
                </th>
                <th style={{ verticalAlign: "middle", textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                    }}>
                    <span>Rabat</span>
                    <div className="sort-arrow">↓</div>
                  </div>
                </th>
                <th style={{ verticalAlign: "middle", textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                    }}>
                    <span>Cena Finalna</span>
                    <div className="sort-arrow">↓</div>
                  </div>
                </th>
                <th style={{ verticalAlign: "middle", textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                    }}>
                    <span>Rozmiar</span>
                    <div className="sort-arrow">↓</div>
                  </div>
                </th>
                <th style={{ verticalAlign: "middle", textAlign: "center" }}>
                  <span>Akcje</span>
                </th>
              </tr>
            </thead>

            {products.length > 0 ? (
              products.map((product) => (
                <tbody onClick={() => handleProductClick(product.id)}>
                  <AdminTableProduct key={product.id} product={product} />
                </tbody>
                // <AdminProductsParams productParam={productParamExample} />  drogi chatu po kliknieciu, weź i wyświetl ładnie ten komponent z danymi pobranymi wyżej spodem wyswietl to w
              ))
            ) : (
              <tbody>
                <tr>
                  <td colSpan="10" style={{ textAlign: "center" }}>
                    Brak produktów do wyświetlenia
                  </td>
                </tr>
              </tbody>
            )}
            {selectedProduct && (
              <AdminProductsParams productParam={selectedProduct} />
            )}

            {/* <AdminProductsParams productParam={productParamExample} /> */}
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminMainProducts;
