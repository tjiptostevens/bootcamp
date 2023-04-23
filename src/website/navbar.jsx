import viteLogo from "/vite.svg";
import "../assets/css/navbar.css";

const NavBar = (props) => {
  return (
    <>
      <div
        className="w-100"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          borderBottom: "solid 1px blueviolet",
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
          }}
        >
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} alt="Vite logo" style={{ height: "50px" }} />
          </a>
          <h1 style={{ margin: "0", padding: "0 15px" }}>B.camp</h1>
        </div>
        <div className="__navtoggle" style={{ padding: "15px" }}>
          <i className="bi bi-calendar-plus"></i>
        </div>
        <div className="__navcontainer">
          <div className="__navlink">HOME</div>
          <div className="__navlink">PROGRAM</div>
          <div className="__navlink">BE A CONTRIBUTOR</div>
          <div className="__navlink">RESOURCES</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
