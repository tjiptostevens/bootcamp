import Cart from "../website/cart/cart";
import Main from "../website/main";

const rute = {
  web: [
    {
      path: "/",
      element: <Main />,
    },

    {
      path: "/cart",
      element: <Cart />,
    },
  ],
  dash: [
    {
      path: "/",
      element: <Main />,
    },
  ],
};

export { rute };
