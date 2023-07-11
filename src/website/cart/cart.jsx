import { useContext } from "react";
import { getFsData } from "../../config/firestore";
import { BekalContext } from "../../context/bekalContext";
import CartItem from "./cartItem";
import "./cart.css";
import { Link } from "react-router-dom";
import { createInvoice } from "../../config/xendit";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/auth";
import createMayarInvoice from "../../config/mayar";
const Cart = () => {
  const conditions = [{ field: "isActive", operator: "==", value: true }];
  const { data } = getFsData("courses", conditions);
  const [user] = useAuthState(auth);
  const { cartItems } = useContext(BekalContext);
  const getTotal = () => {
    let totalPrice = data.reduce((total, d) => {
      if (cartItems[d.id]) {
        return total + d.price;
      }
      return total;
    }, 0);
    return totalPrice;
  };
  const handleCheckOut = (e) => {
    e.preventDefault();
    console.log(user);
    createMayarInvoice(user, getTotal());
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
                return <CartItem key={crypto.randomUUID()} data={d} />;
              }
            })}
          </div>
          <div className="row  w-100 align-item-center justify-content-end">
            <div className="col-auto __carttotalprice">
              <p>
                <b>Rp. {getTotal().toLocaleString()},-</b>
              </p>
            </div>
            <div className="col-auto __programbutton">
              <button className="btn" onClick={handleCheckOut}>
                bayar bekal
              </button>
            </div>
            <div
              className="col-auto "
              style={{ padding: "25px 0", marginLeft: "25px" }}
            >
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
