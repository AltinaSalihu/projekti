import "./AddDega.css";
import { Link } from "react-router-dom";
export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Shto nje dege te re</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Shto Degen</label>
          <input type="text" placeholder="Gjilan" />
        </div>
        <Link to={"/DegaList/"}>
              <button className="newUserButton">Shto</button>
              </Link>
      </form>
    </div>
  );
}
