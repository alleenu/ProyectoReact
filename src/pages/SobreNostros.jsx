import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import kellyImage from "../images/kelly.jpg";
import lilianaImage from "../images/liliana.jpg";
import claudiaImage from "../images/claudia.jpg";
import rossyImage from "../images/rossy.jpg";
import lennysImage from "../images/lennys.jpg";
import alleenImage from "../images/alleen.png";

const About = () => {
  const cardsData = [
    {
      title: "Kelly Salas",
      image: kellyImage,
    },
    {
      title: "Liliana Osuna",
      image: lilianaImage,
    },
    {
      title: "Claudia Bazan",
      image: claudiaImage,
    },
    {
      title: "Rossy Mujica",
      image: rossyImage,
    },
    {
      title: "Lennys Gonzalez",
      image: lennysImage,
    },
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
          <Typography variant="h4"sx={{ color: "#1E4595", fontWeight: "bold" }}>
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
          Somos Kelly, Liliana, Lennys, Claudia, Rossi y Alleen, conformamos un
          equipo de 6 chicas que un día decidieron introducirse en el mundo de
          la Tecnología, y gracias a una oportunidad que se nos presentó
          obteniendo una Beca en el programa Nosotras Conectadas organizado por la Dirección de Colectividades de Buenos Aires, Loreal y Acnur, llegamos a la Academia Numen y hoy somos estudiantes de la carrera Full Stack. Durante varios meses hemos estado aprendiendo diferentes tecnologías con muchos desafíos y dedicación. Hoy que nos encontramos en la recta final, implementamos los conocimientos adquiridos y presentamos nuestro proyecto sobre Aplicación Meteorológica.
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
          {/* Renderizar las primeras tres tarjetas */}
          {cardsData.slice(0, 3).map((card, index) => (
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            mt: 4,
          }}
        >
          {/* Renderizar las siguientes tres tarjetas */}
          {cardsData.slice(3).map((card, index) => (
            <Card key={index} sx={{ width: 300, mb: 2, mx: 1 }}>
              <CardMedia
                component="img"
                height="270"
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