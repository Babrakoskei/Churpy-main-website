import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { SectionTitle } from "../Common";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const Section = styled.section`
  padding: 90px 0 90px 0;
  position: relative;
  background: url("/images/background/6.png") center center / cover;
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

  ul {
    list-style: none;
    padding-left: 12px;
    margin-top: 20px;
    margin-bottom: 1rem;

    li {
      position: relative;
      text-align: left;
      padding-left: 20px;
      font-size: 21px;
      font-weight: 700;
      line-height: 1.5;
      color: #35404e;

      &:after {
        content: "⭐";
        display: block;
        width: 21px;
        height: 25px;
        position: absolute;
        top: 0px;
        left: -10px;
      }

      &:before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 1px;
        width: 4px;
        height: 4px;
        background: #c7c9d1;
        left: 0px;
        top: calc(1em - 5px);
        z-index: 5;
      }
    }
  }
`;

const SectionSolutions: FunctionComponent = () => {
  return (
    <Section id="solutions">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <SectionTitle className="text-end">
              Our <span>Value Proposition</span>
            </SectionTitle>
          </div>
        </div>
        <SectionImageFeature className="row align-items-center">
          <div className="col-lg-6 col-md-6 text-center">
            <Fade right duration={700}>
              <Image
                src={"/images/home/developer.svg"}
                width={"570px"}
                height={"350px"}
                alt={""}
                layout="responsive"
                objectFit="contain"
              />
            </Fade>
          </div>
          <div className="col-lg-6 col-md-6 text-left">
            <Fade left duration={700}>
              <h3>
                For <span>Developers</span>
              </h3>
              <ul>
                <li>Well documented APIs.</li>
                <li>Simplified bank payment integration.</li>
                <li>Easy integration with multiple ERP platforms.</li>
              </ul>
            </Fade>
          </div>
        </SectionImageFeature>
        <SectionImageFeature className="row align-items-center">
          <div className="col-lg-6 col-md-6 text-left">
            <Fade right duration={700}>
              <h3>
                For <span>Businesses</span>
              </h3>
              <ul>
                <li>Lower and transparent transaction costs.</li>
                <li>
                  Scale without increasing payment operations headcount -–
                  one-stop shop for payment operations.
                </li>
                <li>
                  Process one - off and recurring bank payments instantly.
                </li>
              </ul>
            </Fade>
          </div>
          <div className="col-lg-6 col-md-6 text-left">
            <Fade left duration={700}>
              <Image
                src={"/images/home/business.svg"}
                width={"570px"}
                height={"350px"}
                alt={""}
                layout="responsive"
                objectFit="contain"
              />
            </Fade>
          </div>
        </SectionImageFeature>
        <SectionImageFeature className="row align-items-center">
          <div className="col-lg-6 col-md-6 text-left">
            <Fade left duration={700}>
              <Image
                src={"/images/home/security.svg"}
                width={"570px"}
                height={"350px"}
                alt={""}
                layout="responsive"
                objectFit="contain"
              />
            </Fade>
          </div>
          <div className="col-lg-6 col-md-6 text-left">
            <Fade right duration={700}>
              <h3>
                Consumer <span>Trust</span>
              </h3>
              <ul>
                <li>Seamless checkout process.</li>
                <li>Bank-grade security for payments.</li>
                <li>Seamless onboarding.</li>
                <li>Enhanced data protection.</li>
              </ul>
            </Fade>
          </div>
        </SectionImageFeature>
      </div>
    </Section>
  );
};

export { SectionSolutions };
