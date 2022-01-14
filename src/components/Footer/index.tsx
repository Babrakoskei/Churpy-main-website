import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FooterCopyright } from "./FooterCopyright";
import { FooterInfo } from "./FooterInfo";

const StyledFooter = styled.div`
  background:  var(--tertiary-color);
  color: var(--white-color);
  padding: 80px 0 40px 0;
`;

const Footer: FunctionComponent = () => {
  return (
    <StyledFooter>
      <FooterInfo/>
      <FooterCopyright />
    </StyledFooter>
  );
};

export { Footer };
