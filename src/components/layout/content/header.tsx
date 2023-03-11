/** @format */

import { ToolBar } from "./header/toolbar";
import { NavBar } from "./header/navbar";

export const Header = () => {
  return (
    <header className="relative">
      <ToolBar />
      <NavBar />
    </header>
  );
};
