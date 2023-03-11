/** @format */

import type { PropsWithChildren, ReactElement } from "react";

import { Header } from "./content/header";
import { Footer } from "./content/footer";

function AdminLayout({ children }: PropsWithChildren<{}>): ReactElement {
  return (
    <>
      <Header />
      <main className="my-16 flex min-h-[40vh] gap-10 px-5">
        
        {children}
      </main>
      <Footer />
    </>
  );
}

export default AdminLayout;
