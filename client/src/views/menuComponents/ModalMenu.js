import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import { Transition } from "react-transition-group";

import "./ModalMenu.scss";

const WindowDiv = styled.div`
  height: calc((100vh - ${(props) => props.headerHeight}px));
  width: 100%;

  -webkit-transform: translateX(100%);
  transform: translateX(100%);

  & > div {
    color: rgb(200, 200, 200);
    width: 0;
    margin-right: 0;
    margin-left: auto;

    border-top-left-radius: 5vw;
    /* border-bottom-left-radius: 1vw; */
    border-bottom: 2px solid rgb(170, 170, 170);

    background-color: rgba(20, 20, 20, 0.9);

    line-height: calc((100vh - ${(props) => props.headerHeight}px) / 5);
    height: calc(20% - 2px);

    & > p {
      margin: 0;
      font-size: 4vw;
      margin-left: 5vw;
    }
  }
`;

function ModalWindow(props) {
  return (
    <WindowDiv headerHeight={props.headerHeight}>
      <div>
        <p>→ ホーム</p>
      </div>
      <div>
        <p>→ 名前検索</p>
      </div>
      <div>
        <p>→ 名前生成</p>
      </div>
      <div>
        <p>→ ランダム取得</p>
      </div>
      <div>
        <p>→ 印象判断</p>
      </div>
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

  transition: all 0.3s;
`;

const modalDivAni = {
  entering: {
    zIndex: 9999,
    opacity: 1,
  },
  entered: {
    zIndex: 9999,
    opacity: 1,
  },
  exiting: {
    zIndex: -1,
    opacity: 0,
  },
  exited: {
    zIndex: -1,
    opacity: 0,
  },
};

function ModalMenu(props) {
  return (
    <Transition in={props.isOpen} timeout={300}>
      {(state) => (
        <ModalDiv
          id="modal-div"
          headerHeight={props.headerHeight}
          style={modalDivAni[state]}
        >
          <ModalWindow
            className={props.isOpen ? "open" : ""}
            headerHeight={props.headerHeight}
          ></ModalWindow>
        </ModalDiv>
      )}
    </Transition>
  );
}

export default ModalMenu;
