import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Visibility } from "@material-ui/icons";
import { AddCircle } from "@material-ui/icons";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "dataregjistrimit",
      headerName: "Data e regjistrimit",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.username}
          </div>
        );
      },
    },
    { field: "numripersonal", headerName: "Numri Personal", width: 200 },
    {
      field: "emri",
      headerName: "Emri",
      width: 120,
    },
    {
      field: "emriprindit",
      headerName: "Emri i prindit",
      width: 160,
    },
    {
      field: "mbiemri",
      headerName: "Mbiemri",
      width: 200,
    },
  
  {
    field: "drejtimi",
    headerName: "Drejtimi",
    width: 160,
  },
    {
      field: "shto",
      headerName: "Edito & Detajet ",
      width: 700,
      
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editAplikantet/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <Link to={"/user/" + params.row.id}>
            <Visibility className="widgetSmIcon" />
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
