import express from "express";
import cors from "cors";
import { frontendUrl } from "./constants";

import { createExpressMiddleware } from "@trpc/server/adapters/express";
import indexRouter from "./routers";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors({ origin: frontendUrl }));

app.use("/trpc", createExpressMiddleware({ router: indexRouter }));

app.get("/ping", (req, res) => {
  res.send({ test: "successful" });
});

app.listen(7500, () => {
  console.log("server listening", process);
});

export type AppRouter = typeof indexRouter;
