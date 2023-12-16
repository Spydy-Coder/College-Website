import React from "react";

export default function ApplicationFlow() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body text-center p-3 bg-light rounded">
          <h5 className="card-title m-0">Application Flow</h5>
        </div>
        <hr className="m-0" />
        <div className="ms-3 mt-2 mb-2" >
          <p className="card-text" >
            <b>Fill Application Form</b>
          </p>
        </div>
        <ul className="list-group list-unstyled list-group-flush" style={{ border: '1px solid transparent' }}>
          <li className="list-group-item" style={{ border: '1px solid transparent' }}>
            <b>Step 1:</b> <a href="#" style={{ textDecoration: 'none' , }}>Identity Info</a>
          </li>
          <li className="list-group-item" style={{ border: '1px solid transparent' }}>
            <b>Step 2:</b> <a href="#" style={{ textDecoration: 'none' }}>Enrollment Related Info</a>
          </li>
          <li className="list-group-item" style={{ border: '1px solid transparent' }}>
            <b>Step 3:</b> <a href="#" style={{ textDecoration: 'none' }}>Previous School Info</a>
          </li>
          <li className="list-group-item" style={{ border: '1px solid transparent' }}>
            <b>Step 4:</b> <a href="#" style={{ textDecoration: 'none' }}>Upload Documents</a>
          </li>
          <li className="list-group-item" style={{ border: '1px solid transparent' }}>
            <b>Step 5:</b> <a href="#" style={{ textDecoration: 'none' }}>Submit Application</a>
          </li>
        </ul>
      </div>
    </div>
  );
}