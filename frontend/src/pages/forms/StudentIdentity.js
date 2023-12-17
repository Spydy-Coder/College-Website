import React from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../AuthContext";
import { AuthProvider } from "../../AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function StudentIdentity() {
  const { phoneNumber } = useAuth();
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
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
              <form>
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
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="DOBAsPerTC">Date of Birth (As per TC):</label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    id="DOBAsPerTC"
                    placeholder=""
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
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="Gender">Gender:</label>
                  <div className="col-sm-8">
                    <select className="form-select" id="Gender">
                      <option defaultValue>Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="transgender">Transgender</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="DOBAsPerTC">MOTHER NAME:</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="MotherName"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="FatherName">FATHER NAME:</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="FatherName"
                    placeholder=""
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
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="AadharNoMother">Aadhaar No of Mother:</label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    id="AadharNoMother"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="AadharNoFather">Aadhaar No of Father:</label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    id="AadharNoFatherC"
                    placeholder=""
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
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="PresentAddress">PRESENT ADDRESS:</label>
                  <textarea
                    className="form-control form-control-sm"
                    id="PresentAddress"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="Pincode">PINCODE:</label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    id="Pincode"
                    placeholder=""
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
