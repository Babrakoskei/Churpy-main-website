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
                    <i className="fa fa-clock-o bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">Automate Payment Reminders
</h4>
                    <p className="card-text">
                    You can configure your account to receive automatic payment reminders for certain customers on specific times of the month. These are sent out as notifications to the relevant parties and you don't have to keep up with emails and calls
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
                    <i className="fa fa-comments-o bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">Monitor invoice-related discussions
</h4>
                    <p className="card-text">
                    You can discuss figures and other things in a central, retrievable place
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
                    <h4 className="card-title">Raise adjustments without stress</h4>
                    <p className="card-text">
                    Within seconds, you can raise line-item adjustments against an invoice and be on your way. Depending on your privileges they might need approval 😉.
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
                    <i className="fa fa-credit-card bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">
Pay Conveniently</h4>
                    <p className="card-text">
                    We have included multiple payment options for your customers including <b> MPESA, Card, Bank CRN and more coming soon.</b>
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
                    <i className="fa fa-exclamation-triangle bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">Dispute Management? We've got you covered!</h4>
                    <p className="card-text">
                    We have a dedicated feature that allows you raise disputes against invoices without a hustle and have it as part of the invoice story...
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
                    <i className="fa fa-cogs bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">Get Reconciliation out of the box</h4>
                    <p className="card-text">
                    All operations on our marketplace are closely monitored by the Churpy Reconciliation so that you don't have to worry about incoming transactions from the marketplace lane.
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
