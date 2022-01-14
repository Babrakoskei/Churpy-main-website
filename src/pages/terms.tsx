import React from "react";
import { Head } from "@components/Head";
import { Footer } from "@components/Footer";
import { SectionContactus } from "@components/Sections";
import { Navigation } from "@components/Navigation";
import {
  SectionTerms,
} from "@components/Sections/Terms";

export default function policy() {
  return (
    <>
      <Head
        title={"churpy.co | Terms"}
        description={
          "Churpy makes payment operations simple, scalable, and secure."
        }
      />
      <Navigation />
      <SectionTerms />
      <SectionContactus />
      <Footer />
    </>
  );
}
