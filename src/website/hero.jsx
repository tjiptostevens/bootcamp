import "../assets/css/hero.css";

const Hero = () => {
  return (
    <>
      <div className="w-100">
        <div className="__column __herocontainer">
          <div
            className="__heroimg"
            style={{
              "--herobg":
                "url(https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div className="__herotitlecontainer">
            <div className="__row __herotitle">
              <h1>JOIN THE EXPERT</h1>
              <button className="btn">
                Wujudkan karir impianmu <i className="bi bi-chevron-right"></i>
              </button>
            </div>
            <div className="__herosubtitle">
              <p>
                Cukup deposit, bisa belajar dulu program Front-End Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
