import React from "react";
import { Head } from "@components/Head";
import { Footer } from "@components/Footer";
import { HeaderHome } from "@components/Header";
import {
  SectionAboutus,
  SectionProducts,
  SectionCustomers,
  SectionSolutions,
  SectionIntergrations,
} from "@components/Sections/Home";

import {
  SectionContactus,
} from "@components/Sections";
import { Navigation } from "@components/Navigation";

export default function Home() {
  return (
    <>
      <Head
        title={"churpy.co | Home"}
        description={
          "Churpy makes payment operations simple, scalable, and secure."
        }
      />      
      <Navigation/>
      <HeaderHome />
      <SectionProducts />
      <SectionSolutions />
      <SectionCustomers />
      <SectionIntergrations/>
      <SectionAboutus />
      <SectionContactus/>
      <Footer />
    </>
  );
}
