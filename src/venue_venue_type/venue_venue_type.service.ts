import { Injectable } from '@nestjs/common';
import { CreateVenueVenueTypeDto } from './dto/create-venue_venue_type.dto';
import { UpdateVenueVenueTypeDto } from './dto/update-venue_venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueVenueType } from './models/venue_venue_type.model';

@Injectable()
export class VenueVenueTypeService {
  constructor(@InjectModel(VenueVenueType) private venue_vuneu_type_model: typeof VenueVenueType ){}

  create(createVenueVenueTypeDto: CreateVenueVenueTypeDto) {
    return this.venue_vuneu_type_model.create(createVenueVenueTypeDto);
  }

  findAll() {
    return this.venue_vuneu_type_model.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return `This action returns a #${id} venueVenueType`;
  }

  update(id: number, updateVenueVenueTypeDto: UpdateVenueVenueTypeDto) {
    return `This action updates a #${id} venueVenueType`;
  }

  remove(id: number) {
    return `This action removes a #${id} venueVenueType`;
  }
}
