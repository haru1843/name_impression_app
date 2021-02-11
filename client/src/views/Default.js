import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

// at views

import Home from "./Home";
import Search from "./Search";
import Header from "./Header";
import ModalMenu from "./menuComponents/ModalMenu";
import Footer from "./Footer";

function Default() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Header
        headerHeight={headerHeight}
        isOpen={isOpen}
        toggleOpen={() => setOpen(!isOpen)}
      />

      {/* {isOpen && <div id="menu-modal">hoge</div>} */}
      {/* {isOpen && (
        <ModalMenu headerHeight={headerHeight} isOpen={isOpen}></ModalMenu>
      )} */}
      <ModalMenu
        headerHeight={headerHeight}
        isOpen={isOpen}
        closeMenu={() => setOpen(false)}
      ></ModalMenu>

      <main style={styles.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route render={() => <p>not found!.</p>} />
        </Switch>
      </main>
      <Footer h={footerHeight} />
    </div>
  );
}

export default Default;

const headerHeight = 100;
const footerHeight = 80;

//css
const styles = {
  main: {
    marginTop: headerHeight,
    height: 2000,
  },
  footer: {
    height: footerHeight,
    background: "#ddd",
  },
};
