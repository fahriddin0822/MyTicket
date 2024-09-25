import { Injectable } from "@nestjs/common";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenueType } from "./models/venue_type.model";

@Injectable()
export class VenueTypeService {
    constructor(
        @InjectModel(VenueType) private venue_type_model: typeof VenueType
    ) {}
    create(createVenueTypeDto: CreateVenueTypeDto) {
        return this.venue_type_model.create(createVenueTypeDto);
    }

    findAll() {
        return this.venue_type_model.findAll({ include: { all: true } });
    }

    findOne(id: number) {
        return `This action returns a #${id} venueType`;
    }

    update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
        return `This action updates a #${id} venueType`;
    }

    remove(id: number) {
        return `This action removes a #${id} venueType`;
    }
}
