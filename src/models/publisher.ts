import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	DataTypes,
} from "sequelize";
import { sequelize } from "../database/database";

export class Publisher extends Model<
	InferAttributes<Publisher>,
	InferCreationAttributes<Publisher>
> {
	declare publisherId: CreationOptional<number>;
	declare name: string;
}
Publisher.init(
	{
		publisherId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		modelName: "Publisher",
		timestamps: false,
		sequelize: sequelize,
	}
);
