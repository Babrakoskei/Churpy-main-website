import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";


const FooterCompanyInfo = styled.div`
  margin-bottom: 60px;

  h4 {
    font-size: 22px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h5 {
    font-size: 18px;
    font-weight: 700;
  }

  .highlight {
    color: var(--primary-color);
  }
`;

const FooterNavigation = styled.div`
#product_nav{
  text-decoration: none;
  list-style: none;
  color:white !important;
}
.mb-2{
  text-decoration: none;
  list-style: none;
  color:white !important;
}
  h5 {
    font-size: 16px;
    font-weight: 700;
    color: var(--white-color);
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li,
    li a {
      font-size: 14px;
      color: var(--white-color);
      text-decoration: none !important;

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: 40px;
  }
`;

const FooterInfo: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 text-white">
          <FooterCompanyInfo>
            <Image
              src={"/images/logo-light.svg"}
              width={290}
              height={87}
              alt={""}
            />
            <h4 className="text-white">
              Churpy is a fintech offering an{" "}
              <span className="highlight">
                integrated receivables management product
              </span>
              . We support{" "}
              <span className="highlight">account reconciliation</span> (for
              multiple ERPs),{" "}
              <span className="highlight">
                connectivity with multiple Bank APIs and an invoice payment
                marketplace{" "}
              </span>
              (Direct debits, Card, MoMo and Bank rails).
            </h4>
            <h5>Our offices are located at ABC Place, Westlands</h5>
          </FooterCompanyInfo>
        </div>
        <div className="col-md-2 offset-md-2 text-white">
          <FooterNavigation>
            <h5>Products</h5>
            <ul className="mb-2" id="product_nav">
              <li>
              < Link href ="/reconciliation"> Churpy Reconciliation </Link>
              < Link href ="/findata"> Churpy FinData API</Link>
              < Link href ="/marketplace"> Churpy Pay </Link>
              </li>
            </ul>
          </FooterNavigation>
        </div>
        <div className="col-md-2 text-white">
          <FooterNavigation>
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#customers">Partners</a>
              </li>

              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://Churpy-team.freshteam.com/jobs"
                >
                  Careers
                </a>
              </li>
            </ul>
          </FooterNavigation>
        </div>
        <div className="col-md-2 text-white">
          <FooterNavigation>
            <h5>Legal</h5>
            <ul>
              <li>
              
               <Link href="/terms"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
              <Link href="/policy"
                >
                  Privacy Policy
                  </Link>
              </li>
            </ul>
          </FooterNavigation>
        </div>
      </div>
    </div>
  );
};

export { FooterInfo };
