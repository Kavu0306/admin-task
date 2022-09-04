import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "./axios";
function Table() {
  const [tableData, settableData] = useState([]);

  let fetchData = async () => {
    let userData = await axios.get("/student");

    settableData(userData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let handleDelete = async (id) => {
    let ask = window.confirm("do you want to delete this user data?");
    if (ask) {
      await axios.delete(`/student/${id}`);
      fetchData();
    }
  };

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
            {tableData.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.position}</td>
                <td>{contact.office}</td>
                <td>{contact.age}</td>
                <td>{contact.date}</td>
                <td>{contact.salary}</td>
                <td>
                  <Link to={`/users/view/${contact.id}`}>
                    <button className="viewbutton">View</button>
                  </Link>
                  <Link to={`/users/edit/${contact.id}`}>
                    <button className="editbutton">Edit</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="deletebutton"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
