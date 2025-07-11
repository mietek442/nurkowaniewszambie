import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Row, Col, Image } from "react-bootstrap";
import { Typography, TextField, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function AdminProductsParams({ productParam }) {
  const handleClose = () => {
    console.log("Closed");
  };
  console.log("Product Param:", productParam.shortDesc);
  const { parameter, infoParam } = productParam || {};

  return (
    <tr>
      <td colSpan="12">
        <div
          className="p-4 shadow-sm position-relative"
          style={{
            backgroundColor: "#f9f9f9",
            borderRadius: "12px",
            position: "relative",
          }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{ position: "absolute", top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>

          <Row>
            {/* LEFT COLUMN */}
            <Col md={5}>
              <Typography variant="h6" gutterBottom>
                Krótki opis
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                sx={{ maxWidth: 200, wordWrap: "break-word" }}>
                {productParam.shortDesc || "Brak krótkiego opisu"}
              </Typography>
              <Row>
                {(productParam.imageUrls.length > 0
                  ? productParam.imageUrls
                  : ["https://via.placeholder.com/200"]
                )
                  .slice(0, 4)
                  .map((url, idx) => (
                    <Col xl={6} className="text-center mb-3" key={idx}>
                      <Image
                        src={url}
                        rounded
                        fluid
                        style={{
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <Typography
                        variant="caption"
                        display="block"
                        className="mt-1">
                        {["Główne", "Drugie", "Trzecie", "Czwarte"][idx] ||
                          "Obraz"}
                      </Typography>
                    </Col>
                  ))}
              </Row>
            </Col>

            {/* RIGHT COLUMN */}
            <Col md={7}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={2}
                width="100%">
                <Typography variant="subtitle1" style={{ minWidth: 80 }}>
                  {productParam.parameter || "Parametr"}
                </Typography>
                <TextField
                  value={productParam.infoParam || "-"}
                  disabled
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: { color: "#000", textAlign: "center" },
                  }}
                  style={{ width: "140px" }}
                />
              </Box>

              <Typography
                variant="caption"
                color="textSecondary"
                sx={{
                  maxWidth: 300,
                  wordWrap: "break-word",
                  mt: 1,
                  display: "block",
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}>
                Informacje dodatkowe o produkcie
              </Typography>

              <Typography variant="h6" className="mt-3">
                Pełny opis
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                sx={{ maxWidth: 300, wordWrap: "break-word" }}>
                {productParam.description || "Brak opisu"}
              </Typography>
            </Col>
          </Row>
        </div>
      </td>
    </tr>
  );
}

export default AdminProductsParams;
