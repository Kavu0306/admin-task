import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Users({ data }) {
  return (
    <>
      <div className="col-lg-3">
        <div className="card">
          <img
            src={data.image}
            className="card-img-top"
            alt="..."
            style={{ width: "150px", height: "200px", background: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.content}</p>
            <Link to={`/products/${data.id}`} className="btn btn-primary">
              click to view
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
