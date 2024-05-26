import React from "react";
import { Link } from "react-router-dom";
import "./Worms.css";

function Worms() {
  return (
    <div>
      <h1>Chewy</h1>
      <img
        src="https://i5.walmartimages.com/seo/Trolli-Sour-Brite-Crawlers-Candy-Sour-Gummy-Worms-7-2-oz_6709367c-3808-49a5-abf5-4632d37393f1.10201c9293efea4f7a53cedf3d254241.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
        alt="Gummy worms"
      />
      <Link to="/">go back</Link>
    </div>
  );
}

export default Worms;
