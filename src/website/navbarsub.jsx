import { logout } from "../config/auth";
import UpdateProfile from "./updateProfile";

const NavbarSub = ({ expand }) => {
  const openProfile = () => {
    <UpdateProfile />;
  };
  return (
    <div className={`__navbarsubcontainer${expand ? "expand" : ""}`}>
      <ul>
        <li onClick={openProfile}>profile</li>
        <li>order</li>
        <li onClick={logout}>logout</li>
      </ul>
    </div>
  );
};

export default NavbarSub;
