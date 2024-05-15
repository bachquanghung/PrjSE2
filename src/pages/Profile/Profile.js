import React from "react";
import "./Profile.css";
import cover from "../../assets/cover.png";
import anhthe from "../../assets/anhthe.png";
import profitLine from "../../assets/image 16.png";
const Profile = () => {

  const displayName = localStorage.getItem('displayName')
  const currentBalance = localStorage.getItem('balancePoint')
  const email = localStorage.getItem('email')
  const createdAt = localStorage.getItem('createdAt')
  const username = localStorage.getItem('username')
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
        <div className="profile-under-overview">
          <div className="profile-under-overview-title">Overview</div>
          <div className="profile-under-overview-infos">
            <div className="profile-under-overview-info">
              <div className="profile-under-overview-info-title">User name</div>
              <div className="profile-under-overview-info-content">{username}</div>
              <div className="profile-under-overview-info-title">Account balance</div>
              <div className="profile-under-overview-info-content">{currentBalance} G</div>
            </div>
            <div className="profile-under-overview-info">
              <div className="profile-under-overview-info-title">Email</div>
              <div className="profile-under-overview-info-content">{email}</div>
              <div className="profile-under-overview-info-title">Join date</div>
              <div className="profile-under-overview-info-content">{createdAt}</div>
            </div>
            <div className="profile-under-overview-info">
              <div className="profile-under-overview-info-title">Full Name</div>
              <div className="profile-under-overview-info-content">{displayName}</div>
              <div className="profile-under-overview-info-title">Membership</div>
              <div className="profile-under-overview-info-state">VIP GOLD</div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-profit">
        <div className="profile-profit-title">Profit</div>
        <img src = {profitLine}></img>
      </div>
    </div>
  );
};

export default Profile;
