import React from "react";
import img from "../Graph3.png";
import { Like, Unlike } from "./formReference";

const Content3 = () => {
  return (
    <div>
      <img src={img} alt="Graph3" />
      <form action="#" style={{ position: "absolute", top: 410, right: 10 }}>
        <label for="Views">Filter: </label>
        <select id="Views" name="Views">
          <option value={Like}>Like</option>
          <option value={Unlike}>Unlike</option>
        </select>
      </form>
    </div>
  );
};

export default Content3;
