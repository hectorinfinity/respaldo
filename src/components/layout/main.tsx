/** @format */

import type { PropsWithChildren, ReactElement } from "react";

import { Header } from "./content/header";
import { Footer } from "./content/footer";

function MainLayout({ children }: PropsWithChildren<{}>): ReactElement {
  return (
    <>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}

export default MainLayout;
