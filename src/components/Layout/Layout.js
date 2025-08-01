import React, { useEffect, useState } from "react";
import Nav from "./Nav/Nav";
import Background from "./Background/Background";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/contact" },
];

const Layout = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <div className=" flex flex-col h-screen">
        <Helmet>
          <html lang="en" />
        </Helmet>
        <Nav navLinks={navLinks} />
        <Background />
        <div
          className={`flex-1 flex items-center flex-col w-full  ${
            isLoaded
              ? "opacity-100 transition-opacity duration-[2000ms]"
              : "opacity-0"
          }`}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
