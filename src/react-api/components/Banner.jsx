import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export default class Banner extends Component {
  render() {
    return (
      <div className="hero">
        {/* Desktop */}
        <Container>
          <div className="d-none d-md-block">
            <Row className="overflow-auto">
              <Col className="md-6">
                <div className="d-flex h-100">
                  <div className="justify-content-center align-self-center">
                    <h2>
                      Eat<strong> Good</strong>
                      <br />
                      &nbsp; &nbsp;Feel <strong>Good</strong>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos voluptatem officia provident amet architecto. Dolores
                      distinctio sit dicta provident ipsam.
                    </p>

                    <a className="btn btn-lg btn-primary" href="#menu">
                      Order Now {"  "}
                      <FontAwesomeIcon icon={faArrowCircleDown} />
                    </a>
                  </div>
                </div>
              </Col>
              <Col>
                <Image
                  className="imgBanner"
                  src="images/imageBanner.png"
                  width={"1000"}
                />
              </Col>
            </Row>
          </div>
        </Container>

        {/* Mobile */}
        <div className="d-sm-block d-md-none">
          <Row className="mt-4">
            <Col className="md-6">
              <Image src="images/imageBanner.png" width={"320"} />
            </Col>
            <Col className="md-6">
              <div className="d-flex h-100">
                <div className="justify-content-center align-self-center">
                  <h2>
                    Eat<strong> Good</strong>
                    <br />
                    &nbsp;&nbsp; Feel <strong>Good</strong>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    voluptatem officia provident amet architecto. Dolores
                    distinctio sit dicta provident ipsam.
                  </p>
                  <a className="btn btn-md btn-primary" href="#menu">
                    Order Now
                    <b-icon-caret-right-fill></b-icon-caret-right-fill>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
