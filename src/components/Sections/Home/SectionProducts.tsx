import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
import { SectionTitle } from "../Common";
import Fade from "react-reveal/Fade";
import Link from "next/link";

const Section = styled.section`
  padding: 90px 0 90px 0;
  position: relative;
  background: url("/images/background/2.png") center top / cover;
`;

export const ProductItem = styled.a<{ bg: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 50px;
  background: #f5f9fd;
  border-radius: 15px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  transition: 0.7s all ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 40px;
  }

  &:before {
    content: "";
    width: 240px;
    height: 240px;
    opacity: 0.2;
    display: block;
    position: absolute;
    bottom: -20%;
    right: -15%;
    background: url(${({ bg }) =>
      bg ? bg : "/images/home/product_reconciliation_bg.svg"});
    background-size: 230px 230px;
    background-repeat: no-repeat;
    background-position: top center;
    transition: 0.7s all ease;
  }

  &:hover {
    background: var(--primary-color);
    box-shadow: 5px 5px 40px 0px rgba(0, 0, 0, 0.3);

    &:before {
      transform: rotate(-10deg);
    }

    .product_info {
      h4,
      span,
      p {
        color: var(--white-color);
      }
    }
  }

  .product_icon {
    width: 56px;
    height: 56px;
    padding: 14px;
    background: var(--primary-color);
    border-radius: 60px;
    margin-bottom: 30px;
  }

  .product_info {
    transition: 0.7s all ease;

    h4 {
      font-size: 19px;
      font-weight: 700;
      color: #35404e;
      display: block;
      margin-bottom: 10px;
      text-decoration: none;

      span {
        color: var(--primary-color);
      }
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: #111827;
    }
  }
`;

// export const ProductItemExternal = styled.a<{ bg: string }>`
//   ${ProductBase}

//   &:before {
//     background: url(${({ bg }) =>
//       bg ? bg : "/images/home/product_reconciliation_bg.svg"});
//   }
// `;

// export const ProductItemInternal = styled(Link)<{ bg: string }>`
//   ${ProductBase}

//   &:before {
//     background: url(${({ bg }) =>
//       bg ? bg : "/images/home/product_reconciliation_bg.svg"});
//   }
// `;

const SectionProducts: FunctionComponent = () => {
  return (
    <Section id="products">
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <SectionTitle>Products</SectionTitle>
          </div>
        </div>
        <div className="row align-items-top">
          <Fade bottom duration={700}>
            <div className="col-lg-4">
              <Link href="/reconciliation">
                <ProductItem bg="/images/home/product_reconciliation_bg.svg">
                  <div className="product_icon">
                    <Image
                      src={"/images/home/product_reconciliation.svg"}
                      width="28"
                      height="28"
                      alt=""
                    />
                  </div>
                  <div className="product_info">
                    <h4>
                      Churpy Reconciliation
                      <span>(Live)</span>
                    </h4>
                    <p>
                      Bring in the new-age accuracy, efficiency and speed to
                      your financial operations
                    </p>
                  </div>
                </ProductItem>
              </Link>
            </div>
          </Fade>
          <Fade bottom duration={1000}>
            <div className="col-lg-4">
              <Link href="/findata">
                <ProductItem bg="/images/home/product_findata_bg.svg">
                  <div className="product_icon">
                    <Image
                      src={"/images/home/product_findata.svg"}
                      width="28"
                      height="28"
                      alt=""
                    />
                  </div>
                  <div className="product_info">
                    <h4>
                      Churpy FinData API
                      <span>(Live)</span>
                    </h4>
                    <p>
                      Securely access bank account data e.g. transactions,
                      balances and statements through a single API.
                    </p>
                  </div>
                </ProductItem>
              </Link>
            </div>
          </Fade>
          <Fade bottom duration={700}>
            <div className="col-lg-4">
              <Link href="/marketplace">
                <ProductItem bg="/images/home/product_pay_bg.svg">
                  <div className="product_icon">
                    <Image
                      src={"/images/home/product_pay.svg"}
                      width="28"
                      height="28"
                      alt=""
                    />
                  </div>
                  <div className="product_info">
                    <h4>
                      Churpy Pay
                      <span>(Live)</span>
                    </h4>
                    <p>
                      Automatically get paid for outstanding invoices directly
                      into your bank account.
                    </p>
                  </div>
                </ProductItem>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </Section>
  );
};

export { SectionProducts };
