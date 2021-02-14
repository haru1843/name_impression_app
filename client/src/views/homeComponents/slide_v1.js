import React from "react";
import styled from "styled-components";

import LinkButton from "./linkButton";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 100%;

  height: ${(props) => props.height}px;
  width: 100%;
  margin: 0;
  padding: 0;
  background: ${(props) => props.bgc};

  & > div:nth-of-type(1) {
    position: relative;

    & > img {
      width: 60%;

      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
  & > div:nth-of-type(2) {
    & > p.title {
      font-size: 2.5vw;
    }
    & > p.desc {
      font-size: 1.5vw;
    }
    & > div.top-pad {
      height: 20%;
    }
  }
`;

function SlideV1(props) {
  return (
    <StyledDiv height={props.height} bgc={props.bgc}>
      <div>
        <img alt="サービスのイメージ" src={props.imgSrc}></img>
      </div>
      <div>
        <div className="top-pad"></div>
        <p className="title">{props.title}</p>
        <p className="desc">
          データにある名前から,
          「文字」と「印象」の2つの方法で名前を探すことができます。
          <br />
          「文字」では入力した文字に対して検索を行います。
          <br />
          「印象」では各印象値を設定することで検索します。
        </p>
        <LinkButton></LinkButton>
      </div>
    </StyledDiv>
  );
}

export default SlideV1;
