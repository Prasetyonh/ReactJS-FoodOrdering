import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class TotalBayar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      noMeja: "",
    };
  }
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      nama_pemesan: this.state.nama,
      no_meja: this.state.noMeja,
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      this.props.history.push("/sukses", { replace: true });
    });
  };

  changeHandlerNama = (e) => {
    this.setState({
      nama: e.target.value,
    });
  };
  changeHandlerMeja = (e) => {
    this.setState({
      noMeja: e.target.value,
    });
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <>
        {/*web */}
        <div className="relative-bottom d-none d-md-block">
          <Row>
            <Col md={{ span: 12 }} className="px-4 mt-2">
              <h5 className="text-center">Pemesan</h5>
              <Form onSubmit={totalBayar}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama :</Form.Label>
                  <Form.Control
                    placeholder="Masukkan nama anda"
                    rows="3"
                    value={this.state.nama_pemesan}
                    onChange={(e) => this.changeHandlerNama(e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>No. Meja :</Form.Label>
                  <Form.Control
                    placeholder="Masukkan nomor meja anda"
                    rows="3"
                    value={this.state.no_meja}
                    onChange={(e) => this.changeHandlerMeja(e)}
                  />
                </Form.Group>
              </Form>

              <h4>
                Total Harga :
                <strong className="float-end me-2">
                  {" "}
                  Rp. {numberWithCommas(totalBayar)}
                </strong>
              </h4>
              <div className="d-grid gap-2">
                <Button
                  className="btn btn-primary btn-lg mb-2 mt-2 me-2"
                  onClick={() => this.submitTotalBayar(totalBayar)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />{" "}
                  <strong>Pesan</strong>
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        {/*mobile */}
        <div className="d-sm-block d-md-none">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4 mt-2">
              <h5 className="text-center">Pemesan</h5>
              <Form onSubmit={totalBayar}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama :</Form.Label>
                  <Form.Control
                    placeholder="Masukkan nama anda"
                    id="nama"
                    rows="3"
                    value={this.state.nama_pemesan}
                    onChange={(e) => this.changeHandlerNama(e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>No. Meja :</Form.Label>
                  <Form.Control
                    placeholder="Masukkan nomor meja anda"
                    id="noMeja"
                    rows="3"
                    value={this.state.no_meja}
                    onChange={(e) => this.changeHandlerMeja(e)}
                  />
                </Form.Group>
              </Form>

              <h4>
                Total Harga :
                <strong className="float-end me-2">
                  Rp. {numberWithCommas(totalBayar)}
                </strong>
              </h4>
              <div className="d-grid gap-2">
                <Button
                  className="btn btn-primary btn-lg mb-2 mt-2 me-2"
                  onClick={() => this.submitTotalBayar(totalBayar)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />{" "}
                  <strong>Pesan</strong>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
