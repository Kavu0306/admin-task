import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Table() {
  const tableData = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      date: "2011/04/25",
      salary: "$320",
    },
    {
      id: 2,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "$170",
    },
    {
      id: 3,
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      date: "2009/01/12",
      salary: "$86",
    },
    {
      id: 4,
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      date: "2012/03/29",
      salary: "$433",
    },
    {
      id: 5,
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      date: "2008/11/28",
      salary: "$162",
    },
  ];
  return (
    <>
      <Link to={`/Users/createuser`} className="btn-btn-sm btn-warning">
        <button className="createuser">create user</button>
      </Link>
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th> position</th>
              <th>office</th>
              <th>age</th>
              <th>date</th>
              <th>salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((contact) => (
              <tr>
                <td>{contact.name}</td>
                <td>{contact.position}</td>
                <td>{contact.office}</td>
                <td>{contact.age}</td>
                <td>{contact.date}</td>
                <td>{contact.salary}</td>
                <td>
                  <Link to={`/users/view/${tableData.id}`}>
                    <button className="viewbutton">View</button>
                  </Link>
                  <Link to={`/users/view/${tableData.id}`}>
                    <button className="editbutton">Edit</button>
                  </Link>
                  <button className="deletebutton">Delete</button>
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
