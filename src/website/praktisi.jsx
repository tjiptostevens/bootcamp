import "../assets/css/homepraktisi.css";
import { getFsData } from "../config/firestore";
import useFetch from "../custom/useFetch";

const Praktisi = () => {
  // const { data } = useFetch("https://dummyjson.com/users");
  const { data } = getFsData("praktisi", true);

  return (
    <div className="w-100">
      <div className="container">
        <div className="__praktisicontainer">
          <div className="w-100 __praktisititle">
            bekal <b>dari praktisi</b>
          </div>
          <div
            className="w-100"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="__praktisisubtitle">
              Belajar langsung dari praktisi & pakar dibidang High Tech Industry
              yang sudah berkecimpung selama lebih dari 10 tahun dengan
              pengalamannya diberbagai perusahaan Top Global.
            </div>
          </div>
          <div className="w-100 __praktisiitemcontainer">
            {data &&
              data.map((d) => (
                <>
                  <div className="col-md-3 __praktisiitem">
                    <div
                      className="__praktisiimg"
                      style={{
                        "--praktisiimg": `url(${d.image})`,
                        backgroundColor: "#e9e9e9",
                      }}
                    ></div>
                    <div className="__praktisiname">
                      <p>
                        <b>{d.firstName}</b>
                        <br />
                        {d.lastName}
                      </p>
                    </div>
                    {/* <div className="__praktisifirstname">{d.firstName}</div>
                      <div className="__praktisilastname">{d.lastName}</div> */}
                    <div className="__praktisioccupation">
                      {d.title} on {d.company}
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Praktisi;
