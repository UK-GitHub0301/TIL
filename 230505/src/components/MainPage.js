import React from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Header from "./Header";
import Footer from "./Footer";

export const MainPage = () => {
  return (
    <React.Fragment>
      <header>
        <div className="Header">
          <Header />
          <header />
        </div>
      </header>
      <section>
        <div className="layout">
          <div className="content1">
            <Content1 />
          </div>
          <div className="content2">
            <Content2 />
          </div>
          <div className="content3">
            <Content3 />
          </div>
        </div>
      </section>
      <footer>
        <div className="Footer">
          <Footer />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default MainPage;
