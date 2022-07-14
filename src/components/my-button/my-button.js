import React from "react";

export default function MyButton({ onClick, ...props }) {
  return (
    <button onClick={onClick} {...props}>
      {props.children}
    </button>
  );
}
