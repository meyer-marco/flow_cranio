import React from "react";
import { Logo } from "../Logo/Logo";
import style from "./navBar.module.css";

export const Navbar: React.FC<{}> = () => {
  return (
    <div className="flex flex-row content-center items-center">
      <div>
        <Logo height={90} width={90} />
      </div>

      <div className="">
        <p className="text-2xl font-semibold text-main-violet">Flow Cranio</p>
      </div>
    </div>
  );
};
