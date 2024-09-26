import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Users } from "./models/users.model";
import { RolesService } from "src/roles/roles.service";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users) private usersModel: typeof Users,
        private readonly rolesServise: RolesService
    ) {}

    async create(createUserDto: CreateUserDto) {
        const newUser = await this.usersModel.create(createUserDto);
        const role = await this.rolesServise.findRoleByValue(
            createUserDto.role_value
        );

        if (!role) {
            throw new BadRequestException("Role not found");
        }

        await newUser.$set("roles", [role.id]);
        await newUser.save();
        newUser.roles = [role];

        return newUser;
    }

    findAll() {
        return this.usersModel.findAll({ include: { all: true } });
    }

    findUserByEmail(email: string) {
        return this.usersModel.findOne({ where: { email } });
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
