import React from "react";

function Card({properties}) {
  return (
      // Key unic id aapvi pde gme te diffrent name k specific uniq id
      // jo id n hoy to map thi loop me i pass krvi index aapi devana
    <div>
      {properties.map(({element}) => {
      return(
        <div className="" key={element.id}>
          <img src={element.img_url} alt="" width="40%" height="50%" />
          <h1>Name : {element.name}</h1>
          <span>Rating : {element.rating}</span>
          <p>Description : {element.description}</p>
          <a href={element.watch_url}></a>
          <h3>Genre : {element.genre}</h3>
          <h3>{element.cast}</h3>
        </div>
        );
      })}
    </div>
  );


}

export default Card;
