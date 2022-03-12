import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";

import { API_URL } from "../utils/constants";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="ms-2" />;
  if (nama === "Minuman")
    return <FontAwesomeIcon icon={faCoffee} className="" />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="ms-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="ms-2" />;
};

class ListKategori extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        // console.log("Response :", res);
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, pilihKategori } = this.props;
    return (
      <Col md={2} mt="2">
        <h4>
          <strong>Daftar Kategori</strong>
        </h4>
        <hr />
        <ListGroup>
          {categories &&
            categories.map((kategori) => (
              <ListGroup.Item
                key={kategori.id}
                onClick={() => changeCategory(kategori.nama)}
                style={{ cursor: "pointer" }}
                className={pilihKategori === kategori.nama && "active"}
              >
                <h5>
                  <Icon nama={kategori.nama} /> {kategori.nama}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}

export default ListKategori;
