import "./newDepartment.css";
import { Link } from "react-router-dom";
export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Shto nje aplikant te ri</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Shto Departamentin</label>
          <input type="text" placeholder="SHKI" />
        </div>
        <Link to={"/DepartamentList/"}>
              <button className="newUserButton">Shto</button>
              </Link>
      </form>
    </div>
  );
}
