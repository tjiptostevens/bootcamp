import "../assets/css/hero.css";

const Hero = () => {
  return (
    <>
      <div className="w-100">
        <div className="__column__herocontainer">
          <div
            className="__heroimg"
            style={{
              "--herobg":
                "url(https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div className=" col-md-7 __herotitlecontainer">
            <div className="__row __herotitle">
              <h1>UPGRADE KARIRMU</h1>
              <button className="btn">
                Pilih karir impianmu <i className="bi bi-chevron-right"></i>
              </button>
            </div>
            <div className="__herosubtitle">
              <p>
                Belajar dari nol, tembus industri teknologi yang sulit dan
                menakutkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
