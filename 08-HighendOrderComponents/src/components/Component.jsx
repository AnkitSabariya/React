import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Display from "./Display";

const Component = (Display, url) => {
  let [movie, setMovie] = useState([]);
  let [flg, setFlg] = useState(true);
  return function Abc() {
    useEffect(() => {
      flg
        ? axios
            .get(url)
            .then((res) => {
              setMovie(res.data.results);
            //   console.log(movie);
              
              setFlg(false);
            })
            .catch((err) => {
              console.log(err);
            })
        : null;
    }, []);
    return <Display value={movie} />;
  };
};
export default Component; 