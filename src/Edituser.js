import { useFormik } from "formik";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

function Edituser() {
  let [isloading, setLoading] = useState(false);
  const [tableData, settableData] = useState([]);
  let params = useParams();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      date: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "please enter your name";
      } else if (values.name.length < 5) {
        errors.name = "length should be more than 5";
      }
      if (!values.position) {
        errors.position = "please enter your position";
      }
      if (!values.office) {
        errors.office = "please enter your office name";
      }
      if (!values.age) {
        errors.age = "please enter your age";
      }
      if (!values.date) {
        errors.date = "please enter date";
      }
      if (!values.salary) {
        errors.salary = "please enter your current salary";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.put(`/student/${params.id}`, values);
        navigate("/users");
      } catch (error) {
        alert("something went wrong");
      }
    },
  });
  let fetchData = async () => {
    let userData = await axios.get(`/student/${params.id}`);

    settableData(userData.data);
    formik.setValues(userData.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              className={`form-control ${
                formik.errors.name ? "error-border" : ""
              }`}
            ></input>
            {formik.errors.name ? <span>{formik.errors.name}</span> : ""}
          </div>
          <div className="col-lg-6">
            <label>Position</label>
            <input
              name="position"
              onChange={formik.handleChange}
              value={formik.values.position}
              type="text"
              className={`form-control ${
                formik.errors.position ? "error-border" : ""
              }`}
            ></input>
            {formik.errors.position ? (
              <span>{formik.errors.position}</span>
            ) : (
              ""
            )}
          </div>
          <div className="col-lg-6">
            <label>Office</label>
            <input
              name="office"
              onChange={formik.handleChange}
              value={formik.values.office}
              type="text"
              className={`form-control ${
                formik.errors.office ? "error-border" : ""
              }`}
            ></input>
            {formik.errors.office ? <span>{formik.errors.office}</span> : ""}
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              type="text"
              className={`form-control ${
                formik.errors.age ? "error-border" : ""
              }`}
            ></input>
            {formik.errors.age ? <span>{formik.errors.age}</span> : ""}
          </div>
          <div className="col-lg-6">
            <label>Date</label>
            <input
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
              type="date"
              className={`form-control ${
                formik.errors.date ? "error-border" : ""
              }`}
            ></input>
            {formik.errors.date ? <span>{formik.errors.date}</span> : ""}
          </div>
          <div className="col-lg-6">
            <label>Salary</label>
            <input
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
              type="text"
              className={`form-control ${
                formik.errors.salary ? "error-border" : ""
              }`}
            ></input>
            {formik.errors.salary ? <span>{formik.errors.salary}</span> : ""}
          </div>
          <div className="col-lg-6">
            <input
              type={"submit"}
              value="Submit"
              className="submitbutton"
              disabled={!formik.isValid && isloading}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Edituser;
