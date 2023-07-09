import { useContext } from "react";
import { getFsData } from "../../config/firestore";
import { BekalContext } from "../../context/bekalContext";
import CartItem from "./cartItem";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data } = getFsData("courses", true);
  const { cartItems } = useContext(BekalContext);
  const handleCheckOut = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-100">
      <div className="__cartcontainer">
        <div className="container">
          <div className="__carttitle">
            <h1>isi bekal kamu</h1>
          </div>
          <div className="__cartitems">
            {data.map((d) => {
              if (cartItems[d.id]) {
                return <CartItem data={d} />;
              }
            })}
          </div>
          <div className="row  w-100 align-item-center">
            <div className="col-auto __programbutton">
              <button className="btn" onClick={handleCheckOut}>
                bawa pulang
              </button>
            </div>
            <div className="col-auto " style={{ padding: "25px 0" }}>
              <Link to="/">
                <button
                  className="btn btn-light"
                  style={{ borderRadius: "50px", padding: "1rem 3rem" }}
                >
                  kembali
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
