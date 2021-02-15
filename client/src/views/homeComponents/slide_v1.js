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
    padding-right: 10%;

    & > p.title {
      font-family: "M PLUS 1p", sans-serif;
      font-size: 2rem;
      color: rgb(60, 60, 60);
      font-weight: 700;
      border-bottom: 1px solid rgb(160, 160, 160);
    }
    & > p.desc {
      padding-left: 2rem;
      font-size: 1rem;
    }
    & > div.top-pad {
      height: 20%;
    }
    & > div.button-wrapper {
      text-align: right;
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
        <p className="desc">{props.msg}</p>
        <div className="button-wrapper">
          <LinkButton linkPath={props.linkPath}></LinkButton>
        </div>
      </div>
    </StyledDiv>
  );
}

export default SlideV1;
