import React from "react";
import {
  Container,
  Frame,
  Label,
  Select,
  Option,
  Input,
} from "./styles/filter";

export default function Filter({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Filter.Frame = function FilterFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Filter.Label = function FilterLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Filter.Select = function FilterSelect({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>;
};

Filter.Option = function FilterOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};

Filter.Input = function FilterInput({ ...restProps }) {
  return <Input {...restProps} />;
};
