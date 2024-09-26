import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({
        example: "user1",
        description: "Foydalanuvchining ismi",
    })
    name: string;
    @ApiProperty({
        example: "user1@gmail.com",
        description: "Foydalanuvchining emaili",
    })
    email: string;
    @ApiProperty({
        example: "Uzbek!$t0n ",
        description:
            "Foydalanuvchining paroli : ( katta harf, kichik hars, simvol, number)",
    })
    password: string;
    @ApiProperty({
        example: "USER",
        description:
            "Foydalanuvchiga berilayotgan dastlabki rol",
    })
    role_value: string;
}
