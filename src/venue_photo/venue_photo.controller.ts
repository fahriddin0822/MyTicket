import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Obyektlarning rasmlari")
@Controller("venue-photo")
export class VenuePhotoController {
    constructor(private readonly venuePhotoService: VenuePhotoService) {}

    @Post("create")
    create(@Body() createVenuePhotoDto: CreateVenuePhotoDto) {
        console.log("create");
        return this.venuePhotoService.create(createVenuePhotoDto);
    }

    @Get("all")
    findAll() {
        return this.venuePhotoService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.venuePhotoService.findOne(+id);
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateVenuePhotoDto: UpdateVenuePhotoDto
    ) {
        return this.venuePhotoService.update(+id, updateVenuePhotoDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.venuePhotoService.remove(+id);
    }
}
