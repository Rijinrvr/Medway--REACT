import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import checkAuth from "./checkAuth";
import MedicineBody from "./MedicineBody";

const Medicine = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = useSelector((store) => store.auth.user);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://medicalstore.mashupstack.com/api/medicine/${id}`, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setMedicine(data);
          setLoading(false);
          setError("");
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {medicine && <MedicineBody medicine={medicine} />}
    </div>
  );
};

export default checkAuth(Medicine);
