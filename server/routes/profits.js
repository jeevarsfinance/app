import express from "express";
import {
  getBalance,
  getBalanceTotal,
  getCustomersDeposit,
  getCustomersEMI,
  getCustomersLoan,
  getDepositProfits,
  getDepositTotal,
  getEMIProfits,
  getEMITotal,
  getLoanProfits,
  getLoanTotal,
} from "../controllers/profit.js";

const router = express.Router();
router.get("/loans/e/:id", getLoanProfits);
router.get("/deposit/e/:id", getDepositProfits);
router.get("/emi/e/:id", getEMIProfits);
router.get("/loans/total/:id", getLoanTotal);
router.get("/deposit/total/:id", getDepositTotal);
router.get("/emi/total/:id", getEMITotal);
router.get("/balance/e/:id",getBalance)
router.get("/balance/total/:id",getBalanceTotal)
router.get("/loans/c",getCustomersLoan)
router.get("/deposit/c",getCustomersDeposit)
router.get("/emi/c",getCustomersEMI)

export default router;
