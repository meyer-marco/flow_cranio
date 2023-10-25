import React from "react";
import { Logo } from "../Logo/Logo";
import { Menu } from "react-feather";
import { Navbar as NavbarWrapper, Dropdown, Avatar } from "flowbite-react";

export const Navbar: React.FC<{}> = () => {
  return (
    <NavbarWrapper>
      <NavbarWrapper.Brand href="/">
        <Logo height={90} width={90} />
        <span className="text-3xl font-bold text-main-violet">Flow Cranio</span>
      </NavbarWrapper.Brand>
      <div className="flex md:order-2">
        <Dropdown arrowIcon={false} inline label={<Menu />}>
          {/*           <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header> */}
          <Dropdown.Item>Über mich</Dropdown.Item>
          <Dropdown.Item>Termine</Dropdown.Item>
          <Dropdown.Item>Was ist Cranio?</Dropdown.Item>
        </Dropdown>
      </div>
    </NavbarWrapper>
  );
};
