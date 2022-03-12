import { Button, Image } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map((item) => {
          return axios
            .delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="images/sukses.png" width={"500"} />
        <h1>Sukses Pesan</h1>
        <p>Terima Kasih Sudah Memesan</p>
        <Button as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
