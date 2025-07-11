import React from "react";
import {
  People as PeopleIcon,
  Inventory2 as InventoryIcon,
  ShoppingCart as ShoppingCartIcon,
  Star as StarIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

function AdminToolBar() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: 200,
        bgcolor: "#020827",
        color: "#e6bf85",
        display: "flex",
        flexDirection: "column",
        px: 1,
      }}>
      <Typography variant="h5" fontWeight="bold" textAlign="center" my={2}>
        Admin
      </Typography>
      <List sx={{ flexGrow: 1 }}>
        <ListItem
          button
          sx={{ "&:hover": { bgcolor: "#1a1f3c" }, borderRadius: 1 }}>
          <ListItemIcon sx={{ color: "#e6bf85" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Użytkownicy" />
        </ListItem>

        <ListItem button sx={{ bgcolor: "#1a1f3c", borderRadius: 1, mt: 1 }}>
          <ListItemIcon sx={{ color: "#e6bf85" }}>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="Produkty" />
        </ListItem>

        <ListItem
          button
          sx={{ "&:hover": { bgcolor: "#1a1f3c" }, borderRadius: 1, mt: 1 }}>
          <ListItemIcon sx={{ color: "#e6bf85" }}>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Zamówienia" />
        </ListItem>

        <ListItem
          button
          sx={{ "&:hover": { bgcolor: "#1a1f3c" }, borderRadius: 1, mt: 1 }}>
          <ListItemIcon sx={{ color: "#e6bf85" }}>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Opinie" />
        </ListItem>

        <ListItem
          button
          sx={{ "&:hover": { bgcolor: "#1a1f3c" }, borderRadius: 1, mt: 1 }}>
          <ListItemIcon sx={{ color: "#e6bf85" }}>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Maile" />
        </ListItem>
      </List>
    </Box>
  );
}

export default AdminToolBar;
