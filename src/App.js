import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Productuser from "./Productuser";
import Table from "./Table";
import Tableuser from "./Tableuser";
import Createuser from "./Createuser";
import Edituser from "./Edituser";
import { Userprovider } from "./Usercontext";
function App() {
  return (
    <BrowserRouter>
      <Userprovider>
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
                  <Route
                    path="/products/:productid"
                    element={<Productuser />}
                  />
                  <Route path="/users/view/:id" element={<Tableuser />} />
                  <Route path="/users/createuser" element={<Createuser />} />
                  <Route path="/users/edit/:id" element={<Edituser />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Userprovider>
    </BrowserRouter>
  );
}
export default App;
