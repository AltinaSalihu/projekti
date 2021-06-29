
  import { Link } from "react-router-dom";
  import "./EditDega.css";
  
  export default function User() {
    return (
          <div className="userUpdate">
            <span className="userUpdateTitle">Edito Degen</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Dega</label>
                  <input
                    type="text"
                    placeholder="Gjilan"
                    className="userUpdateInput"
                  />
                </div>
               
                <Link to={"/DegaList/"}>
                <button className="userUpdateButton">Update</button>
                </Link>
              </div>
            </form>
          </div>
    );
  }
  