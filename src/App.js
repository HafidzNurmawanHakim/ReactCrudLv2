import Axios from "axios";
import React, { useState } from "react";
import "./App.css";
import { Button, DeletePopup, Gap, Icon, PopUpInfo, PopUpInput, Table } from "./components";
import Provider, { Context } from "./context/context";

function App() {
  const [deleteActive, setDeleteActive] = useState(false);
  const [id, setId] = useState("");

  const deleteHandle = () => {
    Axios.delete(`http://localhost:4000/friends/${id}`)
      .then((res) => {
        console.log("Result :", res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err.response));

    setDeleteActive(false);
  };

  return (
    <div className="App">
      <header>
        <div className="title-wrap">
          <h1>Daftar Teman</h1>
          <p>A Simple MERN Crud </p>
        </div>
        <Icon />
      </header>

      <Provider>
        <Context.Consumer>
          {(value) => {
            return (
              <div className="container">
                <Gap height={10} />
                <Button title="+ Tambah Teman " onClick={() => value.setActive(true)} />
                <PopUpInput />
                <PopUpInfo />
                <DeletePopup trigger={deleteActive} hapus={deleteHandle} setTrigger={() => setDeleteActive(false)} />
                <Gap height={20} />
                <Table
                  deleteConfir={(e) => {
                    setDeleteActive(true);
                    const id = e.target.id;
                    setId(id);
                  }}
                />
              </div>
            );
          }}
        </Context.Consumer>
      </Provider>
    </div>
  );
}

export default App;
