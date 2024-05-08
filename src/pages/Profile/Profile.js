import React from "react";
import "./Profile.css";
import cover from "../../assets/cover.png";
import anhthe from "../../assets/anhthe.png";
const Profile = () => {
  return (
    <div style={{ background: "#0C141A", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', paddingBottom: '2%' }}>
      <img src={cover} className="profile-cover"></img>
      <div className="profile-upper">
        <img src={anhthe}></img>
        <div className="profile-upper-info">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="profile-upper-info-title">Total Money</div>
            <div className="profile-upper-info-content">10,000 G</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="profile-upper-info-title">BachQuangHung1911</div>
            <div className="profile-upper-info-content">
                <span>VIP Gold</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="profile-upper-info-title">Total Collection</div>
            <div className="profile-upper-info-content">5</div>
          </div>
        </div>
      </div>
      <div className="profile-under">
        <div className="profile-options">
            <div className="profile-option active">Information</div>
            <div className="profile-option">Collections</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
