import React from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../AuthContext";
import { AuthProvider } from "../../AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

export default function StudentIdentity() {
  const { phoneNumber } = useAuth();
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  };

  const redirectToAdmission = ()=>{
    history.push('/admission')
  }

  const [formData, setFormData] = useState({
    EmailId: "",
    AlternateMobileNumber: "",
    MobileNumber: "",
    Pincode: "",
    PresentAddress: "",
    StudentAsPerAadhar: "",
    AadharNoFather: "",
    AadharNoMother: "",
    GuardianName: "",
    FatherName: "",
    MotherName: "",
    Gender: "",
    DOBAsPerAadhar: "",
    DOBAsPerTC: "",
    AadharNo: "",
    NameAsPerAadhar: "",
    NameAsPerTC: "",
  });

  const handleInputChange = (e) => {
    console.log("change", e);
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:8800/studentidentity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      redirectToAdmission()

      // Handle success or error accordingly
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Navbar />
      {phoneNumber ? (
        <div className="container mt-5 ms-5  mx-auto d-flex flex-column justify-content-center align-items-center ">
          <h1 class="display-6">Application Flow : Step 1</h1>
          <div className="d-flex flex-column justify-content-center gap-3 mt-4">
            <div className="flex-item">
              <h2 class="h4">Student Information (As per TC)</h2>
            </div>
            <div className="flex-item">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group  col-auto mb-3">
                    <label htmlFor="NameAsPerTC">
                      Name os Student (As per TC):
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="NameAsPerTC"
                      placeholder=""
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group col-auto col-auto mb-3">
                    <label htmlFor="NameAsPerAadhar">
                      Name of Student (As per Aadhaar):
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="NameAsPerAadhar"
                      placeholder=""
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="AadharNo">Aadhar No of Student:</label>
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    id="AadharNo"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="DOBAsPerTC">Date of Birth (As per TC):</label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    id="DOBAsPerTC"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="DOBAsPerAadhar">
                    Date of Birth (As per Aadhaar):
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    id="DOBAsPerAadhar"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="Gender">Gender:</label>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      id="Gender"
                      onChange={handleInputChange}
                    >
                      <option defaultValue>Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="transgender">Transgender</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="MotherName">MOTHER NAME:</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="MotherName"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="FatherName">FATHER NAME:</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="FatherName"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="GuardianName">
                    GUARDIAN NAME (Optional):
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="GuardianName"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="AadharNoMother">Aadhaar No of Mother:</label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    id="AadharNoMother"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="AadharNoFather">Aadhaar No of Father:</label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    id="AadharNoFather"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="StudentAsPerAadhar">
                    STUDENT NAME AS PER AADHAR:
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="StudentAsPerAadhar"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="PresentAddress">PRESENT ADDRESS:</label>
                  <textarea
                    className="form-control form-control-sm"
                    id="PresentAddress"
                    rows="3"
                    placeholder=""
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="Pincode">PINCODE:</label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    id="Pincode"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="MobileNumber">
                    MOBILE NUMBER (of Student/Parent/Guardian):
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    id="MobileNumber"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="AlternateMobileNumber">
                    ALTERNATE MOBILE NUMBER (Optional):
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    id="AlternateMobileNumber"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="EmailId">
                    EMAIL ID (STUDENT/PARENT/GUARDIAN) (Optional):
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="EmailId"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        redirectToHome()
      )}
    </>
  );
}
