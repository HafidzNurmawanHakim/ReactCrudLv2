import React, { useContext, useState } from "react";
import { Button, Gap, Input } from "..";
import { Context } from "../../context/context";
import "./popup.css";

const PopUpInput = () => {
  const [error, setError] = useState("");
  const [active, setActive] = useState(false);
  let value = useContext(Context);

  const submitHandle = () => {
    if (!value.editMode) {
      let data = {
        name: value.name,
        email: value.email,
        age: value.age,
        gender: value.gender,
      };

      fetch("http://localhost:4000/make-friend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log("Add friend success!", res);
          value.setActive(false);
          value.setName("");
          value.setEmail("");
          value.setGender("");
          value.setAge("");
          window.location.reload();
        })
        .catch((err) => {
          const text = err.response.data.data[0].msg;
          setActive(true);
          setError(text);
        });
    } else {
      let data = {
        name: value.name,
        email: value.email,
        age: value.age,
        gender: value.gender,
      };

      console.log(value.name, value.email, value.gender, value.age);

      fetch(`http://localhost:4000/friends/${value.getId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => {
          console.log("Result", result);
          value.setEditMode(false);
          value.setName("");
          value.setEmail("");
          value.setGender("");
          value.setAge("");
          window.location.reload();
        })
        .catch((err) => {
          const text = err.response.data.data[0].msg;
          setActive(true);
          setError(text);
        });
    }
  };

  return (
    <Context.Consumer>
      {(value) => {
        return (
          <div className={value.active || value.editMode ? "popup-wrap wrap-active" : "popup-wrap"}>
            <div className={value.active || value.editMode ? "popup active" : "popup"}>
              <i
                className="fas fa-times"
                onClick={() => {
                  value.setActive(false) || value.setEditMode(false);
                  value.setFriendDetail({});
                  setError(false);
                }}
              />
              <h2 className="popup-title">{value.editMode ? "Edit" : "Tambah Teman"}</h2>
              <div className="input-wrapper">
                <label>
                  Nama<span className="important-point">*</span>
                </label>
                <Gap height={5} />
                <Input
                  type="text"
                  placeholder="Udin Petot"
                  value={value.name}
                  onChange={(e) => {
                    value.setName(e.target.value);
                  }}
                  onClick={() => setActive(false)}
                />
              </div>
              <Gap height={10} />
              <div className="input-wrapper">
                <label>
                  Email<span className="important-point">*</span>
                </label>
                <Gap height={5} />
                <Input type="text" placeholder="UdinPetot@gmail.com" value={value.email} onChange={(e) => value.setEmail(e.target.value)} onClick={() => setActive(false)} />
              </div>
              <Gap height={15} />
              <div className="gender-wrapper">
                <div className="gender-input">
                  <label>Umur</label>
                  <Gap height={5} />
                  <Input type="Number" placeholder="12" value={value.age} onChange={(e) => value.setAge(e.target.value)} />
                </div>
                <div className="gender-input">
                  <label>Gender</label>
                  <Gap height={5} />
                  <select required onChange={(e) => value.setGender(e.target.value)} value={value.gender}>
                    <option defaultValue hidden>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <span className={active ? "error-text" : "error-text non-active"}>{error}</span>
              <div className="btn-wrapper">
                <Button title={value.editMode ? "Edit" : "Tambah"} onClick={submitHandle} />
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default PopUpInput;
