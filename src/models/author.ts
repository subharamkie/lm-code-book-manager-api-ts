import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	DataTypes,
} from "sequelize";
import { sequelize } from "../database/database";
import { Publisher } from "./publisher";
import { Book } from "./book";

export class Author extends Model<
	InferAttributes<Author>,
	InferCreationAttributes<Author>
> {
	declare authorId: CreationOptional<number>;
	declare firstName: string;
	declare lastName: string;
	declare publisherId: number;
	declare bookId: number;
}

Author.init(
	{
		authorId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		publisherId: {
			type: DataTypes.INTEGER,
			references: {
				model: Publisher,
				key: "publisherId",
			},
		},
		bookId: {
			type: DataTypes.INTEGER,
			references: {
				model: Book,
				key: "bookId",
			},
		},
	},
	{
		modelName: "Author",
		timestamps: false,
		sequelize: sequelize,
	}
);
//Author.hasMany(Book, { foreignKey: "authorId" });
