import React from "react";
import { Container, Inner } from "./styles/pageContent";

export default function PageContent({
  direction = "row",
  children,
  ...restProps
}) {
  return (
    <Container>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>
    </Container>
  );
}
