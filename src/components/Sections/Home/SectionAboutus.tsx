import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { SectionTitle } from "../Common";
import Image from "next/image";
import { useDevice } from "src/hooks/useDevice";

const Section = styled.section`
  padding: 90px 0 90px 0;
  position: relative;
  background: url("/images/background/6.png") center center / cover;
`;

const SectionTeamTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 25px;
`;

const SectionTeamTile = styled.div`
  margin-bottom: 30px;

  h4 {
    font-size: 19px;
    font-weight: 700;
    margin-top: 20px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

const SectionTeamTileImageWrapper = styled.div`
  width: 190px;
  height: 190px;
  margin: 0 auto;
  border-radius: 60%;
  box-shadow: 0 1rem 3rem 0 rgba(0, 0, 0, 0.175) !important;

  img {
    border-radius: 60%;
  }
`;

const SectionAboutus: FunctionComponent = () => {
  const device = useDevice();

  return (
    <Section id="aboutus">
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <SectionTitle>
              About <span>Us</span>
            </SectionTitle>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <SectionTeamTitle>Awesome Team</SectionTeamTitle>
          </div>
          <div className="col-lg-3 offset-lg-3 col-md-6 col-sm-6 m text-center">
            <SectionTeamTile>
              <SectionTeamTileImageWrapper>
                <Image
                  src={"/images/team/1.png"}
                  width={"190px"}
                  height={"190px"}
                  alt={""}
                />
              </SectionTeamTileImageWrapper>
              <h4>John Kiptum</h4>
              <p>
                9 years, ex-Citibank Head of Operational Risk.​ Africa Risk
                Head, NetGuardians.​ Ex-founder, risktech startup. Strathmore &
                Leicester (MBA)​
              </p>
            </SectionTeamTile>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 m text-center">
            <SectionTeamTile>
              <SectionTeamTileImageWrapper>
                <Image
                  src={"/images/team/2.png"}
                  width={"190px"}
                  height={"190px"}
                  alt={""}
                  layout="responsive"
                  objectFit="contain"
                />
              </SectionTeamTileImageWrapper>
              <h4> Kennedy Mukuna</h4>
              <p>
                Product Head & Data Scientist​ Ex-founder, Afyakit.​Finance and
                Private Sector Analyst, World Bank.Harvard (Math & Economics)​
              </p>
            </SectionTeamTile>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 mt-6">
            {device && device === "desktop" && (
              <Image
                src={"/images/home/journey.svg"}
                width={"1200px"}
                height={"572px"}
                alt={
                  "an illustration showing how Churpy streamlines data from various platforms"
                }
                layout="responsive"
                objectFit="contain"
              />
            )}
            {device && device === "mobile" && (
              <Image
                src={"/images/home/journey-mobile.svg"}
                width={"100%"}
                height={"100%"}
                alt={
                  "an illustration showing how Churpy streamlines data from various platforms"
                }
                layout="responsive"
                objectFit="contain"
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export { SectionAboutus };
