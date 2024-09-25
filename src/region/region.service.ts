import { Injectable } from "@nestjs/common";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Region } from "./models/region.model";

@Injectable()
export class RegionService {
    constructor(@InjectModel(Region) private regionModel: typeof Region) {}

    create(createRegionDto: CreateRegionDto) {
        return this.regionModel.create(createRegionDto);
    }

    findAll() {
        return this.regionModel.findAll({ include: { all: true } });
    }

    findOne(id: number) {
        return this.regionModel.findByPk(id, { include: { all: true } });
    }

    update(id: number, updateRegionDto: UpdateRegionDto) {
        return `This action updates a #${id} region`;
    }

    remove(id: number) {
        return this.regionModel.destroy({where:{id}});
    }
}
