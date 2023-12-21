import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bikash",
  database: "school",
});

app.get("/", (req, res) => {
  res.json("Root of the Project_school");
});

app.post("/authprogress", (req, res) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({ error: "phoneNumber is required" });
    }

    const checkQuery = "SELECT * FROM authprogress WHERE MobileNumber = ?";

    db.query(checkQuery, [phoneNumber], (checkErr, checkResult) => {
      if (checkErr) {
        console.error(checkErr);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (checkResult.length > 0) {
        // If phoneNumber exists, return the existing studentId
        return res.json({
          message: "Student already enrolled!",
          studentId: checkResult[0].StudentId,
        });
      } else {
        // If phoneNumber doesn't exist, insert a new record
        const insertQuery =
          "INSERT INTO authprogress (MobileNumber) VALUES (?)";

        db.query(insertQuery, [phoneNumber], (insertErr, insertResult) => {
          if (insertErr) {
            console.error(insertErr);
            return res.status(500).json({ error: "Internal Server Error" });
          }

          // Return the newly inserted studentId
          return res.json({
            message: "New student enrolled!",
            studentId: insertResult.insertId,
          });
        });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/studentidentity/:id", (req, res) => {
  const StudentId = req.params.id;
  const q =
    "INSERT INTO studentidentity (StudentId, NameAsPerTC, NameAsPerAadhar, AadharNo, DOBAsPerTC, DOBAsPerAadhar, Gender, MotherName, FatherName, GuardianName, AadharNoMother, AadharNoFather, StudentNameAsPerAadhar, PresentAddress, Pincode, MobileNumber, AlternateMobileNumber, EmailId) VALUES (?)";
  const values = [
    StudentId,
    req.body.NameAsPerTC,
    req.body.NameAsPerAadhar,
    req.body.AadharNo,
    req.body.DOBAsPerTC,
    req.body.DOBAsPerAadhar,
    req.body.Gender,
    req.body.MotherName,
    req.body.FatherName,
    req.body.GuardianName,
    req.body.AadharNoMother,
    req.body.AadharNoFather,
    req.body.StudentNameAsPerAadhar,
    req.body.PresentAddress,
    req.body.Pincode,
    req.body.MobileNumber,
    req.body.AlternateMobileNumber,
    req.body.EmailId,
  ];

  db.query(q, [values], (err, data) => {
    if(err) return res.json(err)
    
    const q = 'UPDATE authprogress SET studentidentity = TRUE WHERE StudentId = (?)'

    const values = [
      StudentId
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    })
});
});

app.post("/studentregistration/:id", (req, res) => {
  const StudentId = req.params.id;
  const q =
    "INSERT INTO studentregistration (StudentId, MotherTongue, SocialCategory, MinorityGroup, BPLBeneficiary, AAYBeneficiary, EWSDisadvantagedGroup, IsCWSN, CWSNImpairmentType, ChildIsIndianNational, ChildIsOutOfSchoolChild, MainstreamedDate) VALUES (?)";

  const values = [
    StudentId,
    req.body.MotherTongue,
    req.body.SocialCategory,
    req.body.MinorityGroup,
    req.body.BPLBeneficiary,
    req.body.AAYBeneficiary,
    req.body.EWSDisadvantagedGroup,
    req.body.IsCWSN,
    req.body.CWSNImpairmentType,
    req.body.ChildIsIndianNational,
    req.body.ChildIsOutOfSchoolChild,
    req.body.MainstreamedDate,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error(err);
      return res.json({ error: "Error while adding student information" });
    }
      const q = 'UPDATE authprogress SET studentregistration = TRUE WHERE StudentId = (?)'

      const values = [
        StudentId
      ];

      db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      })
  });
});

app.get("/authprogress/status/:studentId", (req, res) => {
  const studentId = req.params.studentId;

  const query = "SELECT * FROM authprogress WHERE studentId = ?";
  db.query(query, [studentId], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Assuming result is an array with a single object
      if (result.length === 1) {
        const { StudentId, MobileNumber, ...dataWithoutStudentId } = result[0];
        res.json(dataWithoutStudentId);
      } else {
        res.status(404).json({ error: "Student not found" });
      }
    }
  });
});

app.listen(8800, () => {
  console.log("connected to server");
});
