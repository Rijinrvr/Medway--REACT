import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Medicine from "./Medicine";
import Search from "./Search";
import Login from "./Login";
import MedicineEdit from "./MedicineEdit";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/medicine/:id" element={<Medicine />} />
          <Route path="/search" element={<Search />} />
          <Route path="/edit" element={<MedicineEdit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
