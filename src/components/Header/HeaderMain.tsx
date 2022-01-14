import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const Header = styled.header`
  position: relative;
  padding: 90px 0 90px 0;
  min-height: 892px;
  background: url("/images/background/1.png") center bottom / cover;


  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 120px;
  }
`;

const HeaderContent = styled.div`
  padding-left: 10%;

  h2 {
    color: #35404e;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -1px;
    margin-top: 0;
    margin-bottom: 10px;

    span {
      color: var(--primary-color);
    }
  }

  p {
    font-size: 17px;
    line-height: 1.7em;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .cta-wrapper {
    display: flex;

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
  }
`;

const HeaderImage = styled.div``;

const HeaderMain: FunctionComponent = () => {
  return (
    <Header id="hero">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Fade right duration={1000}>
              <HeaderContent>
                <h2>
                  <span>Integrated Receivables</span> Management
                </h2>
                <p>
                  Churpy makes Receivable Operations simple, scalable, and
                  secure.
                </p>
                <div className="cta-wrapper">
                  <a className="cta-button me-2" href="#products">
                    Learn More
                  </a>
                  <a
                    className="cta-button"
                    target="_blank"
                    rel="noopener"
                    href="https://developer.churpy.co/docs"
                  >
                    Read the Docs
                  </a>
                </div>
              </HeaderContent>
            </Fade>
          </div>
          <div className="col-lg-6">
            <Fade left duration={1000}>
              <HeaderImage>
                <Image
                  src={"/images/home/hero_illustration.svg"}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt={""}
                />
              </HeaderImage>
            </Fade>
          </div>
        </div>
      </div>
    </Header>
  );
};

export { HeaderMain };
