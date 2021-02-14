import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: inline-block;

  text-align: left;

  background-color: #fff;
  border: 3px solid rgb(100, 100, 100);
  border-radius: 5px;

  box-shadow: 4px 2px 6px rgba(0, 0, 0, 0.4);

  font-size: 1.2rem;

  height: calc(1.2rem + 1.5vw);
  width: calc(40px + 1.2rem * 5 + 3vw);

  &:hover {
    box-shadow: 3px 1px 3px rgba(0, 0, 0, 0.6);
    background-color: rgb(100, 100, 100);
    & > a {
      color: rgb(255, 255, 255);
      & > svg {
        fill: rgb(255, 255, 255);
        rotate: 360;
      }
    }
  }

  & > a {
    display: inline-block;
    position: relative;

    padding: 0 1.5vw;

    height: 100%;
    width: calc(100% - 3vw);

    text-decoration: none;
    color: rgb(100, 100, 100);

    font-family: "M PLUS 1p", "Hiragino Kaku Gothic ProN", sans-serif;

    & > span {
      position: absolute;
      top: calc(50% - 2px);
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    & > svg {
      display: block;
      height: 35px;
      width: 35px;

      fill: rgb(100, 100, 100);

      position: absolute;
      top: calc(50% - 2px);
      right: calc(1.5vw - 5px);
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);

      transition: all 500ms ease;
    }
  }
`;

function LinkButton(props) {
  return (
    <StyledDiv className={props.className}>
      <Link to={props.linkPath}>
        <span>使ってみる</span>
        <svg viewBox="0 0 492.004 492.004">
          <g>
            <path
              d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
			c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
			v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
			c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
			l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
            />
          </g>
        </svg>
      </Link>
    </StyledDiv>
  );
}

export default LinkButton;
