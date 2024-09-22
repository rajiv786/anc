// src/pages/HotelList.js
import React, { useState, useEffect } from "react";
import { Typography, Box, Button, Grid, TextField, Card, CardContent, CardActions } from "@mui/material";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    fetch("/api/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  const handleVisit = async (hotelId) => {
    await fetch(`/api/hotels/${hotelId}/visit`, { method: "POST" });
    alert("Visit recorded!");
  };

  const handleDraftBooking = async (hotelId) => {
    if (!userId) {
      alert("Please enter a user ID.");
      return;
    }
    await fetch(`/api/bookings/draft`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hotelId, userId }),
    });
    alert("Draft booking created!");
  };

  const handleCompleteBooking = async (hotelId) => {
    if (!userId) {
      alert("Please enter a user ID.");
      return;
    }
    await fetch(`/api/bookings/complete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hotelId, userId }),
    });
    alert("Booking completed!");
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Hotel List</Typography>

      <TextField
        label="User ID"
        variant="outlined"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Grid container spacing={3}>
        {hotels.map((hotel) => (
          <Grid item xs={12} sm={6} md={4} key={hotel._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{hotel.name}</Typography>
                <Typography>Location: {hotel.location}</Typography>
                <Typography>Price: ${hotel.price}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleVisit(hotel._id)} variant="outlined">Visit</Button>
                <Button onClick={() => handleDraftBooking(hotel._id)} variant="contained" color="secondary">Draft Booking</Button>
                <Button onClick={() => handleCompleteBooking(hotel._id)} variant="contained" color="primary">Complete Booking</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HotelList;
