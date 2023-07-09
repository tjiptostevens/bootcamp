import "../assets/css/homefact.css";

const Fact = () => {
  return (
    <>
      <div className="w-100">
        <div className="container">
          <div className="row col-md-12 __factcontainer">
            <div className="col-md-6 __factcontaineritem">
              <div className="w-100 __facttitle">
                belajar <b>ditempat lain</b>
              </div>
              <div className="w-100 __factitem">
                <ul>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 __factcontaineritem">
              <div className="w-100 __facttitle">
                belajar di bekal<b>kerja</b>
              </div>
              <div className="w-100 __factitem">
                <ul>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fact;
