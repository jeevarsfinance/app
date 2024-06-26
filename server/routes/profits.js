import express from "express";
import {
  getBalance,
  getBalanceTotal,
  getCustomersDeposit,
  getCustomersEMI,
  getCustomersLoan,
  getDepositCount,
  getDepositProfits,
  getDepositTotal,
  getEMICount,
  getEMIProfits,
  getEMITotal,
  getLoanCount,
  getLoanProfits,
  getLoanTotal,
  getSumDeposit,
  getSumEMI,
  getSumLoans,
  tilltBalance,
} from "../controllers/profit.js";

const router = express.Router();
router.get("/loans/e/:id", getLoanProfits);
router.get("/loans/overall/:id", getSumLoans);
router.get("/deposit/overall/:id", getSumDeposit);
router.get("/emi/overall/:id", getSumEMI);
router.get("/deposit/e/:id", getDepositProfits);
router.get("/emi/e/:id", getEMIProfits);
router.get("/loans/total/:id", getLoanTotal);
router.get("/deposit/total/:id", getDepositTotal);
router.get("/emi/total/:id", getEMITotal);
router.get("/balance/e/:id",getBalance)
router.get("/balance/total/:id",getBalanceTotal)
router.get("/balance/till/:id",tilltBalance)
router.get("/loans/c",getCustomersLoan)
router.get("/deposit/c",getCustomersDeposit)
router.get("/emi/c",getCustomersEMI);
router.get("/loans/l",getLoanCount);
router.get("/deposit/l",getDepositCount);
router.get("/emi/l",getEMICount);

export default router;
