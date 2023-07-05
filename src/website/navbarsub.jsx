import { logout } from "../config/auth";

const NavbarSub = ({ expand }) => {
  return (
    <div className={`__navbarsubcontainer${expand ? "expand" : ""}`}>
      <ul>
        <li>order</li>
        <li onClick={logout}>logout</li>
      </ul>
    </div>
  );
};

export default NavbarSub;
