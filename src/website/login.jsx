import { useState } from "react";
import viteLogo from "/vite.svg";
const Login = () => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    setForm({ ...form, [nam]: val });
    console.log(form);
  };
  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      <div
        className="w-100"
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="col-md-4"
          style={{ padding: "1rem", maxWidth: "400px" }}
        >
          <div className="w-100" style={{ textAlign: "center" }}>
            <img src={viteLogo} alt="logo" style={{ width: "70px" }} />
            <p>SCOLA.education</p>
          </div>
          <form
            onSubmit={() => handleSubmit()}
            method="post"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <div className="w-100">
              <label htmlFor="usr">Username or Email</label>
              <input
                className="form-control"
                type="text"
                name="usr"
                onChange={handleChange}
              />
            </div>
            <div className="w-100">
              <label htmlFor="pwd">Password</label>
              <input
                className="form-control"
                type="password"
                name="pwd"
                onChange={handleChange}
              />
            </div>
            <div className="w-100 __row" style={{ gap: "1rem" }}>
              <button className="btn btn-primary" type="submit">
                login
              </button>
              <button className="btn btn-light" type="submit">
                sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
