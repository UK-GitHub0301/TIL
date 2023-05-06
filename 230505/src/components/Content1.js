import React from "react";
import img from "../Graph1.png";
import { Daily, Monthly, Year } from "./formReference";

const Content1 = () => {
  return (
    <div>
      <img src={img} alt="Graph1" />
      <form action="#" style={{ position: "absolute", top: 80, right: 10 }}>
        <label for="Views">Filter: </label>
        <select id="Views" name="Views">
          <option value={Daily}>Daily</option>
          <option value={Monthly}>Monthly</option>
          <option value={Year}>Year</option>
        </select>
      </form>
    </div>
  );
};

export default Content1;
