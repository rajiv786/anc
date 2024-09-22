// src/pages/CreateUser.js
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call logic to create the user
    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    if (response.ok) {
      alert("User created successfully!");
      setName("");
      setEmail("");
    } else {
      alert("Failed to create user");
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Create a New User</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">Create User</Button>
      </form>
    </Box>
  );
};

export default CreateUser;
