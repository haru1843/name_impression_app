import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import MediaQuery, { useMediaQuery } from "react-responsive";

import MenuBottom from "./menuComponents/MenuBottom";

import "./Header.scss";

const HeaderStyle = styled.div`
  z-index: 99999;
  height: ${(styleProps) => styleProps.h}px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: rgb(247, 247, 247);
  text-align: center;
  & > .container > div > a {
    height: ${(styleProps) => styleProps.itemHeight}px;
    line-height: ${(styleProps) => styleProps.itemHeight}px;
  }
`;

function Header(props) {
  const itemHeightRatio = 0.8;
  const itemHeight = props.headerHeight * itemHeightRatio;

  if (props.isOpen & useMediaQuery({ query: "(min-width: 1000px)" })) {
    props.toggleOpen();
    console.log("hoge");
  }

  return (
    <HeaderStyle id="header" h={props.headerHeight} itemHeight={itemHeight}>
      <div className="container">
        <MediaQuery query="(max-width: 1000px)">
          <div className="grid00">
            <img
              src={`${process.env.PUBLIC_URL}/header/logo.png`}
              alt="ヘッダーロゴ"
            />
          </div>
          <div className="grid01">
            <MenuBottom {...props}></MenuBottom>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 1000px)">
          <div className="grid00">
            <img
              src={`${process.env.PUBLIC_URL}/header/logo.png`}
              alt="header-logo"
            />
          </div>
          <div className="grid01">
            <Link className="header-link" to="/">
              ホーム
            </Link>
          </div>
          <div className="grid02">
            <Link className="header-link" to="/search">
              名前検索
            </Link>
          </div>
          <div className="grid03">
            <Link className="header-link" to="/generate">
              名前生成
            </Link>
          </div>
          <div className="grid04">
            <Link className="header-link" to="/random">
              ランダム取得
            </Link>
          </div>
          <div className="grid05">
            <Link className="header-link" to="/jedge">
              印象判断
            </Link>
          </div>
          <div className="grid06"></div>
        </MediaQuery>
      </div>
    </HeaderStyle>
  );
}

export default Header;
