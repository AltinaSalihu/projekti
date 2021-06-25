import "./AddOrari.css";
import { Link } from "react-router-dom";
export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Shto nje orar te ri</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Shto Orarin</label>
          <input type="text" placeholder="Paradite" />
        </div>
        <Link to={"/OrarList/"}>
              <button className="newUserButton">Shto</button>
              </Link>
      </form>
    </div>
  );
}
