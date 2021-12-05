import React from "react";
import { Button } from "..";
import { Context } from "../../context/context";
import "./popup-info.css";

const PopUpInfo = () => {
  return (
    <Context.Consumer>
      {(value) => {
        return (
          <div className={value.infoActive ? "popup-wrap wrap-active" : "popup-wrap"}>
            <div className={value.infoActive ? "popup active" : "popup"}>
              <i
                className="fas fa-times"
                onClick={() => {
                  value.setInfoActive(false);
                  value.setFriendDetail({});
                }}
              />
              <h2 className="popup-title">Detail Teman</h2>
              <>
                <div className="identity-wrap">
                  <label className="identity">Nama</label>
                  <label className="identity">{value.friendDetail.name}</label>
                </div>
                <div className="identity-wrap">
                  <label className="identity">Email</label>
                  <label className="identity">{value.friendDetail.email}</label>
                </div>
                <div className="identity-wrap">
                  <label className="identity">Gender</label>
                  <label className="identity">{value.friendDetail.gender}</label>
                </div>
                <div className="identity-wrap">
                  <label className="identity">Umur</label>
                  <label className="identity">{value.friendDetail.age}</label>
                </div>
              </>

              <div className="btn-wrapper">
                <Button
                  title="Tutup"
                  onClick={() => {
                    value.setInfoActive(false);
                    value.setFriendDetail({});
                  }}
                />
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default PopUpInfo;
