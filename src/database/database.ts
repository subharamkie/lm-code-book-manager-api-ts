import { Dialect, Sequelize } from "sequelize";

// TODO: This should be external config
export let sequelize = new Sequelize("sqlite::memory:");
const connString = `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
console.log(connString);
if (process.env.NODE_ENV !== "test") {
	//sequelize = new Sequelize(connString);
	sequelize = new Sequelize(
		process.env.DB_NAME ?? "MISSING_DB_NAME_CONFIG",

		process.env.DB_USERNAME ?? "MISSING_DB_USERNAME_CONFIG",

		process.env.DB_PASSWORD ?? "MISSING_DB_PASSWORD_CONFIG",
		{
			host: process.env.DB_HOST ?? "MISSING_DB_HOST_CONFIG",
			port: parseInt(process.env.DB_PORT as string) ?? "MISSING_DB_PORT_CONFIG",
			dialect: (process.env.DB_DIALECT as Dialect) ?? "postgres",
		}
	);
}
