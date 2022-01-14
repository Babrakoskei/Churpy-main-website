import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
import { SectionTitle } from "../Common";
import Fade from "react-reveal/Fade";

const Section = styled.section`
  padding: 90px 0 90px 0;
  position: relative;
`;

const SectionImageWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: block;
  }
`;

const SectionCustomers: FunctionComponent = () => {
  return (
    <Section id="customers">
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <SectionTitle>
              Bank <span>Integrations</span>
            </SectionTitle>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <Fade bottom duration={1000}>
              <SectionImageWrapper>
                <Image
                  src={"/images/client-logos/2.png"}
                  width="215"
                  height="72"
                  alt={"Bank of Kenya"}
                />
                <Image
                  src={"/images/client-logos/3.png"}
                  width="215"
                  height="72"
                  alt={"Equity"}
                />
                <Image
                  src={"/images/client-logos/4.png"}
                  width="215"
                  height="72"
                  alt={"CitiBank"}
                />
                <Image
                  src={"/images/client-logos/5.png"}
                  width="215"
                  height="72"
                  alt={"Standard Chartered"}
                />
                <Image
                  src={"/images/client-logos/6.png"}
                  width="215"
                  height="72"
                  alt={"NCBA"}
                />
              </SectionImageWrapper>
            </Fade>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { SectionCustomers };
