import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenuePhoto } from './models/venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(@InjectModel(VenuePhoto) private venue_photo_model: typeof VenuePhoto) {}
  create(createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venue_photo_model.create(createVenuePhotoDto);
  }

  findAll() {
    return this.venue_photo_model.findAll({include:{all:true}}) as Promise<VenuePhoto[]>;
  }

  findOne(id: number) {
    return this.venue_photo_model.findOne({where:{id}, include:{all:true}}) as Promise<VenuePhoto>;
  }

  update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
   return this.venue_photo_model.update(updateVenuePhotoDto, { where: { id } });
  }

  remove(id: number) {
    return this.venue_photo_model.destroy({ where: { id } }) as Promise<number>;
  }
}
