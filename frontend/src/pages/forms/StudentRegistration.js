import React from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../AuthContext";
import { AuthProvider } from "../../AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function StudentRegistration() {
  const { phoneNumber } = useAuth();
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <>
      <Navbar />
      {phoneNumber ? (
        <div className="container mt-5 ms-5 mx-auto d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-6">Application Flow: Step 2</h1>
          <div className="d-flex flex-column justify-content-center gap-3 mt-4">
            <div className="flex-item">
              <h2 className="h4">Student Registration</h2>
            </div>
            <div className="flex-item">
              <form>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="MotherTongue">MOTHER TONGUE:</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="MotherTongue"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="SocialCategory">SOCIAL CATEGORY:</label>
                  <select className="form-select" id="SocialCategory">
                    <option defaultValue>Select category</option>
                    <option value="sc">1.SC</option>
                    <option value="st">2.ST</option>
                    <option value="obc">3.OBC</option>
                    <option value="gen">4.Gen</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="MinorityGroup">MINORITY GROUP:</label>
                  <select className="form-select" id="MinorityGroup">
                    <option defaultValue>Select minority group</option>
                    <option value="muslim">Muslim</option>
                    <option value="christian">Christian</option>
                    <option value="sikh">Sikh</option>
                    <option value="buddhist">Buddhist</option>
                    <option value="parsi">Parsi</option>
                    <option value="jain">Jain</option>
                    <option value="notMinority">Not Minority</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="BPLBeneficiary">Is BPL BENEFAICIARY?</label>
                  <select className="form-select" id="BPLBeneficiary">
                    <option defaultValue>Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="BPLBeneficiary">
                    Whether Antyodaya Anna Yojana (AAY) beneficiary?:
                  </label>
                  <select className="form-select" id="BPLBeneficiary">
                    <option defaultValue>Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="EWSDisadvantageGroup">
                    BELONGS TO EWS/DISADVANTAGED GROUP?
                  </label>
                  <select className="form-select" id="EWSDisadvantageGroup">
                    <option defaultValue>Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="IsCWSN">IS CWSN?</label>
                  <select className="form-select" id="IsCWSN">
                    <option defaultValue>Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="CWSNImpairmentType">
                    CWSN IMPAIRMENT TYPE:
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="CWSNImpairmentType"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="ChildIsIndianNational">
                    CHILD IS INDIAN NATIONAL?
                  </label>
                  <select className="form-select" id="ChildIsIndianNational">
                    <option defaultValue>Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="ChildIsOutOfSchoolChild">
                    CHILD IS OUT-OF-SCHOOL-CHILD?{" "}
                  </label>
                  <select className="form-select" id="ChildIsOutOfSchoolChild">
                    <option defaultValue>Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="form-group col-auto mb-3">
                  <label htmlFor="MainstreamedDate">
                    When the child is mainstreamed?
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    id="MainstreamedDate"
                    placeholder=""
                  />
                </div>
                {/* Add similar form groups for other details */}
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
