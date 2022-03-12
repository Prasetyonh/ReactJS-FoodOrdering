import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Cart from "../components/Cart";
import ListKategori from "../components/ListKategori";
// import NavbarComponent from "../components/NavbarComponent";
import Menus from "../components/Menus";

import axios from "axios";
import { API_URL } from "../utils/constants";
import Swal from "sweetalert2";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      pilihKategori: "Makanan",
      keranjangs: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.pilihKategori)
      .then((res) => {
        // console.log("Response :", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        // console.log("Response :", res);
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate(prevState) {
    if (this.state.keranjangs !== prevState.keranjangs) {
      axios
        .get(API_URL + "keranjangs")
        .then((res) => {
          // console.log("Response :", res);
          const keranjangs = res.data;
          this.setState({ keranjangs });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  changeCategory = (value) => {
    this.setState({
      pilihKategori: value,
      menus: [],
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        // console.log("Response :", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addKeranjang = (value) => {
    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };
          axios
            .post(API_URL + "keranjangs", keranjang)
            .then((res) => {
              Swal.fire(
                "Sukses!",
                `Berhasil Menambahkan <b>${keranjang.product.nama}</b> ke dalam Keranjang `,
                "success"
              );
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };
          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
              Swal.fire(
                "Sukses!",
                `Berhasil Menambahkan <b>${keranjang.product.nama}</b> ke dalam Keranjang `,
                "success"
              );
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { menus, pilihKategori, keranjangs } = this.state;
    return (
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListKategori
              changeCategory={this.changeCategory}
              pilihKategori={pilihKategori}
            />
            <Col>
              <h4>
                <strong>Daftar Menu</strong>
              </h4>
              <hr />
              <Row>
                {menus &&
                  menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                      addKeranjang={this.addKeranjang}
                    />
                  ))}
              </Row>
            </Col>
            <Cart keranjangs={keranjangs} {...this.props} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
