import "./newUser.css";
import { Link } from "react-router-dom";
export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Shto nje aplikant te ri</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>ID</label>
          <input type="text" placeholder="1" />
        </div>
        <div className="newUserItem">
          <label>Data e regjistrimit</label>
          <input type="text" placeholder="16-02-2021" />
        </div>
        <div className="newUserItem">
          <label>Numri Personal</label>
          <input type="text" placeholder="1111111" />
        </div>
        <div className="newUserItem">
          <label>Emri</label>
          <input type="text" placeholder="Altina" />
        </div>
        <div className="newUserItem">
          <label>Emri i  Prindit</label>
          <input type="text" placeholder="Filan" />
        </div>
        <div className="newUserItem">
          <label>Mbiemri</label>
          <input type="text" placeholder="Salihu" />
        </div>
        <div className="newUserItem">
          <label>Drejtimi</label>
          <input type="text" placeholder="SHKI" />
        </div>
        <div className="newUserItem">
          <label>Telefoni</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Addresa</label>
          <input type="text" placeholder="Gjilan | Kosove" />
        </div>
        <div className="newUserItem">
          <label>Gjinia</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Mashkull</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Femer</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Tjeter</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Niveli</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Bachelor</option>
            <option value="no">Master</option>
          </select>
        </div>
        <Link to={"/users/"}>
              <button className="newUserButton">Shto</button>
              </Link>
      </form>
    </div>
  );
}
