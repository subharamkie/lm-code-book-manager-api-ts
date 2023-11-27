export type customErrorContent = {
	message: string;
	context?: { [key: string]: any };
};

export abstract class customError extends Error {
	abstract readonly statusCode: number;
	abstract readonly errors: customErrorContent[];
	abstract readonly logging: boolean;

	constructor(message: string) {
		super(message);

		Object.setPrototypeOf(this, customError.prototype);
	}
}
