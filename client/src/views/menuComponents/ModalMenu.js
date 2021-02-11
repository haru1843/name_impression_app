import React, { useState } from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import { Transition } from "react-transition-group";

import "./ModalMenu.scss";

const LinkDiv = styled.div`
  margin-right: 0;
  margin-left: auto;

  border-top-left-radius: 5vw;
  border-bottom: 2px solid rgb(170, 170, 170);

  background-color: rgba(20, 20, 20, 0.9);

  line-height: calc((100vh - ${(props) => props.headerHeight}px) / 5);
  height: calc(20% - 2px);

  &:nth-of-type(1) {
    transition: all 0.32s ease;
    transition-delay: calc(0.2s + 0ms);
  }
  &:nth-of-type(2) {
    transition: all 0.31s ease;
    transition-delay: calc(0.2s + 50ms);
  }
  &:nth-of-type(3) {
    transition: all 0.3s ease;
    transition-delay: calc(0.2s + 100ms);
  }
  &:nth-of-type(4) {
    transition: all 0.29s ease;
    transition-delay: calc(0.2s + 150ms);
  }
  &:nth-of-type(5) {
    transition: all 0.28s ease;
    transition-delay: calc(0.2s + 200ms);
  }
  &:hover {
    transition: 0.1s;
    width: 100%;
    background-color: rgba(40, 40, 40, 0.95);
  }

  & > a {
    color: rgb(200, 200, 200);

    display: block;
    text-decoration: none;

    width: 100%;
    margin: 0;
    padding-left: 5vw;
    font-size: 4vw;
  }
`;

const linkDivAni = {
  entering: {
    width: "90%",
    transform: "translateX(0%)",
  },
  entered: {
    width: "90%",
    transition: "all 200ms ease",
    transform: "translateX(0%)",
  },
  exiting: {
    width: "0",
    transition: "all 100ms ease",
    transform: "translateX(100%)",
  },
  exited: {
    width: "0",
    transition: "all 100ms ease",
    transform: "translateX(100%)",
  },
};

const maxWidth = {
  width: "100%",
};

function LinkBar(props) {
  const [isHover, setHoverState] = useState(false);

  return (
    <LinkDiv
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      onClick={props.closeMenu}
      headerHeight={props.headerHeight}
      style={Object.assign(
        {},
        linkDivAni[props.state],
        isHover ? maxWidth : {}
      )}
    >
      <Link to={props.linkUrl}>{props.name}</Link>
    </LinkDiv>
  );
}

const WindowDiv = styled.div`
  height: calc((100vh - ${(props) => props.headerHeight}px));
  width: 100%;

  -webkit-transform: ${(props) => props.transform};
  transform: ${(props) => props.transform};
`;

const modalWindowAni = {
  entering: {
    width: "90%",
    transform: "translateX(0%)",
  },
  entered: {
    width: "90%",
    transform: "translateX(0%)",
  },
  exiting: {
    width: "0",
    transform: "translateX(100%)",
  },
  exited: {
    width: "0",
    transform: "translateX(100%)",
  },
};

function ModalWindow(props) {
  return (
    <WindowDiv headerHeight={props.headerHeight} {...modalWindowAni}>
      <LinkBar
        name={"ホーム"}
        linkUrl={"/"}
        state={props.state}
        headerHeight={props.headerHeight}
        closeMenu={props.closeMenu}
      ></LinkBar>
      <LinkBar
        name={"名前検索"}
        linkUrl={"/search"}
        state={props.state}
        headerHeight={props.headerHeight}
        closeMenu={props.closeMenu}
      ></LinkBar>
      <LinkBar
        name={"名前生成"}
        linkUrl={"/generate"}
        state={props.state}
        headerHeight={props.headerHeight}
        closeMenu={props.closeMenu}
      ></LinkBar>
      <LinkBar
        name={"ランダム取得"}
        linkUrl={"/random"}
        state={props.state}
        headerHeight={props.headerHeight}
        closeMenu={props.closeMenu}
      ></LinkBar>
      <LinkBar
        name={"印象判断"}
        linkUrl={"/judge"}
        state={props.state}
        headerHeight={props.headerHeight}
        closeMenu={props.closeMenu}
      ></LinkBar>
    </WindowDiv>
  );
}

const ModalDiv = styled.div`
  height: calc(100vh - ${(props) => props.headerHeight}px);
  width: 100%;
  position: fixed;
  top: ${(props) => props.headerHeight + 1}px;
  left: 0px;

  background-color: rgba(30, 30, 30, 0.8);
`;

const modalDivAni = {
  entering: {
    transition: "all 300ms ease",
    zIndex: 9999,
    opacity: 1,
  },
  entered: {
    transition: "all 300ms ease",
    zIndex: 9999,
    opacity: 1,
  },
  exiting: {
    transition: "all 300ms ease",
    zIndex: -1,
    opacity: 0,
  },
  exited: {
    transition: "all 300ms ease",
    zIndex: -1,
    opacity: 0,
  },
};

function ModalMenu(props) {
  return (
    <Transition in={props.isOpen} timeout={10}>
      {(state) => (
        <ModalDiv
          id="modal-div"
          headerHeight={props.headerHeight}
          style={modalDivAni[state]}
        >
          <ModalWindow
            headerHeight={props.headerHeight}
            state={state}
            closeMenu={props.closeMenu}
          ></ModalWindow>
        </ModalDiv>
      )}
    </Transition>
  );
}

export default ModalMenu;
