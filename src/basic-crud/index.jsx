import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Tabel";
import Formulir from "./components/Formulir";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); //agar tidak reload

    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const bukanSelectMakanan = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filtermakanan) => {
          return filtermakanan;
        });
      this.setState({
        makanans: [
          ...bukanSelectMakanan,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {
    const selectMakanan = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filtermakanan) => {
        return filtermakanan;
      });

    this.setState({
      nama: selectMakanan[0].nama,
      deskripsi: selectMakanan[0].deskripsi,
      harga: selectMakanan[0].harga,
      id: selectMakanan[0].id,
    });
  };

  hapusData = (id) => {
    const makananBaru = this.state.makanans
      .filter((makanan) => makanan.id !== id)
      .map((filtermakanan) => {
        return filtermakanan;
      });
    this.setState({
      makanans: makananBaru,
    });
  };

  render() {
    console.log(this.state.makanans);
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <Table
            makanans={this.state.makanans}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Index;
