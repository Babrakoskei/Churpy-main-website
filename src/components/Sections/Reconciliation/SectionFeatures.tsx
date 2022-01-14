import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 90px 0 90px 0;
  position: relative;
  background: url("/images/background/5.png") center top / cover;
`;

const Card = styled.div`
  border: none;
  background: transparent;

  .card-icon {
    width: 80px;
    height: 80px;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60%;
    background: var(--primary-color);
    margin: 0 auto;
  }

  h4 {
    font-size: 19px;
    font-weight: 700;
    color: #35404e;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7em;
    margin-bottom: 20px;

    span {
      color: var(--primary-color);
    }
  }
`;

const SectionFeatures: FunctionComponent = () => {
  return (
    <Section id="features">
      <div className="container">
        <div className="row align-items-start">
          {/* {--Card-1-Start--} */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-diamond bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">User Centric Design</h4>
                    <p className="card-text">
                      Our reconciliation platform has been built with usability
                      in mind. The process is straight forward and intuitive to
                      ensure your productivity is spiked!
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-1-End--} */}
          {/* {--Card-2-Start--} */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-cogs bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">AI Powered Rules Engine</h4>
                    <p className="card-text">
                      Behind the scenes is a masterpiece of ingenuity created to
                      intelligently match your invoice batch against transaction
                      records keeping all parameters in mind. Just focus on
                      what's important...
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-2-End--} */}
          {/* {--Card-3-Start--} */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-line-chart bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">Real-time Analytics</h4>
                    <p className="card-text">
                      <span>Churpy Reconciliation</span> organizes your data in
                      a way that makes it easy to understand exactly how much is
                      reconciled or not and what slice it represents in the
                      overall stack.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-3-End--} */}
          {/* {--Card-4-Start--} */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-object-group bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">Customizable Modules</h4>
                    <p className="card-text">
                      We give you the chance to customize how your rules should
                      run, what parameters to check for while registering taxes,
                      user access control and more...
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-4-End--} */}
          {/* {--Card-5-Start--} */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-server bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">High capacity invoice load</h4>
                    <p className="card-text">
                      Our servers are built on top of first-class services to
                      accommodate large volumes of data while implementing a
                      robust multi-tenancy architecture not to mention security
                      is at the core.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-5-End--} */}
          {/* {--Card-6-Start--} */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-wpexplorer bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">ERP Integrations</h4>
                    <p className="card-text">
                      Churpy Reconciliation comes integrated to the major ERPs
                      such as{" "}
                      <span>
                        SAP ECC, SAP Business One, Microsoft Dynamics 365,
                        Oracle E-Business Suite, Quickbooks, Sage, Freshbooks
                        and more
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-6-End--} */}
        </div>
      </div>
    </Section>
  );
};
export { SectionFeatures };
