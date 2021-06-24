import "./editAplikantet.css";
import { Link } from "react-router-dom";
export default function EditAplikantet() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Ndrysho te dhenat</h1>
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
        <Link to={"/users/"}>
        <button className="newUserButton">Ndrysho</button>
        </Link>
      </form>
    </div>
  );
}
