import React from "react";
import { Link } from "react-router-dom";

import Top from "./homeComponents/Top";

function Home() {
  return (
    <div>
      <Top bgc="rgb(225, 225, 225)" h={slidesHeight} />
      <p>at 'Home'!!</p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/search">Search</Link>
      </p>
    </div>
  );
}

const slidesHeight = 680;

export default Home;
