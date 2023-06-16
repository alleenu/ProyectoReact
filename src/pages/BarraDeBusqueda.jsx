import React, { useState } from 'react';
import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";

const BarraDeBusqueda = ({ onSearch, error, ciudad, onChangeCiudad }) => {

  const onSubmit = async (e) => {
    e.preventDefault();
    onSearch(ciudad);
  };

  return (
    <Box
      className='barra-busqueda'
      sx={{ display: "grid", gap: 2 , color: "black" }}
      component="form"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField 
        id="ciudad"
        label="Ciudad"
        variant="outlined"
        size="small"
        required
        value={ciudad}
        onChange={(e) => onChangeCiudad(e.target.value)}
        error={error.error}
        helperText={error.mensaje}
        sx={{
          backgroundColor: "white",
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: 'primary'}
        }}
      />

      <LoadingButton 
        type="submit"
        variant="contained"
        loading={false}
        loadingIndicator="Buscando..."
        sx={{ backgroundColor: '#1E4595', color: 'white' }}
      >
        Buscar
      </LoadingButton>
    </Box>
  );
};

const App = () => {
  const [error, setError] = useState({
    error: false,
    mensaje: "",
  });
  const [tiempo, establecerTiempo] = useState(null); // Cambiado a null en lugar de un objeto con datos predeterminados
  const [ciudad, setCiudad] = useState("");

  const buscarTiempo = async (ciudad) => {
    setError({ error: false, mensaje: "" });

    try {
      if (!ciudad.trim()) {
        throw new Error("El campo ciudad es obligatorio");
      }

      const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=2424b473ded346a3a98204132231506&lang=es&q=${ciudad}`;

      const res = await fetch(API_WEATHER);
      const datos = await res.json();

      if (datos.error) {
        throw new Error(datos.error.mensaje);
      }

      establecerTiempo({
        location: {
          name: datos.location.name,
          country: datos.location.country,
        },
        current: {
          temp_c: datos.current.temp_c,
          condition: {
            text: datos.current.condition.text,
            icon: datos.current.condition.icon,
          },
        },
      });
    } catch (error) {
      console.error(error);
      setError({ error: true, mensaje: error.message });
    }
  };

  return (
    <Container className='container-fondo' maxWidth="lx" sx={{ mt: 0 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Aplicación Meteorológica
      </Typography>

      <BarraDeBusqueda
        onSearch={buscarTiempo}
        error={error}
        ciudad={ciudad}
        onChangeCiudad={setCiudad}
      />

      {tiempo && tiempo.location && (
        <Box sx={{ mt: 2, display: "grid", gap: 2, textAlign: "center" }}>
          <Typography variant="h4" component="h2">
            {tiempo.location.name}, {tiempo.location.country}
          </Typography>
          <Box
            component="img"
            alt={tiempo.current.condition.text}
            src={`https:${tiempo.current.condition.icon}`}
            sx={{ margin: "0 auto" }}
          />
          <Typography variant="h5" component="h3">
            Temperatura: {tiempo.current.temp_c} °C
          </Typography>
          <Typography variant="h6" component="h4">
            Condición: {tiempo.current.condition.text}
          </Typography>
        </Box>
      )}

      <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
        Desarrollado por:{" "}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
};

export default App;

