import React from "react";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h1>Crunchhhh</h1>
      <img
        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSYf-o_pf2dV6wHLCfF_Qu67LZCw33DbNHgo6KZm30kH5-3wN6dliyqIOvBEYQgeNONrfQ038UzTLyf9Fd0GTieBe-8btTGKF9ESilRNSsWosOET8huMZNoMzmH592eiuCjBcqpCKgRwA&usqp=CAc"
        alt="Barbeque Chippies"
      />
      <Link to="/">go back</Link>
    </div>
  );
}

export default Chips;
