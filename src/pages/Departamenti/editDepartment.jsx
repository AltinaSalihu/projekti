
  import { Link } from "react-router-dom";
  import "./editDepartment.css";
  
  export default function User() {
    return (
          <div className="userUpdate">
            <span className="userUpdateTitle">Edito Departamentin</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Departamenti</label>
                  <input
                    type="text"
                    placeholder="Shki"
                    className="userUpdateInput"
                  />
                </div>
               
                <Link to={"/DepartamentList/"}>
                <button className="userUpdateButton">Update</button>
                </Link>
              </div>
            </form>
          </div>
    );
  }
  