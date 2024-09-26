import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from "sequelize-typescript";
import { Users } from "./users.model";
import { Roles } from "src/roles/models/roles.model";

interface IUserRolesCreationAttr {
    userId: number;
    roleId: number;
}

@Table({ tableName: "users_roles" })
export class UsersRoles extends Model<UsersRoles, IUserRolesCreationAttr> {

    @ForeignKey(() => Users)
    @Column({ type: DataType.INTEGER })
    userId: number; 

    @ForeignKey(() => Roles)
    @Column({ type: DataType.INTEGER })
    roleId: number;
}
