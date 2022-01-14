import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding: 60px 0 60px 0;
  background: var(--secondary-color);
`;

const Heading = styled.h4`
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1px;
`;

const CompanyConnect = styled.div`
  padding: 40px;
  border-radius: 10px;
  background-color: var(--white-color);

  h4 {
    font-size: 24px;
    font-weight: 700;
    color: #35404e;
    margin-bottom: 25px;
  }
  p {
    font-size: 14px;
    color: #212529;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .btn-custom {
    width: 100%;
    border-radius: 30px;
    padding: 12px 30px;
    text-decoration: none;
    text-transform: none;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    outline: 0;
    background: var(--primary-color);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 20px;
  }
`;

const CompanyAccount = styled.div`
  ul {
    list-style: none;
    padding-left: 12px;
    margin-top: 20px;
    margin-bottom: 1rem;

    li {
      font-size: 19px;
      font-weight: 700;
      line-height: 1.5;
      text-align: left;
      padding-left: 15px;
      margin-bottom: 15px;
      position: relative;

      &:after {
        content: "💡";
        display: block;
        width: 21px;
        height: 25px;
        position: absolute;
        top: 0px;
        left: -10px;
      }
    }
  }
`;

const CompanyAddress = styled.div`
  address {
    span {
      display: inline-block;
      vertical-align: top;
      font-size: 20px;
      line-height: 1.7em;
      margin-bottom: 10px;

      i {
        margin-right: 10px;
      }
      a {
        color: var(--white-color);
        text-decoration: none;
      }
    }
  }
`;

const SectionContactus: FunctionComponent = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<null|boolean>(null);

  const handleOnSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      firstName: { value: string };
      lastName: { value: string };
      email: { value: string };
      phone: { value: string };
      bank: { value: string };
      language: { value: string };
    };
    const firstName = target.firstName.value;
    const lastName = target.lastName.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const bank = target.bank.value;
    const language = target.language.value;

    const requestUrl = "https://sandbox.churpy.co/auth/mail_list";
    const requestOptions = {
      method: "POST",
      dataType: "json",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        bank,
        language,
      }),
    };

    try {
       fetch(requestUrl, requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsFormSubmitted(true);
        })
        .catch((e) => {
          setIsFormSubmitted(false);
        });
    } catch (error) {
        setIsFormSubmitted(false);
      console.log(error);
    }
  };

  return (
    <Section id="contactus" className="text-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <CompanyConnect>
              <h4>Connect with us 🎉</h4>
              <p>Get updates on latest news regarding Churpy</p>
              <form className="row g-3" onSubmit={handleOnSubmit}>
                <div className="col-md-6">
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    required={true}
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    required={true}
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required={true}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    id="phone"
                    type="phone"
                    name="phone"
                    required={true}
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-md-12">
                  <select
                    id="bank"
                    name="bank"
                    defaultValue="Cooperative Bank"
                    className="form-select"
                    placeholder="Pick your banks of choice"
                  >
                    <option value="Cooperative Bank">Cooperative Bank</option>
                    <option value="Citi Bank">Citi Bank</option>
                    <option value="NCBA">NCBA</option>
                    <option value="Equity">Equity</option>
                    <option value="Standard Chartered">
                      Standard Chartered
                    </option>
                  </select>
                </div>
                <div className="col-md-12">
                  <select
                    id="language"
                    name="language"
                    defaultValue="Python"
                    className="form-select"
                    placeholder="Add language"
                  >
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="PHP">PHP</option>
                    <option value="Android">Android</option>
                    <option value="C#">C#</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value=".NET">.NET</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Awk">Awk</option>
                    <option value="Javascript">Javascript</option>
                    <option value="NodeJs">NodeJs</option>
                    <option value="Object-C">Object-C</option>
                    <option value="Type Script">Type Script</option>
                    <option value="Shell">Shell</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-custom">
                    Sign Up
                  </button>
                </div>
                <div className="col-md-12">
                  {isFormSubmitted !== null && Boolean(isFormSubmitted)  && (
                    <div className="alert alert-success" role="alert">
                      Your request has been submitted successfully!! 🎉
                    </div>
                  )}
                  <p>
                    Have questions or need bigger plans?
                    <a
                      className="text-blue ms-1"
                      target="_blank"
                      rel="noopener"
                      href="mailto:info@churpy.co?&amp;subject=Am%20Interested%20in%20Churpy&amp;body=Tell us about what you are planning,your product model,or any other details that might be beneficial"
                    >
                      Talk to us
                    </a>
                  </p>
                </div>
              </form>
            </CompanyConnect>
          </div>
          <div className="col-md-4">
            <CompanyAccount>
              <Heading>With a free account, you can:</Heading>
              <ul>
                <li>
                  Integrate Churpy APIs into your apps and start connecting to
                  banks today to receive statements, payment notifications and
                  balances.
                </li>
                <li>
                  Integrate Churpy SAP ERP plug-in, automatically enabling you
                  to start reconciling your outstanding receivables.
                </li>
                <li>
                  Integrate Churpy payment APIs, empowering you to start
                  collecting receivables through bank account channel.
                </li>
              </ul>
            </CompanyAccount>
          </div>
          <div className="col-md-3 offset-md-1">
            <CompanyAddress className="d-flex flex-column">
              <Heading>Churpy Inc.</Heading>
              <address className="d-flex flex-column">
                <span>
                  <i className="fa  fa-map-marker fa-lg" />
                  <span>
                    ABC Place 7<sup>th</sup> Floor,
                    <br />
                    Waiyaki Way,
                    <br />
                    Nairobi, Kenya
                  </span>
                </span>
                <span>
                  <i className="fa fa-phone-square fa-lg" />
                  +254738020516
                </span>
                <span>
                  <a target="_blank" href="mailto:info@churpy.co">
                    <i className="fa fa-envelope fa-lg" />
                    info@churpy.co
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/ChurpyInc"
                  >
                    <i className="fa fa-twitter-square fa-lg mr-2" />
                    @ChurpyInc
                  </a>
                </span>
                <span>
                  <a
                    target="_balnk"
                    rel="noopener"
                    href="https://www.linkedin.com/company/churpy"
                  >
                    <i className="fa fa-linkedin-square fa-lg" />
                    @churpy
                  </a>
                </span>
              </address>
            </CompanyAddress>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { SectionContactus };
