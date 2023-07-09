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
          <a
            href="https://wa.me/6283846864486"
            style={{ textDecoration: "none", color: "white" }}
          >
            <i
              className="bi bi-whatsapp"
              style={{ margin: "0 0.5rem 0 0" }}
            ></i>
            <i>+6283846864486</i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
