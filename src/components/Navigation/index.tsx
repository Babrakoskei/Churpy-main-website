import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { useScroll } from "src/hooks/useScroll";
import Link from "next/link";

const HeaderNavigation = styled.div<{ isNavbarScrollTop: boolean }>`
  transition: 0.7s all ease;

  ${({ isNavbarScrollTop }) =>
    isNavbarScrollTop &&
    css`
      background: var(--white-color);
      box-shadow: 0 4px 6px 0 rgb(10 10 10 / 5%);
    `}

  nav {
    padding: 0;
  }

  .btn-custom {
    text-decoration: none;
    text-transform: none;
    font-size: 14px;
    color: #ffffff;
    font-weight: 700;
    background: var(--primary-color);
    border-radius: 30px;
  }

  #navbarContent {
    ul li a {
      color: #222;
      font-weight: 600;
      transition: 0.3s;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    #navbarContent {
      ul {
        margin-left: 30px;
      }
    }
    #navbarContent {
      ul li a {
        display: inline-block;
        padding: 30px 18px;
        padding-top: 29px;
        text-decoration: none;
        text-align: center;
        outline: 0;
        line-height: 0;
        border-radius: 5px;

        &:hover {
          background: #e7ecfe;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background: var(--white-color);
    .navbar-brand {
      img {
        width: 185px !important;
      }
    }
    .navbar-collapse {
      padding-bottom: 15px;
    }
  }
`;

const Navigation: FunctionComponent = () => {
  const { scrollTop } = useScroll();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleOnClickShowMenu = () => setShowMenu((prevState) => !prevState);

  const isNavbarScrollTop = Boolean(scrollTop);

  return (
    <HeaderNavigation
      className="fixed-top"
      isNavbarScrollTop={isNavbarScrollTop}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <Link href="/">
                  <a className="navbar-brand">
                    <Image
                      src={"/images/logo.svg"}
                      width={"200px"}
                      height={"74px"}
                      alt={""}
                    />
                  </a>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarContent"
                  aria-controls="navbarContent"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                  onClick={handleOnClickShowMenu}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`navbar-collapse collapse ${
                    showMenu ? "show" : ""
                  }`}
                  id="navbarContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link href="/#products">
                        <a className="nav-link active" aria-current="page">
                          Products
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#solutions">
                        <a className="nav-link">Solutions</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#customers">
                        <a className="nav-link">Our Partners</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#aboutus">
                        <a className="nav-link">About Us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#contactus">
                        <a className="nav-link">Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <Link href="/#contactus">
                      <a className="btn btn-custom">
                        <i className="fa fa-rocket" /> Sign up
                      </a>
                    </Link>
                    <a
                      className="btn btn-custom ms-2"
                      target="_blank"
                      rel="noopener"
                      href="https://developer.churpy.co"
                    >
                      <i className="fa fa-code"></i> Developer
                    </a>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </HeaderNavigation>
  );
};

export { Navigation };
