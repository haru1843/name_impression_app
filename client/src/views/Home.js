import React from "react";
import { Link } from "react-router-dom";

import Top from "./homeComponents/Top";
import SlideV1 from "./homeComponents/slide_v1";

function Home() {
  return (
    <div>
      <Top bgc="rgb(225, 225, 225)" h={slidesHeight} />
      <SlideV1
        height={slidesHeight}
        bgc={oddColor}
        imgSrc={`${process.env.PUBLIC_URL}/home/undraw_File_searching_re_3evy.svg`}
        title={"名前検索"}
      ></SlideV1>

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
const oddColor = "rgb(250,250,250)";

export default Home;
