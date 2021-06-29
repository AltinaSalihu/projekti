import "./AddOrari.css";
import { Link } from "react-router-dom";
export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Shto nje Orar te ri</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Shto Orari</label>
          <input type="text" placeholder="2019/20" />
        </div>
        <Link to={"/OrariList/"}>
              <button className="newUserButton">Shto</button>
              </Link>
      </form>
    </div>
  );
}
