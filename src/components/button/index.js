import React from "react";
import { Btn } from "./styles/button";

export default function Button({ color = "#f1bc19", children, ...restProps }) {
  return (
    <Btn color={color} {...restProps}>
      {children}
    </Btn>
  );
}
