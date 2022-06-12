import express from "express";
import { Request, Response } from "express";
import getCompanyDataFromWebsite from "../../utils/getCompanyDataFromWebsite";


const router = express.Router();
router.use("/api/search/:company",(req , res ) => {
   getCompanyDataFromWebsite(req, res);
});

export default router;