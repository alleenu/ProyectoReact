import React from "react";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
   
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Aplicación Meteorológica </h1>
          <p>Información Oficial del Estado del Tiempo <br />
           en cualquier lugar.!</p>
          <Link to="/BarraDeBusqueda">
            <button>Ingresar</button>
          </Link>
        </div>
      </div>
     
  );
};

export default Home;