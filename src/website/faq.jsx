import "../assets/css/homefaq.css";
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
      <div className="w-100" style={{ padding: "50px 0" }}>
        <div className="container">
          <div className="row __faqcontainer">
            <div className="col-md-7">
              <div className="__faqtitle">Yang paling sering di tanyakan.</div>
              <div className="__faqcontent">
                {faqItem.map((d, i) => (
                  <div className="__faqitem">
                    <div className="__faqitemquestion">
                      <label className="form-check-label" for={"faq" + i}>
                        {d.question}
                        <i className="bi bi-chevron-down"></i>
                      </label>

                      <input
                        className="form-check-input"
                        type="radio"
                        name="faq"
                        id={"faq" + i}
                      />

                      <div className="w-100 __faqitemanswer">{d.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-5" style={{ overflow: "hidden" }}>
              <div className="w-100">
                <img
                  src="https://info.icei.ac.id/upload/60ff9464c7a1a1.png"
                  alt=""
                  style={{ translate: "-15%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
