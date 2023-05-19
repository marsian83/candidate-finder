import express from "express";
import testRouter from "./test";
const router = express.Router();

router.use("/test", testRouter);

router.get("/", (req, res) => {
  res.send(
    `Backend running successfully on ${
      req.protocol + "://" + req.get("host") + req.originalUrl
    }`
  );
});

export default router;
