import express from "express";
import { router } from "./routes/routes";
import { errorHandler } from "./error/errors";

export const app = express();

app.use(express.json());
app.use("/api/v1", router);

//error handling
app.use(errorHandler);
