import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
import { SectionTitle } from "../Common";
import Fade from "react-reveal/Fade";

const Section = styled.section`
  padding: 90px 0 90px 0;
  position: relative;
  

  img{
    padding:100px;
  }
`;



// const Image = styled

const SectionImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 15px 15px 0px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: block;
  }
  // img{
  //   padding: 0 90 0 90;
  // }
`;




const SectionIntergrations: FunctionComponent = () => {
  return (
    <Section id="customers">
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <SectionTitle>
            ERP <span>Integrations</span>
            </SectionTitle>
            <p> <b> Integrate with multiple banks and ERPs for a seamless reconciliation and payment experience.</b></p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <Fade bottom duration={1000}>
              <SectionImageWrapper>

              <Image
                  src={"/images/client-logos/integrated_sapbusinessone.png"}
                  width="122"
                  height="122"
                  alt={"SAP"}
                  
                />
              <Image
                  src={"/images/client-logos/integrated_sapecc.png"}
                  width="122"
                  height="122"
                  alt={"SAP"}
                />
              <Image
                  src={"/images/client-logos/integrated_clear.png"}
                  width="122"
                  height="122"
                  alt={"SAP"}
                />     
              <Image
                  src={"/images/client-logos/integrated_dynamics.png"}
                  width="122"
                  height="122"
                  alt={"SAP"}
                />    
               <Image
                  src={"/images/client-logos/integrated_exact.png"}
                  width="122"
                  height="122"
                  alt={"SAP"}
                />       
              <Image
                  src={"/images/client-logos/integrated_freeagent.png"}
                  width="122"
                  height="122"
                  alt={"SAP"}
                />    
              <Image
                  src={"/images/client-logos/integrated_freshbooks.png"}
                  width="122"
                  height="122"
                  alt={"SAP"}
                />   
               <Image
                  src={"/images/client-logos/integrated_kashflow.png"}
                  width="122"
                  height="122"
                  alt={"SAP"}
                />   
              <Image
                  src={"/images/client-logos/integrated_kashoo.png"}
                  width="122"
                  height="122"
                  alt={"SAP"}
                />                                                                                   
              </SectionImageWrapper>
              <SectionImageWrapper>
              </SectionImageWrapper>
              <SectionImageWrapper>
              <Image
                  src={"/images/client-logos/integrated_myob.png"}
                  width="122"
                  height="122"
                  alt={"NCBA"}
                />                
              <Image
                  src={"/images/client-logos/integrated_oracle.png"}
                  width="122"
                  height="122"
                  alt={"NCBA"}
                />
                <Image
                  src={"/images/client-logos/integrated_pandle.png"}
                  width="122"
                  height="122"
                  alt={"NCBA"}
                />                 
              <Image
                  src={"/images/client-logos/integrated_quickbook.png"}
                  width="122"
                  height="122"
                  alt={"NCBA"}
                />
 
                <Image
                  src={"/images/client-logos/integrated_sage.png"}
                  width="122"
                  height="122"
                  alt={"NCBA"}
                />       
                <Image
                  src={"/images/client-logos/integrated_wave.png"}
                  width="122"
                  height="122"
                  alt={"NCBA"}
                /> 
                <Image
                  src={"/images/client-logos/integrated_xero.png"}
                  width="122"
                  height="122"
                  alt={"NCBA"}
                />  
                <Image
                  src={"/images/client-logos/integrated_zohobooks.png"}
                  width="122"
                  height="122"
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

export { SectionIntergrations };
