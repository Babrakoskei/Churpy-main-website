import React from "react";
import { Head } from "@components/Head";
import { Footer } from "@components/Footer";
import { HeaderReconciliation } from "@components/Header";
import { SectionContactus } from "@components/Sections";
import { Navigation } from "@components/Navigation";
import {
  SectionFeatures,
  SectionSolutions,
} from "@components/Sections/Reconciliation";

export default function Reconciliation() {
  return (
    <>
      <Head
        title={"churpy.co | Reconciliation"}
        description={
          "Churpy makes payment operations simple, scalable, and secure."
        }
      />
      <Navigation />
      <HeaderReconciliation />
      <SectionFeatures />
      <SectionSolutions />
      <SectionContactus />
      <Footer />
    </>
  );
}
