import React from 'react';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import './Layout.css';
const Layout = ({children}) => {
    return (
        <div>
            <div className='headerLayout'>
                <Header></Header>
            </div>
            <div className='contentLayout'>
                {children}
            </div>
            <div className='footerLayout'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;