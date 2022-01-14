import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const Section = styled.section`
  padding: 90px 0 90px 0;
  position: relative;
  background: url("/images/background/4.png") center center / cover;
`;

const SectionImageFeature = styled.div`
  margin-bottom: 60px;

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -1px;

    span {
      color: var(--primary-color);
    }
  }

  .cta-button {
    padding: 12px 30px;
    min-width: 120px;
    outline: 0;
    font-weight: 700;
    font-size: 14px;
    color: var(--white-color);
    background: var(--primary-color);
    text-decoration: none;
    border-radius: 30px;

    &:hover {
      box-shadow: 2px 2px 20px 0 rgb(20 20 20 / 30%);
    }
  }
`;

const SectionSolutions: FunctionComponent = () => {
  return (
    <Section id="solutions">
      <div className="container">
        <SectionImageFeature className="row align-items-center">
          <div className="col-lg-6 col-md-6 text-center">
            <Fade right duration={700}>
              <Image
                src={"/images/reconciliation/products_rules.png"}
                width={"570px"}
                height={"570px"}
                alt={""}
                layout="responsive"
                objectFit="contain"
              />
            </Fade>
          </div>
          <div className="col-lg-6 col-md-6 text-left">
            <Fade left duration={700}>
              <h3>A robust Rules Engine</h3>
              <p>
                You can configure how reconciliation for your invoices will be
                done by adjusting fields and values as required . This affords
                you flexibility as well as scalability in the matching process
                and hence a high success score. All the while our Machine
                Learning mechanisms register your moves so that you don't have
                to do it forever.
              </p>
              <a className="cta-button me-2" href="#">
                Get Started
              </a>
            </Fade>
          </div>
        </SectionImageFeature>
        <SectionImageFeature className="row align-items-center">
          <div className="col-lg-6 col-md-6 text-left">
            <Fade right duration={700}>
              <h3>Bird's Eye view</h3>
              <p>
                We have multiple clean analytical views that help you visualise
                match-trends, receivables, and other metrics on the fly. At a
                glance you will know exactly what to track, who to call and
                when...
              </p>
              <a className="cta-button me-2" href="#">
                Get Started
              </a>
            </Fade>
          </div>
          <div className="col-lg-6 col-md-6 text-left">
            <Fade left duration={700}>
              <Image
                src={"/images/reconciliation/products_matching_summary.png"}
                width={"570px"}
                height={"570px"}
                alt={""}
                layout="responsive"
                objectFit="contain"
              />
            </Fade>
          </div>
        </SectionImageFeature>
      </div>
    </Section>
  );
};

export { SectionSolutions };
