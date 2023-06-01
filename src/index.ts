import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { apiDiff, ApiDiffOptions } from "api-smart-diff";

import { oldSpec, newSpec } from "./mocks/mockData";
import { customOpenapi } from "./rules/customOpenapi3";

dotenv.config();
const app: Application = express();
const port = process.env.PORT;

const diffOptions: ApiDiffOptions = {
  rules: customOpenapi,
};

app.use("/", (req: Request, res: Response) => {
  const diffs = apiDiff(oldSpec, newSpec, diffOptions);
  res.json(diffs);
});
app.listen(port, (): void => {
  console.log("SERVER IS UP ON PORT:", port);
});
