import React, { useState } from "react";
import "./App.css";
import Square from "./Square";

export default function App() {
  const [state, setState] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board_container">
        <div className="board_row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board_row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board_row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}
