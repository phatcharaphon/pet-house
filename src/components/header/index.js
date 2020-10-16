import React from "react";
import Link from "next/link";
import { Container, Frame, Logo, Icon, Profile } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Frame = function HeaderFrame({
  direction = "row",
  children,
  ...restProps
}) {
  return (
    <Frame direction={direction} {...restProps}>
      {children}
    </Frame>
  );
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link href={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.Icon = function HeaderIcon({ ...restProps }) {
  return <Icon {...restProps} />;
};

Header.Profile = function HeaderProfile({ onClick, ...restProps }) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        border: "none",
        outline: "none",
        cursor: "pointer",
        background: "none",
      }}
    >
      <Profile {...restProps} />
    </button>
  );
};
