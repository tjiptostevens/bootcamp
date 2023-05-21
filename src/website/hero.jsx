const Hero = () => {
  return (
    <>
      <div className="w-100">
        <div
          className="__herocontainer"
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "50vh",
            position: "relative",
            background:
              "url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)no-repeat center center /cover",
          }}
        >
          <div
            className="__herotitle"
            style={{
              position: "absolute",
              width: "100%",
              bottom: "0px",
              left: "0px",
              padding: "50px",
              background: "rgba(255,255,255,0.3)",
              color: "white",
            }}
          >
            <h1>JOIN THE EXPERT</h1>
            <p>Cukup deposit, bisa belajar dulu program Front-End Developer.</p>
            <button
              className="btn btn-primary"
              style={{
                background: "blueviolet",
                border: "solid 1px blueviolet",
              }}
            >
              Wujudkan karir impianmu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
