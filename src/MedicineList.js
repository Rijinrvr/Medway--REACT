import { Link } from "react-router-dom";

const MedicineList = ({ medicines }) => {
  return (
    <div className="medicine-list">
      {medicines.map((medicine) => {
        var { id, name, company } = medicine;
        console.log(medicine);
        return (
          <div className="blog-preview" key={id}>
            <Link to={`/medicine/${id}`}>
              <h2>{name}</h2>
              <p>{company}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MedicineList;
