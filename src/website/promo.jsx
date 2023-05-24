import "../assets/css/promo.css";
import { handleBlur } from "../custom/animation";

const Promo = () => {
  return (
    <>
      <div className="w-100" style={{ position: "relative" }}>
        <div className="__promocontainer"></div>
        <div
          className="row col-md-7 __promocontent"
          onMouseEnter={() => handleBlur(".__promocontainer")}
          onMouseLeave={() => handleBlur(".__promocontainer")}
        >
          <div className="col-md-6">
            <button className="btn __btnorange">PILIH PROFESIMU</button>
          </div>
          <div className="col-md-6">
            <button className="btn __btnwhite">BAGAIMANA CARANYA ?</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
