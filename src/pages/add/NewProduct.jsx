import "./newProduct.css";
import { Link } from "react-router-dom";
export default function NewProduct() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Shto elemente te reja</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Shto Departamentin</label>
          <input type="text" placeholder="SHKI" />
        </div>
        <div className="newUserItem">
          <label>Shto Degen</label>
          <input type="text" placeholder="Gjilan" />
        </div>
        <div className="newUserItem">
          <label>Shto Orarin</label>
          <input type="text" placeholder="Paradite" />
        </div>
        <div className="newUserItem">
          <label>Shto Vitin Akademik</label>
          <input type="text" placeholder="2019/2020" />
        </div>
       
        <Link to={"/users/"}></Link>
        <button className="newUserButton">Shto</button>
      </form>
    </div>
  );
}
