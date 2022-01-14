import React from "react";
import { Head } from "@components/Head";
import { Footer } from "@components/Footer";
import { HeaderMarketplace } from "@components/Header";
import { SectionContactus } from "@components/Sections";
import { Navigation } from "@components/Navigation";
import {
  SectionFeatures,
  SectionSolutions,
} from "@components/Sections/Marketplace";

export default function Marketplace() {
  return (
    <>
      <Head
        title={"churpy.co | Marketplace"}
        description={
          "Churpy makes payment operations simple, scalable, and secure."
        }
      />
      <Navigation />
      <HeaderMarketplace />
      <SectionFeatures />
      <SectionSolutions />
      <SectionContactus />
      <Footer />
    </>
  );
}
