import React from "react";
import styled from "styled-components";

import LinkButton from "./linkButton";

const StyledDiv = styled.div`
  position: relative;

  height: ${(props) => props.height}px;
  width: 100%;
  margin: 0;
  padding: 0;
  background: ${(props) => props.bgc};

  & > img {
    width: 35%;

    position: absolute;
    top: 50%;
    left: 5%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  & > div:nth-of-type(1) {
    width: 50%;

    position: absolute;
    top: 50%;
    left: 45%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);

    & > p.title {
      margin: 0;
      font-family: "M PLUS 1p", sans-serif;
      font-size: 2rem;
      color: rgb(60, 60, 60);
      font-weight: 700;
      border-bottom: 1px solid rgb(160, 160, 160);
    }
    & > p.desc {
      margin: 4% 0 7%;
      padding-left: 2rem;
      font-size: 1rem;
    }
    & > div.button-wrapper {
      text-align: right;
    }
  }
`;

function SlideV1(props) {
  return (
    <StyledDiv height={props.height} bgc={props.bgc}>
      <img alt="サービスのイメージ" src={props.imgSrc}></img>
      <div>
        <div className="top-pad"></div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.msg}</p>
        <div className="button-wrapper">
          <LinkButton linkPath={props.linkPath}></LinkButton>
        </div>
      </div>
    </StyledDiv>
  );
}

export default SlideV1;
