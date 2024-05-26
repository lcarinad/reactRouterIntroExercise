import React from "react";
import { Link } from "react-router-dom";

function FourLoko() {
  return (
    <div>
      <h1>Crazzzzyyyyy</h1>
      <img
        src="https://media.newyorker.com/photos/5a7a241321946310a896a021/master/w_1920,c_limit/Patti-Four-Loko.jpg"
        alt="Devils water"
      />
      <Link to="/">go back</Link>
    </div>
  );
}

export default FourLoko;
