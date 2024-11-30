import { Router } from "express";
import {
  getTopBorrowedBooks,
  getUsersWithPendingLoans,
} from "../controllers/reportController";

const router = Router();

router.get("/top-borrowed", getTopBorrowedBooks);
router.get("/pending-loans", getUsersWithPendingLoans);

export default router;
