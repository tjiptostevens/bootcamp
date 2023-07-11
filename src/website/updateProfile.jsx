import { useState } from "react";

const UpdateProfile = () => {
  const [profile, setProfile] = useState({});
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProfile({ ...profile, [name]: value });
  };
  return (
    <>
      <form>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          name="displayName"
        />
        <input
          onChange={handleChange}
          className="form-control"
          type="email"
          name="email"
        />
        <input
          onChange={handleChange}
          className="form-control"
          type="mobile"
          name="mobile"
        />
      </form>
    </>
  );
};

export default UpdateProfile;
