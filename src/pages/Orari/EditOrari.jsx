
  import { Link } from "react-router-dom";
  import "./EditOrari.css";
  
  export default function User() {
    return (
          <div className="userUpdate">
            <span className="userUpdateTitle">Edito Orarin </span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Orari</label>
                  <input
                    type="text"
                    placeholder="2019/20"
                    className="userUpdateInput"
                  />
                </div>
               
                <Link to={"/OrariList/"}>
                <button className="userUpdateButton">Update</button>
                </Link>
              </div>
            </form>
          </div>
    );
  }
  