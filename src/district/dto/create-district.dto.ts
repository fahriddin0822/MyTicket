import { IsNotEmpty, IsString } from "class-validator";

export class CreateDistrictDto {
    @IsString({ message: "String bo'lishi kerak" })
    @IsNotEmpty()
    name: string;
    regionId: number;
}
