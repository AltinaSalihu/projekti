import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

import ProductList from "./pages/productList/ProductList";
import EditAplikantet from "./pages/editAplikantet1/EditAplikantet" ;

import DepartamentList from "./pages/Departamenti/DepartamentList" ;
import EditDepartment from "./pages/Departamenti/editDepartment";
import NewDepartment from "./pages/Departamenti/newDepartament";

import DegaList from "./pages/Dega/DegaList" ;
import EditDega from "./pages/Dega/EditDega";
import AddDega from "./pages/Dega/AddDega";

import OrariList from "./pages/Orari/OrariList";
import EditOrari from "./pages/Orari/EditOrari";
import AddOrari from "./pages/Orari/AddOrari";

import VitiList from "./pages/Viti/VitiList";
import EditViti from "./pages/Viti/EditViti";
import AddViti from "./pages/Viti/AddViti";




function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>

          <Route exact path="/">
            <UserList />
          </Route>

          <Route path="/users">
            <UserList />
          </Route>

          <Route path="/user/:userId">
            <User />
            </Route>  

          <Route path="/EditAplikantet">
            <EditAplikantet />
          </Route>

          <Route path="/newUser">
            <NewUser />
          </Route>

          <Route path="/products">
            <ProductList />
          </Route>

          <Route path="/DepartamentList">
            <DepartamentList />
          </Route>s

          <Route path="/editDepartment">
            <EditDepartment />
          </Route>

          <Route path="/newDepartment">
            <NewDepartment />
          </Route>


          <Route path="/DegaList">
            <DegaList />
          </Route>

          <Route path="/EditDega">
            <EditDega />
          </Route>

          <Route path="/AddDega">
            <AddDega />
          </Route>

          <Route path="/OrariList">
            <OrariList />
          </Route>

          <Route path="/AddOrari">
            <AddOrari />
          </Route>

          <Route path="/EditOrari">
            <EditOrari />
          </Route>

          <Route path="/VitiList">
            <VitiList />
          </Route>

          <Route path="/EditViti">
            <EditViti />
          </Route>

          <Route path="/AddViti">
            <AddViti />
          </Route>

          




          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
