import React from "react";
import { Container, Error, Base, Row, Text, Icon, Input } from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Row = function FormRow({ clickable = false, children, ...restProps }) {
  return (
    <Row clickable={clickable} {...restProps}>
      {children}
    </Row>
  );
};

Form.Text = function FormText({ color = "#737373", children, ...restProps }) {
  return (
    <Text color={color} {...restProps}>
      {children}
    </Text>
  );
};

Form.Icon = function FormIcon({ size = "30", ...restProps }) {
  return <Icon size={size} {...restProps} />;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};
