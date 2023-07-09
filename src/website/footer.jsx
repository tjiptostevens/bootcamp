import "../assets/css/footer.css";
import { logo } from "../custom/img";
const Footer = () => {
  return (
    <>
      <div className="w-100">
        <div className="__copyright">
          copyright 2023.{" "}
          <img src={logo} style={{ height: "20px", margin: "0 0 0 0.5rem" }} />.{" "}
          <span style={{ margin: "0 1rem" }}>|</span>
          <i>+6283846864486</i>
        </div>
      </div>
    </>
  );
};

export default Footer;
