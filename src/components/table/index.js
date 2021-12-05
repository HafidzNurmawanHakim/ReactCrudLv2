import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Context } from "../../context/context";
import "./table.css";

const Table = (props) => {
  const [dataFriend, setDataFriend] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/friends")
      .then((result) => {
        const responseAPI = result.data;
        setDataFriend(responseAPI.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Context.Consumer>
      {(value) => {
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Umur</th>
                  <th>Gender</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dataFriend.map((friend, index) => {
                  return (
                    <tr key={friend._id}>
                      <td>{index + 1}</td>
                      <td>{friend.name}</td>
                      <td>{friend.email}</td>
                      <td>{friend.age}</td>
                      <td>{friend.gender}</td>
                      <td>
                        <button
                          className="aksi-btn"
                          id={friend._id}
                          onClick={(e) => {
                            value.setInfoActive(true);
                            const id = e.target.id;

                            setTimeout(() => {
                              Axios.get(`http://localhost:4000/friends/${id}`)
                                .then((res) => {
                                  const responseAPI = res.data;
                                  value.setFriendDetail(responseAPI.data);
                                })
                                .catch((err) => console.log(err.response));
                            }, 100);
                          }}
                        >
                          <i className="fas fa-info" id={friend._id} />
                        </button>
                        <button className="aksi-btn" id={friend._id} onClick={props.deleteConfir}>
                          <i className="far fa-trash-alt" id={friend._id} />
                        </button>
                        <button
                          className="aksi-btn"
                          id={friend._id}
                          onClick={(e) => {
                            value.setEditMode(true);
                            value.setGetId(e.target.id);

                            Axios.get(`http://localhost:4000/friends/${e.target.id}`)
                              .then((res) => {
                                const friend = res.data.data;
                                value.setName(friend.name);
                                value.setEmail(friend.email);
                                value.setGender(friend.gender);
                                value.setAge(friend.age);
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          }}
                        >
                          <i className="far fa-edit" id={friend._id} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Table;
