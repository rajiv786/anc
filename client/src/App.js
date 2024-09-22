// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import HotelList from "./pages/HotelList";
import CreateUser from "./pages/Createpage";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/create-user">Create User</Button>
          <Button color="inherit" component={Link} to="/hotels">Hotels</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/hotels" element={<HotelList />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
