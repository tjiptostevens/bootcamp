import { useContext } from "react";
import { getFsData } from "../../config/firestore";
import { BekalContext } from "../../context/bekalContext";
import CartItem from "./cartItem";
import "./cart.css";

const Cart = () => {
  const { data } = getFsData("courses", true);
  const { cartItems } = useContext(BekalContext);
  return (
    <div className="w-100">
      <div className="__cartcontainer">
        <div className="container">
          <div>
            <h1>isi bekal kamu</h1>
          </div>
          <div className="__cartItems">
            {data.map((d) => {
              if (cartItems[d.id]) {
                return <CartItem data={d} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
