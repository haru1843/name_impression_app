import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// at views

import Home from "./Home";
import Search from "./Search";
import Header from "./Header";
import ModalMenu from "./menuComponents/ModalMenu";
import NotFound from "./NotFound";
import Footer from "./Footer";

function Default() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Header
        headerHeight={headerHeight}
        isOpen={isOpen}
        toggleOpen={() => setOpen(!isOpen)}
      />
      <ModalMenu
        headerHeight={headerHeight}
        isOpen={isOpen}
        closeMenu={() => setOpen(false)}
      ></ModalMenu>
      <main style={styles.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          {/* <Route render={() => <p>not found!.</p>} /> */}
          {/* <Route component={NotFound} /> */}
          <Route
            render={() => (
              <NotFound
                headerHeight={headerHeight}
                footerHeight={footerHeight}
              ></NotFound>
            )}
          />
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
  },
  footer: {
    height: footerHeight,
    background: "#ddd",
  },
};
