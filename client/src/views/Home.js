import React from "react";

import Top from "./homeComponents/Top";
import SlideV1 from "./homeComponents/slide_v1";
import SlideV2 from "./homeComponents/slide_v2";

import GetWindowSize from "./listeners/resize";

function Home() {
  const { width } = GetWindowSize();

  const slidesHeight = (width / 1920) * (1080 * 0.9);

  return (
    <div>
      <Top bgc="rgb(225, 225, 225)" h={slidesHeight} />
      <SlideV1
        height={slidesHeight}
        bgc={oddColor}
        imgSrc={`${process.env.PUBLIC_URL}/home/undraw_File_searching_re_3evy.svg`}
        title={"名前検索"}
        msg={msg_for_search}
        linkPath={"/search"}
      ></SlideV1>
      <SlideV2
        height={slidesHeight}
        bgc={evenColor}
        imgSrc={`${process.env.PUBLIC_URL}/home/undraw_ideas_s70l.svg`}
        title={"名前生成"}
        msg={msg_for_search}
        linkPath={"/generate"}
      ></SlideV2>
      <SlideV1
        height={slidesHeight}
        bgc={oddColor}
        imgSrc={`${process.env.PUBLIC_URL}/home/undraw_folder_files_nweq.svg`}
        title={"ランダム取得"}
        msg={msg_for_search}
        linkPath={"/random"}
      ></SlideV1>
      <SlideV2
        height={slidesHeight}
        bgc={evenColor}
        imgSrc={`${process.env.PUBLIC_URL}/home/undraw_percentages_0rur.svg`}
        title={"印象判断"}
        msg={msg_for_search}
        linkPath={"/judge"}
      ></SlideV2>
    </div>
  );
}

// const slidesHeight = 940;
const oddColor = "rgb(250,250,250)";
const evenColor = "rgb(240,240,240)";

const msg_for_search = (
  <span>
    データにある名前から,
    「文字」と「印象」の2つの方法で名前を探すことができます。
    <br />
    「文字」では入力した文字に対して検索を行います。
    <br />
    「印象」では各印象値を設定することで検索します。
  </span>
);

export default Home;
