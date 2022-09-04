import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Dashboard() {
  const cards = [
    {
      title: "No.of students enrolled",
      amount: "178",
      theme: "primary",
    },
    {
      title: " Teachers",
      amount: "100",
      theme: "success",
    },
    {
      title: "Daily class",
      amount: "80%",
      theme: "info",
    },
    {
      title: "Student progress",
      amount: "100%",
      theme: "warning",
    },
  ];
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link
          to="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </Link>
      </div>
      <div className="row">
        {cards.map((card, index) => {
          return <Card key={index} id={index} data={card} />;
        })}
      </div>
    </>
  );
}

export default Dashboard;
