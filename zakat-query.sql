CREATE DATABASE ZakatDB;

USE ZakatDB;

CREATE TABLE Users(
    UserID INT PRIMARY KEY IDENTITY(1,1),
    FullName VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(100)
);

CREATE TABLE Donors(
    DonorID INT PRIMARY KEY IDENTITY(1,1),
    FullName VARCHAR(100),
    Phone VARCHAR(20),
    Address VARCHAR(200)
);

CREATE TABLE Beneficiaries(
    BeneficiaryID INT PRIMARY KEY IDENTITY(1,1),
    FullName VARCHAR(100),
    Phone VARCHAR(20),
    Address VARCHAR(200)
);

CREATE TABLE ZakatPayments(
    PaymentID INT PRIMARY KEY IDENTITY(1,1),
    DonorID INT,
    BeneficiaryID INT,
    Amount DECIMAL(10,2),
    PaymentDate DATE,

    FOREIGN KEY (DonorID)
    REFERENCES Donors(DonorID),

    FOREIGN KEY (BeneficiaryID)
    REFERENCES Beneficiaries(BeneficiaryID)
);


INSERT INTO Users
VALUES
('Admin','admin@gmail.com','12345');

INSERT INTO Donors
VALUES
('Ahmed Ali','0612345678','Mogadishu'),
('Hassan Omar','0611111111','Mogadishu');

INSERT INTO Beneficiaries
VALUES
('Fatima Yusuf','0612222222','Mogadishu'),
('Mohamed Noor','0613333333','Mogadishu');

INSERT INTO ZakatPayments
VALUES
(1,1,100,'2026-06-01'),
(2,2,200,'2026-06-05');

select * from Donors


select * from  ZakatPayments


select * from  Beneficiaries


select * from Users


