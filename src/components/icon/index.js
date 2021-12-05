import React from "react";
import "./icon.css";
import reactIcon from "../../assets/react-icon.png";
import mongoIcon from "../../assets/mongo-icon.png";
import expressIcon from "../../assets/express-icon.png";
import nodeIcon from "../../assets/node-icon.png";

const Icon = () => {
  return (
    <div className="mern-icon">
      <img src={mongoIcon} alt="mongo" />
      <img src={expressIcon} alt="express" />
      <img src={reactIcon} alt="react" />
      <img src={nodeIcon} alt="node" />
    </div>
  );
};

export default Icon;
