import React, {  } from "react";
import Footer from "./footer";
import Navbar from "./header/navbar";

const Layout = ({ children }) => {
  

  return (
    <React.Fragment>

      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main className="container mx-auto max-w-7xl py-4 flex-grow" >
          {children}
          <Footer />
        </main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
