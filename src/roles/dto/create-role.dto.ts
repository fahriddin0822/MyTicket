import { IsNotEmpty, IsString } from "class-validator";
import { NotEmpty } from "sequelize-typescript";

export class CreateRoleDto {
    @IsString({ message: "String bo'lishi kerak" })
    @IsNotEmpty()
    value: string;
    @IsString({ message: "String bo'lishi kerak" })
    @IsNotEmpty()
    description: string;
}
