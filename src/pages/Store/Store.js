import React from "react";
import Card from "react-bootstrap/Card";
import "./Store.css";
import image1 from "../../assets/Image Placeholder.png";
import image2 from "../../assets/Image Placeholder (1).png";
import image3 from "../../assets/Image Placeholder (2).png";
import image4 from "../../assets/Image Placeholder (3).png";
import image5 from "../../assets/Image Placeholder (4).png";
import image6 from "../../assets/Image Placeholder (5).png";
import image7 from "../../assets/Image Placeholder (6).png";
import image8 from "../../assets/Image Placeholder (7).png";
import image9 from "../../assets/Image Placeholder (8).png";
import avatarBlank from "../../assets/avatar.png";

const Store = () => {
  const games = [
    {
      id: 1,
      name: "Magic Mushroom 0325",
      avatar: image1,
      user: "Shroomie",
      price: 1.63,
      bid: 0.33,
    },
    {
      id: 2,
      name: "Happy Robot 032",
      avatar: image2,
      user: "BeKind2Robots",
      price: 1.63,
      bid: 0.33,
    },
    {
      id: 3,
      name: "Happy Robot 024",
      avatar: image3,
      user: "BeKind2Robots",
      price: 1.63,
      bid: 0.33,
    },

    {
      id: 4,
      name: "Designer Bear",
      avatar: image4,
      user: "Keepitreal",
      price: 1.63,
      bid: 0.33,
    },
    {
      id: 5,
      name: "Colorful Dog 0356",
      avatar: image5,
      user: "Keepitreal",
      price: 1.63,
      bid: 0.33,
    },
    {
      id: 6,
      name: "Dancing Robot 0312",
      avatar: image6,
      user: "Mr Fox",
      price: 1.63,
      bid: 0.33,
    },
    {
      id: 7,
      name: "Desert Walk",
      avatar: image7,
      user: "Mr Fox",
      price: 1.63,
      bid: 0.33,
    },
    {
      id: 8,
      name: "IceCream Ape 0324",
      avatar: image8,
      user: "Mr Fox",
      price: 1.63,
      bid: 0.33,
    },
    {
      id: 9,
      name: "Colorful Dog 0344",
      avatar: image9,
      user: "PuppyPower",
      price: 1.63,
      bid: 0.33,
    },
  ];
  return (
    <div className="store-container">
      {games.map((game) => {
        return (
          <div className="card1" style={{cursor: 'pointer'}}>
            <Card style={{ backgroundColor: "#0C141A", border: "none",  }}>
              <Card.Img variant="top" src={game.avatar} style={{cursor: 'pointer'}}/>
              <Card.Body
                style={{
                  backgroundColor: "#2B2B2B",
                  color: "white",
                  borderBottomRightRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              >
                <Card.Title>{game.name}</Card.Title>

                <div className="user-info" style={{cursor: 'pointer'}}>
                  <img alt="" src={game.avatar} className="user-ava"></img>
                  <div className="user-name">{game.user}</div>
                </div>
                <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                  <div>
                    <div className="price-text">Price</div>
                    <div className="price">{game.price} ETH</div>
                  </div>
                  <div>
                  <div className="price-text">Highest Bid</div>
                    <div className="price">{game.bid} ETH</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Store;
