import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { NotEmpty } from "sequelize-typescript";

export class CreateRoleDto {
    @ApiProperty({
        example: "ADMIN",
        description: "Bu yerda role lar kiritiladi",
    })
    @IsString({ message: "String bo'lishi kerak" })
    @IsNotEmpty()
    value: string;

    @ApiProperty({
        example: "ADMIN roli ma'lumotlari",
        description: "Bu yerda role lar bo'yicha to'liq ma'lumot yoziladi",
    })
    @IsString({ message: "String bo'lishi kerak" })
    @IsNotEmpty()
    description: string;
}
