import express from "express";
import testRouter from "./test";
const router = express.Router();

router.use("/test", testRouter);

router.get("/", (req, res) => {
  res.send(`Backend running successfully on ${req.baseUrl}`);
});

export default router;
