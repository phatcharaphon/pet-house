import React from "react";
import NextLink from "next/link";
import { Container, Base, Link, Close } from "./styles/modal";

export default function Modal({ children, display = "none", ...restProps }) {
  return (
    <Container display={display} {...restProps}>
      {children}
    </Container>
  );
}

Modal.Base = function ModalBase({
  translateY = "-50px",
  children,
  ...restProps
}) {
  return (
    <Base translateY={translateY} {...restProps}>
      {children}
    </Base>
  );
};

Modal.Link = function ModalLink({ children, href, ...restProps }) {
  return (
    <NextLink href={href}>
      <Link {...restProps}>{children}</Link>
    </NextLink>
  );
};

Modal.Close = function ModalClose({ children, ...restProps }) {
  return <Close {...restProps}>{children}</Close>;
};
