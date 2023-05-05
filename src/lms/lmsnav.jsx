import { Link } from "react-router-dom";

const LmsNav = () => {
  return (
    <>
      <div className="__sidenav">
        <div
          className="w-100"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "1rem",
            background: "#e9e9e9",
            height: "100%",
            padding: "1rem",
            minWidth: "15vw",
          }}
        >
          <div className="__logo" style={{ lineHeight: "1" }}>
            <h1>
              <b>SCOLA.</b>
            </h1>
            <p>Education</p>
          </div>
          <div className="__menucontainer">
            <Link to="" className="__menulink">
              <i className="bi bi-motherboard"></i> Overview
            </Link>
            <Link to="courses" className="__menulink">
              <i className="bi bi-journals"></i> My Courses
            </Link>
            <Link to="homework" className="__menulink">
              <i className="bi bi-journal-text"></i> Homework
            </Link>
            <Link to="setting" className="__menulink">
              <i className="bi bi-gear"></i> Setting
            </Link>
          </div>
          <div className="__menufooter">SCOLA copyright</div>
        </div>
      </div>
    </>
  );
};

export default LmsNav;
