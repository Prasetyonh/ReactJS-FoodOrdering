import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
const Menus = ({ menu, addKeranjang }) => {
  return (
    <Col md={4} xs={6}>
      <Card className="mb-3 shadow">
        <Card.Img
          className="card-img-top"
          variant="top"
          src={"images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar}
        />
        <Card.Body>
          <Card.Title>
            {menu.nama} <strong>({menu.kode})</strong>
          </Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
          <Button className="btnCart" onClick={() => addKeranjang(menu)}>
            <strong>+ </strong>Keranjang{" "}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
