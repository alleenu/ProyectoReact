import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import alleenImage from "../images/alleen.png";

const About = () => {
  const cardsData = [
    {
      title: "Alleen Uzcategui",
      image: alleenImage,
    },
  ];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "calc(100vh - 64px)", // Restar la altura del menú de navegación
          overflow: "hidden",
          backgroundImage:
            "url('https://radiomitre-la100-prod.cdn.arcpublishing.com/resizer/RncJsmL5afi2swo4oLwHLvuFwNg=/1440x0/smart/filters:quality(85):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/radiomitre/EEZLASM57FAHROJDKWBB4DYT5E.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxHeight: "250px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            p: 3,

            color: "white",
            width: "80%",
            maxWidth: 800,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#1E4595", fontWeight: "bold" }}
          >
            Sobre Nosotros
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          my: 4,
          textAlign: "center",
          p: 3,
          "& p": {
            textAlign: "center",
            lineHeight: "1.5",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          ¡Bienvenidos a mi proyecto de pronóstico del clima!En esta plataforma,
          mi objetivo principal ha sido brindarles una experiencia excepcional
          al obtener información precisa y actualizada sobre el clima de
          diferentes localidades. Diseñé una página de bienvenida intuitiva
          donde simplemente deben hacer clic en el botón de ingreso para ser
          redirigidos al sitio principal. Esta función permite una navegación
          fluida y los lleva rápidamente a la información que necesitan. Para
          ofrecerles una experiencia aún mejor, creé un backend simulado
          utilizando JSON-Server. Esto me permitió alojar y gestionar
          eficientemente la información de mi API. De esta manera, pueden
          disfrutar de la experiencia de una aplicación en tiempo real, con
          datos actualizados constantemente. Para asegurarme de que los datos
          que reciben sean confiables y precisos, integré la API de WeatherAPI.
          Esta API me proporciona información detallada sobre el clima en
          cualquier ubicación específica. Así, pueden estar al tanto de las
          condiciones climáticas actuales y futuras, y planificar sus
          actividades en consecuencia.
        </Typography>
        <br />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            mt: 4,
          }}
        >
          {/* Renderizar la primera tarjeta */}
          {cardsData.slice(0, 1).map((card, index) => (
            <Card key={index} sx={{ width: 300, mr: 2 }}>
              <CardMedia
                component="img"
                height="280"
                image={card.image}
                alt={card.title}
                style={{ objectFit: "cover", width: "100%" }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default About;
