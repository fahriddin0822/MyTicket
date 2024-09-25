import { Injectable } from "@nestjs/common";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { InjectModel } from "@nestjs/sequelize";
import { District } from "./models/district.model";

@Injectable()
export class DistrictService {
    constructor(@InjectModel(District) private distritModel: typeof District) {}

    create(createDistrictDto: CreateDistrictDto) {
        return this.distritModel.create(createDistrictDto);
    }

    findAll() {
        return this.distritModel.findAll({ include: { all: true } });
    }

    findOne(id: number) {
        return this.distritModel.findOne({
            where: { id },
            include: { all: true },
        });
    }

    update(id: number, updateDistrictDto: UpdateDistrictDto) {
        return this.distritModel.update(updateDistrictDto, {where:{id}, });
    }

    remove(id: number) {
        return this.distritModel.destroy({where:{id}});
    }
}
