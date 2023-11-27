import { NextFunction, Request, Response } from "express";
import { customError } from "./customError";

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof customError) {
		const { statusCode, errors, logging } = err;
		if (logging) {
			console.error(
				JSON.stringify(
					{
						code: err.statusCode,
						errors: err.errors,
						stack: err.stack,
					},
					null,
					2
				)
			);
		}

		return res.status(statusCode).send({ errors });
	}

	console.log(err);
	res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};
