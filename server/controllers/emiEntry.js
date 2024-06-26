import { db } from "../connect.js";

export const getEMIEntries = (req, res) => {
  const q =
    "SELECT FirstName,LastName,l.*,e.* from emientries e INNER JOIN emiloans l ON e.Loan_No=l.Loan_No INNER JOIN emicustomers ON l.Cus_ID=emicustomers.Cus_ID";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
export const getEMIEntryFromCustomer = (req, res) => {
  const q =
    "SELECT FirstName,LastName,l.*,e.* from emientries e INNER JOIN emiloans l ON e.Loan_No=l.Loan_No INNER JOIN emicustomers ON l.Cus_ID=emicustomers.Cus_ID WHERE emicustomers.Cus_ID=?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addEMIEntries = (req, res) => {
  const q =
    "INSERT INTO `emientries`(`Loan_No`, `Cus_ID`, `Pay_Date`, `Pay_Amount`, `Validity`,`EMINo`,`Pay_Type`,`Entry_Type`) VALUES (?,?,?,?,?,?,?,?)";
  const value = [
    req.body.Loan_No,
    req.body.Cus_ID,
    req.body.payDate,
    req.body.payAmount,
    req.body.validity,
    req.body.EMINo,
    req.body.payType,
    req.body.entryType,
  ];
  db.query(q, value, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Entry add successfully");
  });
};

export const deleteEMIEntry = (req, res) => {
  const q = "SELECT * FROM emientries WHERE `Entry_ID`=?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data.length) return res.status(409).json("Entry not found");
    const q = "DELETE FROM emientries WHERE `Entry_ID`=?";
    db.query(q, [req.params.id], (err, data) => {
      return res.status(200).json("Entry deleted.");
    });
  });
};

export const updateEMIEntry = (req, res) => {
  const q =
    "UPDATE `emientries` SET `Pay_Date`=?,`Pay_Amount`=?,`Validity`=?,`EMINo`=?,`Pay_Type`=?,`Entry_Type`=? WHERE `Entry_ID`=?";
  db.query(
    q,
    [
      req.body.payDate,
      req.body.payAmount,
      req.body.validity,
      req.body.EMINo,
      req.body.payType,
      req.body.entryType,
      req.params.id,
    ],
    (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.json({ message: "Updated Entry!!" });
    }
  );
};
