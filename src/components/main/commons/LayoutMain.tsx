import React from "react";
import { classNames } from "@/helpers";
import Navbar from "@/components/main/commons/Navbar";
import Footer from "@/components/main/commons/Footer";

export type props = {
  className?: string;
  children: React.ReactNode;
};

const LayoutMain: React.FC<props> = ({ className, children }) => {
  return (
    <div className={classNames("", className)}>
      <Navbar />
      <div className="mt-14 mb-14">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutMain;
