import "../assets/css/homecontact.css";

const Contact = () => {
  return (
    <>
      <div id="kontak" className="w-100">
        <div className="container">
          <div className="__contactcontainer">
            <div className="__contacttitle">kontak</div>
            <div className="__contactsubtitle">
              Bingung pilih bekal apa? atau kamu bertanya-tanya?
            </div>
            <a href="mailto:tanya@bekalkerja.com">
              <div className="__contactbutton">
                <button className="btn">mau nanya</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
