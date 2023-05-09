import LmsContent from "./lmscontent";
import LmsNav from "./lmsnav";
import "../assets/css/lmsnav.css";

const LmsHome = () => {
  const darkMode = () => {
    let mode = localStorage.getItem("mode");
    let element = document.body;
    element.classList.toggle("dark-mode");
  };
  return (
    <>
      <div className="__lmscontainer">
        <LmsNav />
        <LmsContent />
      </div>
    </>
  );
};

export default LmsHome;
