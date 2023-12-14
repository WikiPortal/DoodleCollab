import React, { useState } from "react";
import { TextField, Button, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAuthentication = () => {
    navigate("/sketchbook");
    console.log("Name:", name, "Password:", password);
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <form>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAuthentication}
            style={{ marginTop: "20px" }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Authentication;
