import React from "react";
import "./delete-popup.css";

const DeletePopup = (props) => {
  return (
    <div className={props.trigger ? "popup-wrap wrap-active" : "popup-wrap"}>
      <div className={props.trigger ? "popup-delete active" : "popup-delete"}>
        <i className="fas fa-times fa-delete" onClick={props.setTrigger} />
        <div className="text-confir">
          <p>Yakin ingin menghapus teman ini?</p>
        </div>
        <div className="btn-wrap">
          <button className="btn-confir" onClick={props.hapus}>
            Ya
          </button>
          <button className="btn-confir" onClick={props.setTrigger}>
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
