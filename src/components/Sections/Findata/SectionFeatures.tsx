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

const SectionFeatures : FunctionComponent = () => {
  return (
    <Section id="features">
      <div className="container">
        <SectionImageFeature className="row align-items-center">
          <div className="col-lg-6 col-md-6 text-center">
            <Fade right duration={700}>
              <Image
                src={"/images/findata/findata_dev.png"}
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
              <h3>Developer friendly UI</h3>
              <p>
              Our developer's platform is clean and simple. Options are clear and to the point: just create your key and use the documentation.
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
              <h3>Numerous Bank Services
</h3>
              <p>
              We took the time to hook up to the various bank APIs available (starting in Kenya) to provide you with a single plug-in interface through which you can connect with your bank of choice, consume their services and focus on your project.
              </p>
              <a className="cta-button me-2" href="#">
                Get Started
              </a>
            </Fade>
          </div>
          <div className="col-lg-6 col-md-6 text-left">
            <Fade left duration={700}>
              <Image
                src={"/images/findata/findata_services3.png"}
                width={"570px"}
                height={"570px"}
                alt={""}
                layout="responsive"
                objectFit="contain"
              />
            </Fade>
          </div>
        </SectionImageFeature>
        <SectionImageFeature className="row align-items-center">
          <div className="col-lg-6 col-md-6 text-center">
            <Fade right duration={700}>
              <Image
                src={"/images/findata/docs.png"}
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
              <h3>Clean Docs</h3>
              <p>
              Our documentation is precise with lots of example request payloads to help you visualize the results you want. It is kept up-to-date with the features provided so that you are always working with the latest.              </p>
              <a className="cta-button me-2" href="#">
                Get Started
              </a>
            </Fade>
          </div>
        </SectionImageFeature>
      </div>
    </Section>
  );
};

export { SectionFeatures };


// const SectionFeatures: FunctionComponent = () => {
//   return (
//     <Section id="features">
//       <div className="container">
//         <div className="row align-items-start">
        
//         </div>
//       </div>
//     </Section>
//   );
// };
// export { SectionFeatures };
