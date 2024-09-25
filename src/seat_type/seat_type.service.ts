import { Injectable } from "@nestjs/common";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { SeatType } from "./models/seat_type.model";

@Injectable()
export class SeatTypeService {
    constructor(
        @InjectModel(SeatType) private seat_type_model: typeof SeatType
    ) {}
    create(createSeatTypeDto: CreateSeatTypeDto) {
        return this.seat_type_model.create(createSeatTypeDto);
    }

    findAll() {
        return this.seat_type_model.findAll({ include: { all: true } });
    }

    findOne(id: number) {
        return `This action returns a #${id} seatType`;
    }

    update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
        return `This action updates a #${id} seatType`;
    }

    remove(id: number) {
        return this.seat_type_model.destroy({ where: { id } });
    }
}
