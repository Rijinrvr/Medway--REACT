import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import checkAuth from "./checkAuth";
import MedicineList from "./MedicineList";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  // temp variable
  const [tempData, setTempData] = useState([]);
  const user = useSelector((store) => store.auth.user);

  const handleChaange = (e) => {
    const value = e.target.value;
    setKeyword(value.toLowerCase());
  };

  function onClick() {
    axios
      .get(
        "https://medicalstore.mashupstack.com/api/medicine/search?keyword=" +
          keyword,
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
      .then((res) => {
        setTempData(res.data);
      });

    // TODO: add catch error
  }

  useEffect(() => {
    // getResult();
  }, []);

  return (
    <div className="search">
      <input type="text" value={keyword} onChange={handleChaange} />
      <button onClick={onClick} className="edit-btn">
        Search
      </button>

      <MedicineList medicines={tempData} />
    </div>
  );
};

export default checkAuth(Search);
