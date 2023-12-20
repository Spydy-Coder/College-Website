import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { TiTick } from "react-icons/ti";
import { useEffect, useState } from "react";

export default function ApplicationFlow() {

  const studentId = localStorage.getItem("studentId");
  const [completedSteps, setCompletedSteps] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8800/authprogress/status/${studentId}`);
        const data = await response.json();
        console.log("data",data)
        console.log(studentId)
        setCompletedSteps(data);
        completedSteps && console.log(completedSteps)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  },[]);
  const isStepCompleted = (step) => completedSteps[step];
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body text-center p-3 bg-light rounded">
          <h5 className="card-title m-0">Application Flow</h5>
        </div>
        <hr className="m-0" />
        <div className="ms-3 mt-2 mb-2">
          <p className="card-text">
            <b>Fill Application Form</b>
          </p>
        </div>
        <ul
          className="list-group list-unstyled list-group-flush"
          style={{ border: "1px solid transparent" }}
        >
          <li
            className="list-group-item"
            style={{ border: "1px solid transparent" }}
          >
            <b>Step 1:</b>{" "}
            <Link to="/studentidentity" style={{ textDecoration: "none" }}>
              Identity Info
            </Link>{" "}
            {isStepCompleted("studentidentity") ? (
              <TiTick
                className="mb-1"
                size={20}
                style={{ color: "green" }}
              />
            ):null}
          </li>
          <li
            className="list-group-item"
            style={{ border: "1px solid transparent" }}
          >
            <b>Step 2:</b>{" "}
            <Link to="/studentregistration" style={{ textDecoration: "none" }}>
              Enrollment Related Info
            </Link> {isStepCompleted("studentregistration") ? (
              <TiTick
                className="mb-1"
                size={20}
                style={{ color: "green" }}
              />
            ):null}
          </li>
          <li
            className="list-group-item"
            style={{ border: "1px solid transparent" }}
          >
            <b>Step 3:</b>{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Previous School Info
            </Link>{isStepCompleted("PrevSchoolInfo") ? (
              <TiTick
                className="mb-1"
                size={20}
                style={{ color: "green" }}
              />
            ):null}
          </li>
          <li
            className="list-group-item"
            style={{ border: "1px solid transparent" }}
          >
            <b>Step 4:</b>{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Upload Documents
            </Link>{isStepCompleted("UploadDoc") ? (
              <TiTick
                className="mb-1"
                size={20}
                style={{ color: "green" }}
              />
            ):null}
          </li>
          <li
            className="list-group-item"
            style={{ border: "1px solid transparent" }}
          >
            <b>Step 5:</b>{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Submit Application
            </Link>{isStepCompleted("SubmitForm") ? (
              <TiTick
                className="mb-1"
                size={20}
                style={{ color: "green" }}
              />
            ):null}
          </li>
        </ul>
      </div>
    </div>
  );
}
