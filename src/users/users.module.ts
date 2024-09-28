import { Module, forwardRef } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Users } from "./models/users.model";
import { UsersRoles } from "./models/users-role.model";
import { Roles } from "../roles/models/roles.model";
import { RolesModule } from "../roles/roles.module";

@Module({
    imports: [
        SequelizeModule.forFeature([Users, UsersRoles, Roles]),
        RolesModule, // import qilingan modulni ishlatish
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
