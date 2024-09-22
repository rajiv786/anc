// src/pages/Home.js
import React from "react";
import { Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>Welcome to the Hotel Booking Platform</Typography>
      <Typography variant="body1">Navigate to different pages using the menu above.</Typography>
    </Box>
  );
};

export default Home;
