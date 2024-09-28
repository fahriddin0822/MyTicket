import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueDto {
    @ApiProperty({
        example: "venue",
        description: "venue name",
    })
    name: string;
    @ApiProperty({
        example: "venue",
        description: "venue address",
    })
    address: string;
    
    location: string;
    site: string;
    phone: string;
    venueTypeId: number;
    schema: string[];
    regionId: number;
    districtId: number;
}
