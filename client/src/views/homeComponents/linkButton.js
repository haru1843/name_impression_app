import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSpan = styled.span`
  background-color: #fff;
  border: 2px solid rgb(100, 100, 100);
  border-radius: 5px;
  padding: 1vw;

  font-size: clamp(1.2rem, 1.5vw, 1.5vw);

  & > img {
    display: inline-block;
  }
`;

function LinkButton() {
  return (
    <StyledSpan>
      <Link to="/search">
        <span>利用してみる</span>
        <img alt="右矢印の画像"></img>
      </Link>
    </StyledSpan>
  );
}

export default LinkButton;
