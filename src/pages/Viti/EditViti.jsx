
  import { Link } from "react-router-dom";
  import "./EditViti.css";
  
  export default function User() {
    return (
          <div className="userUpdate">
            <span className="userUpdateTitle">Edito Vitin</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Viti</label>
                  <input
                    type="text"
                    placeholder="2019/20"
                    className="userUpdateInput"
                  />
                </div>
               
                <Link to={"/DepartmentList/"}>
                <button className="userUpdateButton">Update</button>
                </Link>
              </div>
            </form>
          </div>
    );
  }
  