import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UsersRoles } from "../../users/models/users-role.model";
import { Users } from "../../users/models/users.model";

interface IRolesCreationAttr {
    value: string;
    description: string;
}

@Table({ tableName: "roles", timestamps: false })
export class Roles extends Model<Roles, IRolesCreationAttr> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER
    })
    id: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    value: string;

    @Column({
        type: DataType.STRING
    })
    description: string;

    @BelongsToMany(() => Users, () => UsersRoles)
    users: Users[];
}
