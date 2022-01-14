import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Copyright = styled.span`
  color: var(--white-color);
  font-size: 14px;
`;

const SocialLinks = styled.div`
  display: inline-block;
  
  i {
    text-shadow: none;
    color: var(--white-color);
    padding: 12px 10px 8px 10px;
    width: 34px;
    height: 34px;
    text-align: center;
    font-size: 16px;
    border-radius: 60px;
    margin: 0 5px 0 5px;
    background: var(--primary-color);
  
    &:hover{
      color: var(--primary-color);  
      background: var(--white-color);
      border-color: #eceff3;
    }
  }
  
`;

const FooterCopyright: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-md-start text-sm-center mb-sm-4">
          <Copyright>
            © Copyright 2021 - Churpy Inc. All Rights Reserved
          </Copyright>
        </div>
        <div className="col-md-6 text-md-end text-sm-center">
          <SocialLinks>
              <a
                target="_blank"
                rel="noopener"
                href="https://twitter.com/ChurpyInc"
              >
                <i className="fa fa-twitter fa-lg" />
              </a>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/company/Churpy"
              >
                <i className="fa fa-linkedin fa-lg" />
              </a>
          </SocialLinks>
        </div>
      </div>
    </div>
  );
};

export { FooterCopyright };
