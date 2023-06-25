import Dash from "../dashboard/dash";
import Home from "../website/home";
import Login from "../website/login";

const rute = {
  web: [
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/login",
      element: <Login />,
    },
  ],
  dash: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/d",
      element: <Dash />,
    },
  ],
};

export { rute };
