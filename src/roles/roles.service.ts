import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Roles } from "./models/roles.model";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Roles) private roles_model: typeof Roles) {}

    create(createRoleDto: CreateRoleDto) {
        return this.roles_model.create({
            // ...createRoleDto,
            value: createRoleDto.value.toUpperCase(),
            description: createRoleDto.description
        });
    }

    findAll() {
        return this.roles_model.findAll({ include: { all: true } });
    }

    findOne(id: number) {
        return `This action returns a #${id} role`;
    }

    findRoleByValue(value: string) {
        return this.roles_model.findOne({ where: { value: value.toUpperCase() } });
    }

    update(id: number, updateRoleDto: UpdateRoleDto) {
        return `This action updates a #${id} role`;
    }

    remove(id: number) {
        return `This action removes a #${id} role`;
    }
}
