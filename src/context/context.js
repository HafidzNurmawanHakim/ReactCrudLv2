import React, { createContext, useState } from "react";

export const Context = createContext();

const Provider = (props) => {
  const [friendDetail, setFriendDetail] = useState({});
  const [infoActive, setInfoActive] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [active, setActive] = useState(false);
  const [getId, setGetId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  return (
    <Context.Provider value={{ active, name, setName, email, setEmail, gender, setGender, age, setAge, getId, setGetId, setActive, friendDetail, editMode, setEditMode, setFriendDetail, infoActive, setInfoActive }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
