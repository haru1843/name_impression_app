import React from "react";

import Top from "./homeComponents/Top";
import SlideV1 from "./homeComponents/slide_v1";
import SlideV2 from "./homeComponents/slide_v2";

function Home() {
  return (
    <div>
      <Top bgc="rgb(225, 225, 225)" h={slidesHeight} />
      <SlideV1
        height={slidesHeight}
        bgc={oddColor}
        imgSrc={`${process.env.PUBLIC_URL}/home/undraw_File_searching_re_3evy.svg`}
        title={"名前検索"}
        msg={msg_for_search}
      ></SlideV1>
      <SlideV2
        height={slidesHeight}
        bgc={oddColor}
        imgSrc={`${process.env.PUBLIC_URL}/home/undraw_File_searching_re_3evy.svg`}
        title={"名前検索"}
        msg={msg_for_search}
      ></SlideV2>
    </div>
  );
}

const slidesHeight = 940;
const oddColor = "rgb(250,250,250)";

const msg_for_search = (
  <p>
    データにある名前から,
    「文字」と「印象」の2つの方法で名前を探すことができます。
    <br />
    「文字」では入力した文字に対して検索を行います。
    <br />
    「印象」では各印象値を設定することで検索します。
  </p>
);

export default Home;
