import React from "react";
import { Head } from "@components/Head";
import { Footer } from "@components/Footer";
import { SectionContactus } from "@components/Sections";
import { Navigation } from "@components/Navigation";
import {
  SectionPolicy,
} from "@components/Sections/Policy";

export default function policy() {
  return (
    <>
      <Head
        title={"churpy.co | Policy"}
        description={
          "Churpy makes payment operations simple, scalable, and secure."
        }
      />
      <Navigation />
      <SectionPolicy />
      <SectionContactus />
      <Footer />
    </>
  );
}
