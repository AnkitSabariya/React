import React from "react";
import Data from "../api/cards.json";
function Card() {
  return (
      // Key unic id aapvi pde gme te diffrent name k specific uniq id
      // jo id n hoy to map thi loop me i pass krvi index aapi devana
    <div>
      {Data
      .filter(item => parseFloat(item.rating) >= 8.5)
      .map((element) => {
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

  /*
  return (
    <div>
      <img src={Data[0].img_url} alt="" width="40%" height="50%" />  
      <h1>Name : {Data[0].name}</h1>    
      <span>Rating : {Data[0].rating}</span>      
      <p>Description : {Data[0].description}</p>  
      <a href={Data[0].watch_url}></a>    
      <h3>Genre : {Data[0].genre}</h3>
      <h3>{Data[0].cast}</h3>
    </div>
  )
    */
}

export default Card;
