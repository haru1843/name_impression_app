import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  margin: 200px 0;
`;

const SearchBox = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  & > div.box {
    transition: ease 1s;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

    width: 80%;

    margin: 0 auto;

    color: white;
    font-family: "M PLUS 1p", sans-serif;

    /* タブとコンテントの全体共通デザイン */
    & > div.tab {
      display: inline-block;
      width: 50%;

      text-align: center;
      font-size: 1.4rem;
      padding: 1vw 0;

      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
    & > div.content {
      border-radius: 0.5rem;
      height: 300px;
    }

    &.active {
      z-index: 20;
      & > div {
        background-color: rgb(60, 60, 60);

        &.content {
          /* box-shadow: 3px 3px 3px rgb(30, 30, 30, 0.6); */
        }

        &.tab {
          /* box-shadow: 3px 3px 3px rgb(30, 30, 30, 0.6); */
        }
      }
    }
    &.disactive {
      z-index: 10;
      & > div {
        background-color: rgb(140, 140, 140);
      }
    }

    /* 文字検索 */
    &:nth-of-type(1) {
      filter: drop-shadow(3px 0px 10px rgba(0, 0, 0, 0.4));

      & > div.tab {
        &:nth-of-type(1) {
          opacity: 1;
        }
        &:nth-of-type(2) {
          opacity: 0;
        }
      }
      & > div.content {
        border-top-left-radius: 0;
      }
    }

    /* 印象検索 */
    &:nth-of-type(2) {
      filter: drop-shadow(-3px 0px 10px rgba(0, 0, 0, 0.4));

      & > div.tab {
        &:nth-of-type(1) {
          opacity: 0;
        }
        &:nth-of-type(2) {
          opacity: 1;
        }
      }
      & > div.content {
        border-top-right-radius: 0;
      }
    }
  }
`;

function Search() {
  return (
    <StyledDiv>
      <SearchBox>
        <div className="box disactive">
          <div className="tab">tab</div>
          <div className="tab">tab</div>
          <div className="content">main</div>
        </div>
        <div className="box active">
          <div className="tab">tab</div>
          <div className="tab">tab</div>
          <div className="content">main</div>
        </div>
      </SearchBox>
    </StyledDiv>
  );
}

// class Search extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>at 'Search'!!</p>
//                 <p><Link to="/">Home</Link></p>
//                 <p><Link to="/search">Search</Link></p>
//             </div>
//         );
//     }
// }

export default Search;
