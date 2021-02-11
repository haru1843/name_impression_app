import React from "react";

import styled from "styled-components";

const MenuBottonDiv = styled.div`
  cursor: pointer;
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;

  position: relative;
  width: ${(props) => props.h * 1.4}px;
  height: ${(props) => props.h}px;
  appearance: none;

  position: absolute;
  top: 50%;
  right: 10px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);

  span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;

    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: rgb(80, 80, 80);
    border: none;
    border-radius: 4px;

    &:nth-of-type(1) {
      top: 0;
      &.menu-open {
        transform: translateY(${(props) => props.h * 0.42}px) rotate(-45deg);
      }
    }
    &:nth-of-type(2) {
      top: 49%;
      top: -webkit-calc(50% - 2px);
      top: calc(50% - 2px);
      &.menu-open {
        opacity: 0;
      }
    }
    &:nth-of-type(3) {
      bottom: 0;
      &.menu-open {
        transform: translateY(-${(props) => props.h * 0.42}px) rotate(45deg);
      }
    }
  }
`;

function MenuButton(props) {
  const buttonHeight = Math.max(Math.min(25, props.headerHeight * 0.5), 10);

  return (
    <MenuBottonDiv onClick={props.toggleOpen} h={buttonHeight}>
      <span className={props.isOpen ? "menu-open" : ""}></span>
      <span className={props.isOpen ? "menu-open" : ""}></span>
      <span className={props.isOpen ? "menu-open" : ""}></span>
      {/* <img src={menuImgPath} alt="メニューボタン" /> */}
    </MenuBottonDiv>
  );
}

export default MenuButton;
