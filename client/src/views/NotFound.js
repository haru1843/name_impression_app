import React from "react";
import styled from "styled-components";

import LinkButton from "./homeComponents/linkButton";

import GetWindowSize from "./listeners/resize";

const StyledDiv = styled.div`
  position: relative;

  height: ${(props) => props.height}px;
  width: 100%;
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 245);
  background-image: repeating-linear-gradient(
    -45deg,
    #fff,
    #fff 4px,
    transparent 0,
    transparent 14px
  );

  & > img {
    width: 20%;

    position: absolute;
    top: 50%;
    left: 12%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  & > div:nth-of-type(1) {
    width: 50%;

    background-color: rgba(130, 130, 130, 0.1);
    padding: 2vw;

    position: absolute;
    top: 50%;
    left: 40%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);

    & > p.title {
      margin: 0;
      font-family: "M PLUS 1p", sans-serif;
      font-size: 2rem;
      color: rgb(60, 60, 60);
      font-weight: 700;
      border-bottom: 2px solid rgb(120, 120, 120);
    }
    & > p.desc {
      margin: 4% 0 7%;
      padding-left: 2rem;
      font-size: 1rem;
    }
  }
`;

function NotFound(props) {
  const { height } = GetWindowSize();

  //   const slideHeight = (width / 1920) * (1080 * 0.9);
  //   const slideHeight = Math.max(height, 900);
  const slideHeight = Math.max(
    height - (props.headerHeight + props.footerHeight),
    450
  );

  const bgc = "rgb(240, 240, 240)";

  return (
    <StyledDiv height={slideHeight}>
      <img
        alt="サービスのイメージ"
        src={`${process.env.PUBLIC_URL}/NotFound/error-404.svg`}
      ></img>
      <div>
        <div className="top-pad"></div>
        <p className="title">存在しないページです</p>
        <p className="desc">
          お探しのページは, 「移動」または「削除」された可能性があります.
        </p>
      </div>
    </StyledDiv>
  );
}

export default NotFound;
