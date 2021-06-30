import "./DepartamentList.css";
import { DataGrid } from "@material-ui/data-grid";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AddCircle } from "@material-ui/icons";
import { DeleteOutline } from "@material-ui/icons";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    
  {
    field: "departamenti",
    headerName: "Departamenti",
    width: 160,
  },
    {
      field: "shto",
      headerName: "Edito & Fshij & Shto ",
      width: 700,
      
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editDepartment/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
            <Link to={"/newDepartment/" + params.row.id}>
            <AddCircle className="widgetSmIcon" />
            </Link>
            
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
