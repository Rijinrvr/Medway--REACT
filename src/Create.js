import { useState } from "react";
import { useNavigate } from "react-router-dom";
import checkAuth from "./checkAuth";
import { useSelector } from "react-redux";

const Create = () => {
  const [name, setMedname] = useState("");
  const [company, setCompanyname] = useState("");
  const [expiry_date, setExpirydate] = useState("");
  const navigate = useNavigate();

  const user = useSelector((store) => store.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const med = { name, company, expiry_date };

    fetch("https://medicalstore.mashupstack.com/api/medicine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
      body: JSON.stringify(med),
    }).then(() => {
      console.log("medicine Added");
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add Medicine</h2>
      <form onSubmit={handleSubmit}>
        <label>Medicine Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setMedname(e.target.value)}
        />
        <label>Company Name:</label>
        <input
          type="text"
          required
          value={company}
          onChange={(e) => setCompanyname(e.target.value)}
        />

        <label>Expiry Date:</label>
        <input
          type="date"
          required
          value={expiry_date}
          onChange={(e) => setExpirydate(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default checkAuth(Create);
