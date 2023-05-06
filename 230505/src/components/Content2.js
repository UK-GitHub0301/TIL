import React from "react";
import img from "../Graph2.png";
import { Earnings, Sales, Earnings_Sales } from "./formReference";

const Content2 = () => {
  return (
    <div>
      <img src={img} alt="Graph2" />
      <form action="#" style={{ position: "absolute", top: 410, right: 720 }}>
        <label for="Views">Filter: </label>
        <select id="Views" name="Views">
          <option value={Earnings}>Earnings</option>
          <option value={Sales}>Sales</option>
          <option value={Earnings_Sales}>Earnings_Sales</option>
        </select>
      </form>
    </div>
  );
};

export default Content2;
