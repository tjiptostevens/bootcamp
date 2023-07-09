import { useContext } from "react";
import { BekalContext } from "../context/bekalContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/auth";

const ProgramComp = ({ data }) => {
  const [user] = useAuthState(auth);
  const { addToCart, cartItems } = useContext(BekalContext);
  const cartItem = cartItems[data.id];
  const handleAddToCart = () => {
    if (user) {
      addToCart(data.id);
    }
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
          {cartItem ? "ganti bekal" : "ambil bekal"}
        </button>
      </div>
    </div>
  );
};

export default ProgramComp;
