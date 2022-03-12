import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  keterangan,
  jumlah,
  tambah,
  kurang,
  changeHandler,
  handleSubmit,
}) => {
  if (keranjangDetail) {
    return (
      <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {keranjangDetail.product.nama}{" "}
              <strong>
                (Rp. {numberWithCommas(keranjangDetail.product.harga)})
              </strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Total Harga :</Form.Label>
                <p>
                  <strong>
                    Rp. {numberWithCommas(keranjangDetail.total_harga)}
                  </strong>
                </p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Jumlah :</Form.Label>
                <br />
                <Button
                  variant="primary"
                  size="sm"
                  className="me-2"
                  onClick={() => tambah()}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>

                <strong>{jumlah}</strong>

                <Button
                  variant="primary"
                  size="sm"
                  className="ms-2"
                  onClick={() => kurang()}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Keterangan</Form.Label>
                <Form.Control
                  as={"textarea"}
                  placeholder="Contoh : Pedas, Panas, Dingin, Dll."
                  rows="3"
                  value={keterangan}
                  onChange={(e) => changeHandler(e)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Simpan
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Batal
            </Button>
            <Button variant="danger">
              <FontAwesomeIcon icon={faTrash} /> Hapus Pesanan
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Kosong</Modal.Title>
          </Modal.Header>
          <Modal.Body>Kosong</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default ModalKeranjang;
