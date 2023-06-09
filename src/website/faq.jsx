import "../assets/css/homefaq.css";
import { questionMark } from "../custom/img";
const faqItem = [
  {
    question: "Apakah ada batasan usia untuk bisa ikut program SCOLA ?",
    answer:
      "Tidak ada batasan usia untuk dapat mengikuti SCOLA. Akan tetapi kami menyarankan agar pembelajaran ini di berikan minimal usia 15tahun ke atas. ",
  },
  {
    question: "Bagaimana jika saya tidak dapat menghadiri sesi pembelajaran?",
    answer:
      "Kami menyediakan rekaman tiap sesi kelas yang berlangsung beserta materinya. Minimum kehadiran juga 70% dari total sesi, jadi tidak perlu khawatir tertinggal. Kamu juga dapat bertanya diluar sesi kelas, class manager dan tutor kami selalu standby untuk menjawab pertanyaan kamu.",
  },
  {
    question: "Saya telah sukses melakukan pembayaran apa langkah selanjutnya?",
    answer:
      "Kamu akan menerima email konfirmasi pembayaran sukses dan akan menerima email invitation ke group student maksimal 3x24 jam di hari kerja. Apabila kamu belum menerima email tersebut, silahkan chat admin customer service kami.",
  },
];
const Faq = () => {
  return (
    <>
      <div
        className="w-100"
        style={{ padding: "50px 0", position: "relative" }}
      >
        <div
          className="__whatisimg __float"
          style={{
            "--imgtop": "5px",
            "--imgright": "-50px",
            "--imgleft": "none",
            zIndex: "-1",
          }}
        >
          <img
            style={{
              "--imgwidth": "300px",
              "--imgblur": "5px",
              "--imgrotate": "20deg",
            }}
            src={questionMark}
            alt=""
          />
        </div>
        <div
          className="__whatisimg __float"
          style={{
            "--imgtop": "5px",
            "--imgright": "none",
            "--imgleft": "-300px",
            zIndex: "-1",
          }}
        >
          <img
            style={{
              "--imgwidth": "clamp(70vw,50vw,50vw)",
              "--imgblur": "5px",
              "--imgrotate": "-15deg",
            }}
            src={questionMark}
            alt=""
          />
        </div>
        <div className="container">
          <div className="__faqcontainer">
            <div className="__faqtitle">FAQ</div>
            <div className="__faqsubtitle">Yang paling sering ditanyakan</div>

            <div className="col-md-12 __faqcontent">
              {faqItem.map((d, i) => (
                <div className="__faqitem">
                  <div className="__faqitemquestion">
                    <label className="form-check-label" for={"faq" + i}>
                      {d.question}
                      <i className="bi bi-chevron-down"></i>
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="faq"
                      id={"faq" + i}
                    />

                    <div className="w-100 __faqitemanswer">{d.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
