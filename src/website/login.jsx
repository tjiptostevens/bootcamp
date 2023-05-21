import viteLogo from "/vite.svg";
const Login = () => {
    const [form, setForm] = useState({})
  const handleChange = (e) => {
    let nam = e.target.value
let val = e.target.value
  };
  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      <div
        className="w-100"
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-md-4" style={{ padding: "1rem" }}>
          <div className="w-100" style={{ textAlign: "center" }}>
            <img src={viteLogo} alt="logo" style={{ width: "100px" }} />
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <input className="form-control" type="text" name="usr" />
            <input className="form-control" type="password" name="pwd" />
            <button className="btn btn-primary" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
