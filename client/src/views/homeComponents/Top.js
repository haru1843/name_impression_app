import React from "react";

import styled from "styled-components";

const HomeTop = styled.div`
  height: ${(styleProps) => styleProps.h}px;
  width: 100%;
  margin: 0;
  padding: 0;
  background: ${(styleProps) => styleProps.bgc};
  text-align: center;

  & > .container {
    height: 80%;
    display: grid;
    grid-template-columns: 45% 55%;

    grid-template-rows: 1fr;

    grid-template-areas: "g0 g1";

    & > div {
      position: relative;
    }
    & > #top-logo {
      grid-area: g0;

      img {
        width: 90%;
        grid-area: g0;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }
    & > #top-message {
      grid-area: g1;

      p {
        font-family: "M PLUS 1p", sans-serif;
        font-weight: 900;
        text-align: left;
        color: rgb(249, 249, 249);
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

        grid-area: g0;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);

        margin: 0;

        font-size: clamp(20px, 5vw, 90px);
      }
    }
  }

  #proverb {
    padding: 0 50px;
    p {
      font-size: 3vw;
      color: rgb(110, 110, 110);
      text-align: right;
      font-family: "Amatic SC", cursive;
      font-weight: 100;
    }
  }
`;

function Top(props) {
  return (
    <HomeTop h={props.h} bgc={props.bgc}>
      <div className="container">
        <div id="top-logo">
          <img
            src={`${process.env.PUBLIC_URL}/home/logo2.png`}
            alt="top-logo"
          />
        </div>
        <div id="top-message">
          <p className="">
            CREATE A NAME
            <br />
            INTERPRET A NAME
          </p>
        </div>
      </div>
      <div id="proverb">
        <p>The first step in life with a great name.</p>
      </div>
    </HomeTop>
  );
}

export default Top;
