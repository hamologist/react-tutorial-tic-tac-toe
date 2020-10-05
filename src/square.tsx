// eslint-disable-next-line
import React from "react";

export default function Square(props: any): JSX.Element {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
