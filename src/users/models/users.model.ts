import {
    BelongsTo,
    BelongsToMany,
    BelongsToManyAssociation,
    Column,
    DataType,
    Model,
    Table,
} from "sequelize-typescript";
import { Roles } from "src/roles/models/roles.model";
import { UsersRoles } from "./users-role.model";

interface IUserCreationAttr {
    name: string;
    email: string;
    password: string;
    role_value: string;
    // is_active: boolean;
}

@Table({ tableName: "users" })
export class Users extends Model<Users, IUserCreationAttr> {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    role_value: string;


    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    is_active: boolean;


    @BelongsToMany(() => Roles, () => UsersRoles)
    roles: Roles[];
}
