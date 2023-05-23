import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import checkAuth from "./checkAuth";

const MedicineEdit = ({ medicine }) => {
  const [name, setMedname] = useState(medicine.name);
  const [company, setCompanyname] = useState(medicine.company);
  const [expiry_date, setExpirydate] = useState(medicine.expiry_date);

  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    console.log("clicked");
    const savemed = { name, company, expiry_date };
    fetch(`https://medicalstore.mashupstack.com/api/medicine/${medicine.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
      body: JSON.stringify(savemed),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="edit">
      <h2>Edit Medicine</h2>
      <form>
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
        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default checkAuth(MedicineEdit);
