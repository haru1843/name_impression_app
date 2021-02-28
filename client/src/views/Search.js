import React, { useState } from "react";
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
    /* transition: ease 1s; */
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

      user-select: none;
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
  const [fliped, setFlipState] = useState(false);
  return (
    <StyledDiv>
      <SearchBox>
        <div className={"box " + (!fliped ? "active" : "disactive")}>
          <div className="tab" onClick={() => setFlipState(false)}>
            tab
          </div>
          <div className="tab" onClick={() => setFlipState(true)}>
            tab
          </div>
          <div className="content">
            <div>
              <input type="radio" name="search-method" />
              <label>前方一致で検索</label>
            </div>
            <div>
              <input type="radio" name="search-method" />
              <label>部分一致で検索</label>
            </div>
            <input type="search" maxlength="10" pattern="[\u3041-\u3096]*" />
          </div>
        </div>
        <div className={"box " + (fliped ? "active" : "disactive")}>
          <div className="tab" onClick={() => setFlipState(false)}>
            tab
          </div>
          <div className="tab" onClick={() => setFlipState(true)}>
            tab
          </div>
          <div className="content">fliped! slide2.</div>
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
