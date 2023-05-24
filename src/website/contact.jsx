import "../assets/css/homecontact.css";

const Contact = () => {
  return (
    <>
      <div className="w-100 __contactbg">
        <div className="container">
          <div className="__row __contactcontainer">
            <div className="col-md-6 __contactcontent"></div>
            <div className="col-md-6 __contacttitlecontainer">
              <div className="__contacttitle">KONTAK</div>
              <div className="__contactsubtitle">
                Perlu Bantuan? Bingung memilih karir? atau ada pertanyaan? Kami
                dengan senang hati akan membantu anda.
              </div>
              <div className="__contactbtn">
                <button className="btn __btnblue">PERLU NIH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
