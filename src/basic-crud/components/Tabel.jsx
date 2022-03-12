import React from "react";
import { Button, Table } from "react-bootstrap";

const Tabel = ({ makanans, editData, hapusData }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Makanan</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {makanans.map((makanan, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{makanan.nama}</td>
                <td>{makanan.deskripsi}</td>
                <td>Rp. {makanan.harga}</td>
                <td className="text-center">
                  <Button
                    className="btn btn-warning"
                    onClick={() => editData(makanan.id)}
                  >
                    Edit
                  </Button>

                  <Button
                    className="btn btn-danger ms-3"
                    onClick={() => hapusData(makanan.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;
