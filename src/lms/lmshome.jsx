import LmsContent from "./lmscontent";
import LmsNav from "./lmsnav";
import "../assets/css/lmsnav.css";

const LmsHome = () => {
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
