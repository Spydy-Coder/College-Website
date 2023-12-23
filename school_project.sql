CREATE DATABASE school;
USE school;

CREATE TABLE studentidentity (
    StudentId INT AUTO_INCREMENT,
    NameAsPerTC VARCHAR(255),
    NameAsPerAadhar VARCHAR(255) NOT NULL,
    AadharNo VARCHAR(12) UNIQUE NOT NULL,
    DOBAsPerTC DATE,  /*YYYY-MM-DD*/
    DOBAsPerAadhar DATE NOT NULL,
    Gender ENUM('male', 'female', 'transgender', 'others') NOT NULL,
    MotherName VARCHAR(255),
    FatherName VARCHAR(255),
    GuardianName VARCHAR(255),
    AadharNoMother VARCHAR(12) UNIQUE NOT NULL,
    AadharNoFather VARCHAR(12) UNIQUE NOT NULL,
    StudentNameAsPerAadhar VARCHAR(255) NOT NULL,
    PresentAddress TEXT,
    Pincode VARCHAR(10),
    MobileNumber VARCHAR(15) NOT NULL,
    AlternateMobileNumber VARCHAR(15),
    EmailId VARCHAR(255),
    AtLeastOneNotNull CHAR(255) GENERATED ALWAYS AS (COALESCE(MotherName, FatherName, GuardianName)) STORED,
    CHECK (AtLeastOneNotNull IS NOT NULL),
    AtLeastOneAadharNotNull VARCHAR(12) GENERATED ALWAYS AS (COALESCE(AadharNoMother, AadharNoFather)) STORED,
    CHECK (AtLeastOneAadharNotNull IS NOT NULL),
    PRIMARY KEY(studentId)
);

SELECT *
FROM studentidentity;

SELECT *
FROM studentregistration;
SELECT *
FROM authprogress;

-- CREATE TABLE authprogress (
--     MobileNumber VARCHAR(15) NOT NULL,
--     StudentId INT AUTO_INCREMENT,
--     studentidentity BOOLEAN DEFAULT false,
--     studentregistration BOOLEAN DEFAULT false,
--     PrevSchoolInfo BOOLEAN DEFAULT false,
--     UploadDoc BOOLEAN DEFAULT false,
--     SubmitForm BOOLEAN DEFAULT false,
--     PRIMARY KEY (StudentId)
-- );
CREATE TABLE authprogress (
    MobileNumber VARCHAR(15) NOT NULL,
    StudentId INT AUTO_INCREMENT,
    studentidentity BOOLEAN DEFAULT false,
    studentregistration BOOLEAN DEFAULT false,
    PrevSchoolInfo BOOLEAN DEFAULT false,
    UploadDoc BOOLEAN DEFAULT false,
    SubmitForm BOOLEAN DEFAULT false,
    PRIMARY KEY (MobileNumber),
    UNIQUE KEY (StudentId)
);

DROP TABLE studentidentity;
DROP TABLE studentregistration;
DROP TABLE authprogress;

CREATE TABLE studentregistration(
	StudentId INT UNIQUE NOT NULL,
	MotherTongue VARCHAR(50) NOT NULL,
	SocialCategory ENUM('sc', 'st', 'obc', 'gen') ,
    MinorityGroup ENUM('muslim', 'christian', 'sikh', 'buddhist', 'parsi', 'jain', 'notminority') NOT NULL,
    BPLBeneficiary ENUM('yes', 'no'),
    AAYBeneficiary ENUM('yes', 'no'),
    EWSDisadvantagedGroup ENUM('yes', 'no'),
    IsCWSN ENUM('yes', 'no'),
    CWSNImpairmentType VARCHAR(50),
    ChildIsIndianNational ENUM('yes', 'no'),
    ChildIsOutOfSchoolChild ENUM('yes', 'no'),
    MainstreamedDate DATE,
	PRIMARY KEY(StudentId),
    FOREIGN KEY (StudentId) REFERENCES studentidentity(StudentId) ON DELETE CASCADE
);






