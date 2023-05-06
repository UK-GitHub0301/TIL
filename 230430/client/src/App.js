import React from "react";
import "./App.css";
import main from "./component/layout/main";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo" class="logo"></img>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>{/* 첫 번째 섹션의 내용 */}방문자수 그래프</section>
        <section style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            {/* 왼쪽 아이템 */}수익/매출 그래프
          </div>
          <div style={{ width: "50%" }}>
            {/* 오른쪽 아이템 */}판매랭크 그래프
          </div>
        </section>
      </main>

      <footer>
        <p>&copy;2023 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
