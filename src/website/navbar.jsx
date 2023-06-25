import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { logo } from "../custom/img";

const NavBar = (props) => {
  const [activeLink, setActiveLink] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isNavbarVisible =
          entry.isIntersecting || entry.intersectionRatio > 0;
        // Update the active state of the navbar based on its visibility
        // You can set the active state in your state management or update the className directly
      },
      {
        rootMargin: `-${navbarRef.current.clientHeight}px`,
      }
    );

    observer.observe(navbarRef.current);

    // Cleanup the observer when the component unmounts
    return () => {
      observer.unobserve(navbarRef.current);
    };
  }, []);

  return (
    <>
      {console.log(navbarRef)}
      <div
        ref={navbarRef}
        className="w-100 __row"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          maxHeight: "8vh",
          position: "sticky",
          top: "0px",
          zIndex: "1",
          backdropFilter: "blur(100px)",
        }}
      >
        <div
          className="__logo"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            lineHeight: "1",
            padding: "0 15px",
            fontSize: "3rem",
          }}
        >
          <Link to="/">
            <img src={logo} alt="logo bekalkerja" style={{ width: "250px" }} />
          </Link>
        </div>
        <div className="__navtoggle" style={{ padding: "15px" }}>
          <i className="bi bi-calendar-plus"></i>
        </div>
        <div className="__navcontainer">
          <a href="#hero">
            <div className="__navlink">rumah</div>
          </a>
          <a href="#program">
            <div className="__navlink">bekal</div>
          </a>
          <a href="#blog">
            <div className="__navlink">blog</div>
          </a>
          <a href="#kontak">
            <div className="__navlink">kontak</div>
          </a>
          <a href="#">
            <div className="__navlink">
              <i className="bi bi-person"></i>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
