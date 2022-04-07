import React from "react";
import styleTestimonios from "../style/styleTestimonio.css";

function Testimonios(props) {
  return (
    
    <div className="contenedor-testimonio">
      <img
        className="img-testimonio"
        src={require(`../images/image-${props.img}.png`)}
      />
      <div className="contenedor-texto-testimonio">
        <p className="name-test">
          {props.name} en {props.country}
        </p>
        <p className="charge-test">
          {props.charge} en {props.company}
        </p>
        <p className="text-test">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonios;
