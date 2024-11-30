import { Router } from "express";
import { registerLoan, returnLoan } from "../controllers/loanController";

const router: Router = Router();

router.post("/", registerLoan);
router.put("/return/:loanId", returnLoan);

export default router;
