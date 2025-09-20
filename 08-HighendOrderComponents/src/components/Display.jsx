import React from 'react'

const Display = (movie) => {
  let data = movie.value
  data.map((e)=>{
    console.log(e.original_title);
    
  })
  

}
export default Display