import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Box from "./Box/Box";
// import CustomersSlider from "./CustomersSlider/CustomersSlider";
import HomeAbout from "./pages/HomeAbout";

const TITLE = "Home || Page";
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <NavBar />
      <Hero />
      <Box />
      <HomeAbout/>
      {/* <CustomersSlider/> */}
    </div>
  );
}
