import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
    @ApiProperty({
        example: "Customer",
        description: "Bu yerda Customer first_name kiritiladi",
    })
    first_name: string;
    @ApiProperty({
        example: "Customer",
        description: "Bu yerda Customer last_name kiritiladi",
    })
    last_name: string;
    @ApiProperty({
        example: "Customer",
        description: "Bu yerda Customer phone kiritiladi",
    })
    phone: string;
    @ApiProperty({
        example: "Customer",
        description: "Bu yerda Customer hashed_password kiritiladi",
    })
    hashed_password: string;
    @ApiProperty({
        example: "Customer",
        description: "Bu yerda Customer email kiritiladi",
    })
    email: string;
    @ApiProperty({
        example: "Customer",
        description: "Bu yerda Customer birth_date kiritiladi",
    })
    birth_date: string;
    @ApiProperty({
        example: "Customer",
        description: "Bu yerda Customer gender kiritiladi",
    })
    gender: number;
    @ApiProperty({
        example: "Customer",
        description: "Bu yerda Customer langId kiritiladi",
    })
    langId: number;
    @ApiProperty({
        example: "Customer",
        description: "Bu yerda Customer hashed_refresh_token kiritiladi",
    })
    hashed_refresh_token: string;
}
