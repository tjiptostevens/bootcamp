import "../assets/css/homefact.css";

const Fact = () => {
  return (
    <>
      <div className="w-100">
        <div className="container">
          <div className="row col-md-12 __factcontainer">
            <div className="col-md-6">
              <div className="__factcontaineritem">
                <div className="w-100 __facttitle">
                  belajar <b>ditempat lain</b>
                </div>
                <div className="w-100 __factitem">
                  <ul>
                    <li>belajar mandiri</li>
                    <li>belajar sesuai arahan modul saja</li>
                    <li>tidak ada nya komunitas untuk berbagi</li>
                    <li>mencari support karir sendiri</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="__factcontaineritem">
                <div className="w-100 __facttitle">
                  belajar di bekal<b>kerja</b>
                </div>
                <div className="w-100 __factitem">
                  <ul>
                    <li>belajar dengan didampingi para praktisi</li>
                    <li>belajar dengan basis project dan studi kasus</li>
                    <li>
                      komunitas dengan kesempatan yang tak terbatas untuk saling
                      berbagi antar member
                    </li>
                    <li>support professional karir</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fact;
