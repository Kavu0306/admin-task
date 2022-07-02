import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Card from "./Card";
import Products from "./Products";
import Viewuser from "./Viewuser";
import Table from "./Table";
import Tableuser from "./Tableuser";
import Createuser from "./Createuser";
function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Table />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productid" element={<Viewuser />} />
                <Route path="/users/view/:id" element={<Tableuser />} />
                <Route path="/users/createuser" element={<Createuser />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
