import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // muestra una alerta de envío exitoso
    setShowAlert(true);
    // Reiniciar los campos del formulario
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Box
        sx={{
          my: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('https://radiomitre-la100-prod.cdn.arcpublishing.com/resizer/RncJsmL5afi2swo4oLwHLvuFwNg=/1440x0/smart/filters:quality(85):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/radiomitre/EEZLASM57FAHROJDKWBB4DYT5E.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            lineHeight: "1.5",
            maxWidth: "800px",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Estilo de transparencia para el contenido
            padding: "20px",
            color:"#1E4595"
          }}
        >
          <Typography variant="h4">Contactanos</Typography>
          <Box sx={{ mt: 1 , color: "#1E4595" }}>
            <p>
              ¡Nos encantaría escucharte! Si tienes alguna pregunta, comentario o
              colaboración en mente, no dudes en ponerte en contacto con nosotros,
               a través del siguiente formulario.!
            </p>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Box sx={{ maxWidth: "400px" }}>
          <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "center", color: "#1E4595" }}>
            Formulario de Consultas
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <TextField
              required
              fullWidth
              label="Nombre"
              id="nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              autoComplete="name"
            />
            <TextField
              required
              fullWidth
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              autoComplete="email"
            />
            <TextField
              required
              fullWidth
              label="Mensaje"
              multiline
              rows={4}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
              autoComplete="off"
            />
            <Button variant="contained" type="submit" color="primary">
              Enviar mensaje
            </Button>
          </form>
        </Box>
      </Box> <br /><br />
      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        message="Mensaje enviado con éxito"
      />
    </>
  );
};

export default Contact;