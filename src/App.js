import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout/Layout.js";
import Home from "./pages/Home/Home.js";
import Game from "./pages/Game/Game.js";
import Instruction from "./pages/Instruction/Instruction.js";
import Store from "./pages/Store/Store.js";
import Aboutus from "./pages/About us/Aboutus.js";
import Register from "./offpage/Register/Register.js";
import Login from "./offpage/Login/Login.js";
import Profile from "./pages/Profile/Profile.js";
function App() {
  const publics = [
    {
      path: "/",
      pages: Home,
    },
    {
      path: "/game",
      pages: Game,
    },
    {
      path: "/instruction",
      pages: Instruction,
    },
    {
      path: "/profile",
      pages: Profile,
    },
    {
      path: "/store",
      pages: Store,
    },
    {
      path: "/aboutus",
      pages: Aboutus,
    },
  ];
  return (
    <div>
      <Routes>
        {publics.map((pub, index) => {
          const Pages = pub.pages;
          return (
            <Route
              key={index}
              path={pub.path}
              element={
                <>
                  <Layout>
                    <Pages />
                  </Layout>
                </>
              }
            />
          );
        })}
       
      </Routes>
    </div>
  );
}

export default App;
