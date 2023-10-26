import React from "react";
import Logo from "../Logo/Logo";
import { Menu } from "react-feather";
import { Navbar as NavbarWrapper, Dropdown, Avatar } from "flowbite-react";
import style from "./navbar.module.css";

interface ChildProps {
  onDataReceive: (data: string) => void;
}

const Navbar: React.FC<ChildProps> = ({ onDataReceive }) => {
  const sendDataToParent = (data: string) => {
    onDataReceive(data);
  };

  return (
    <NavbarWrapper className="bg-main-background px-4 fixed w-full top-0 left-0">
      <NavbarWrapper.Brand href="/">
        <Logo height={90} width={90} />
        <span className="md:text-3xl text-xl font-bold text-main-violet">
          Flow Cranio
        </span>
      </NavbarWrapper.Brand>
      <div
        className={`flex md:order-2 flex-0 text-main-violet z-10 ${style.menu}`}
      >
        <Dropdown
          className="text-main-violet "
          arrowIcon={false}
          inline
          label={<Menu className="text-main-violet" />}
        >
          {/*           <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header> */}
          <Dropdown.Item
            onClick={() => {
              sendDataToParent("section-1");
            }}
          >
            Über mich
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              sendDataToParent("section-2");
            }}
          >
            Termine
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              sendDataToParent("section-3");
            }}
          >
            Was ist Cranio?
          </Dropdown.Item>
        </Dropdown>
      </div>
    </NavbarWrapper>
  );
};
export default Navbar;
