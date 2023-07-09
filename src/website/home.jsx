import "../assets/css/home.css";
import { rute } from "../config/rute";

import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="__home"
        style={{
          "--noisebg": "url(./assets/img/sparkling-glitter-texture.png)",
        }}
      >
        <Routes>
          {rute.web.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
          {/* <Route key={crypto.randomUUID()} path={""} element={<Home />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default Home;
