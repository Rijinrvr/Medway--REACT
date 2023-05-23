import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MedicineEdit from "./MedicineEdit";

const MedicineBody = ({ medicine }) => {
  const navigate = useNavigate();

  const [editMode, seteditMode] = useState(false);

  var user = useSelector((store) => store.auth.user);

  const handleDelete = () => {
    fetch("https://medicalstore.mashupstack.com/api/medicine/" + medicine.id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + user.token,
      },
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="blog-list">
      {editMode ? (
        <MedicineEdit medicine={medicine} />
      ) : (
        <ViewData
          medicine={medicine}
          handleDelete={handleDelete}
          seteditMode={seteditMode}
        />
      )}
    </div>
  );
};

const ViewData = ({ medicine, handleDelete, seteditMode }) => {
  const { name, company, expiry_date } = medicine;

  return (
    <div>
      <h3>Medicine Name :{name}</h3>
      <p> Company:{company}</p>
      <p>Expiry Date:{expiry_date}</p>
      <button className="edit-btn" onClick={handleDelete}>
        Delete
      </button>
      <button className="edit-btn" onClick={() => seteditMode(true)}>
        Edit
      </button>
    </div>
  );
};

export default MedicineBody;
