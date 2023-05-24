import "../assets/css/homewhyus.css";
const WhyUs = () => {
  return (
    <>
      <div className="w-100">
        <div className="container">
          <div className="__column __whycontainer">
            <div className="__whytitle">
              <img
                src="https://mekari.com/wp-content/uploads/2021/06/Mekari-homepage-hero-1.webp"
                alt=""
              />
              <p>SCOLA hadir untuk membantu</p>
            </div>
            <div className="__row __whycontent">
              <div className="col-md-7">
                Kamu dengan sebuah bootcamp online berbasis project yang
                bertujuan untuk perubahan dan upgrade karir demi masa depan yang
                lebih baik.
              </div>
              <div className="col-md-5">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/002/178/149/original/developer-working-on-code-free-vector.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
