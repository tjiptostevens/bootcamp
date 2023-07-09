import { useContext } from "react";
import { BekalContext } from "../../context/bekalContext";

const CartItem = ({ data }) => {
  const { addToCart, cartItems } = useContext(BekalContext);
  const cartItem = cartItems[data.id];
  const handleAddToCart = () => {
    addToCart(data.id);
  };
  return (
    <div key={data.id} className="w-100">
      {/* {JSON.stringify(data)} */}
      <div className="__cartitemcontainer">
        <div
          className="col-md-3 __cartimg"
          style={{ "--cartimg": `url(${data.img})` }}
        ></div>
        <div className="col-md-9 __cartcontent">
          <div>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>{data.title}</p>
            Rp. {data.price.toLocaleString()},-
          </div>
          <button className="btn btn-light" onClick={handleAddToCart}>
            ganti bekal
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
