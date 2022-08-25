import "../App.css";
import React from "react";

function Timeline({ data }) {
    return (
        <>
          {data.map((item, i) => (
            <li key={i}> {item} </li>
          ))}
        </>
      );
}

export default Timeline;
