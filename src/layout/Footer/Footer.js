import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { Container } from "react-bootstrap";
const Footer = () => {
  const items = [
    {
      id: 1,

      name: "About",
      list: ["About us", "responsible Gaming", "Affiliate"],
    },
    {
      id: 2,

      name: "Help",
      list: ["FAQs", "Contact us"],
    },
    {
      id: 3,

      name: "Regulation",
      list: [
        "General Terms and Conditions",
        "Privacy Policy",
        "AML & KYC Policy",
      ],
    },
  ];
  return (
    <div className="wrapper-footer">
      <Container>
        <div className="lists">
          {items.map((item) => (
            <div>
              <div className="item-title" style={{fontWeight:'700'}}>{item.name}</div>
          
                <div className="item-list">
                    {item.list.map((smallItem)=>(
                        <div style={{marginTop:'20px'}}>{smallItem}</div>
                    ))}
                </div>
             
            </div>
          ))}
          <div>
            <div className="item-title" style={{fontWeight:'700'}}>Social</div>
            <div>
              <div className="social-item">
                <FaFacebook style={{ color: "grey" }}></FaFacebook>
                <div className="social-name">Facebook</div>
              </div>
              <div className="social-item">
                <AiFillTwitterCircle
                  style={{ color: "grey" }}
                ></AiFillTwitterCircle>
                <div className="social-name">Twitter</div>
              </div>
              <div className="social-item">
                <FaInstagramSquare
                  style={{ color: "grey" }}
                ></FaInstagramSquare>
                <div className="social-name">Instagram</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="last">Copyright ©2024, funplay. All rights reserved</div>
    </div>
  );
};

export default Footer;
