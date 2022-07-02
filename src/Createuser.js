import React from "react";
import { useFormik } from "formik";
import "./App.css";
function Createuser() {
  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      address: "",
      date: "",
      salary: "",
    },
    validate: (values) => {
      let error = {};
      return error;
    },
    onSubmit: (values) => {
      console.log(values);
      fetch("http://localhost:3000/Users", {
        method: "POST",
        body: JSON.stringify(values),
      });
    },
  });
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}></form>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="col-lg-6">
            <label>Position</label>
            <input
              name="position"
              onChange={formik.handleChange}
              value={formik.values.position}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="col-lg-6">
            <label>Office</label>
            <input
              name="office"
              onChange={formik.handleChange}
              value={formik.values.office}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="col-lg-6">
            <label>Address</label>
            <input
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="col-lg-6">
            <label>Date</label>
            <input
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
              type="date"
              className="form-control"
            ></input>
          </div>
          <div className="col-lg-6">
            <label>Salary</label>
            <input
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="col-lg-6">
            <input
              type={"submit"}
              value="Submit"
              className="submitbutton"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createuser;
