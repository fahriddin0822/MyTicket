import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
    @ApiProperty({
        example: "SignIn",
        description: "Bu yerda SignIn email kiritiladi",
    })
    readonly email: string;
    @ApiProperty({
        example: "SignIn",
        description: "Bu yerda SignIn password kiritiladi",
    })
    readonly password: string;
}