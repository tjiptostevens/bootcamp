import "../assets/css/promo.css";
import { handleBlur } from "../custom/animation";

const Promo = () => {
  return (
    <>
      <div className="w-100" style={{ position: "relative" }}>
        <div className="__promocontainer"></div>
        <div
          className="__row __promocontent"
          onMouseEnter={() => handleBlur(".__promocontainer")}
          onMouseLeave={() => handleBlur(".__promocontainer")}
        >
          <button className="btn __btnorange">PILIH PROFESIMU</button>
          <button className="btn __btnwhite">BAGAIMANA CARANYA ?</button>
        </div>
      </div>
    </>
  );
};

export default Promo;
