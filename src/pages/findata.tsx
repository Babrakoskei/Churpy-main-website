import React from "react";
import { Head } from "@components/Head";
import { Footer } from "@components/Footer";
import { HeaderFindata} from "@components/Header";
import { SectionContactus } from "@components/Sections";
import { Navigation } from "@components/Navigation";
import {
  SectionFeatures,
} from "@components/Sections/Findata";

export default function Findata() {
  return (
    <>
      <Head
        title={"churpy.co | Findata"}
        description={
          "Churpy makes payment operations simple, scalable, and secure."
        }
      />
      <Navigation />
      <HeaderFindata/>
      <SectionFeatures />
      <SectionContactus />
      <Footer />
    </>
  );
}
