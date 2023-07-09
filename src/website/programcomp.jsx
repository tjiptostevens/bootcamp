import { useContext } from "react";
import { BekalContext } from "../context/bekalContext";

const ProgramComp = ({ data }) => {
  const { addToCart, cartItems } = useContext(BekalContext);
  const cartItem = cartItems[data.id];
  const handleAddToCart = () => {
    addToCart(data.id);
  };
  return (
    <div
      key={data.id}
      className="col-md-4"
      style={{ margin: "0", padding: "1rem" }}
    >
      <div className="__programitem">
        <div
          className="__programhero"
          style={{ "--programimg": `url(${data.img})` }}
        ></div>
        <div className="__programitemtitle">{data.title}</div>
        <div className="__programitemsubtitle">{data.subtitle}</div>
        <div className="__programitemprice">
          <div className="__programdummyprice">
            Rp. {data.dummy_price.toLocaleString()},-{" "}
            <span className="__redline"></span>
          </div>
          <div className="__programrealprice">
            Rp. {data.price.toLocaleString()},-
          </div>
        </div>
      </div>

      <div className="__programbutton" onClick={handleAddToCart}>
        <button className="btn">
          {cartItem ? "kembalikan bekal ini" : "beli bekal ini"}
        </button>
      </div>
    </div>
  );
};

export default ProgramComp;
