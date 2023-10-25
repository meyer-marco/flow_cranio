import React from "react";
import { Logo } from "../Logo/Logo";
import { Navbar as NavbarWrapper } from "flowbite-react";

export const Navbar: React.FC<{}> = () => {
  return (
    <NavbarWrapper.Brand href="/">
      <Logo height={90} width={90} />
      <span className="text-3xl font-bold text-main-violet">Flow Cranio</span>
    </NavbarWrapper.Brand>
  );
};
