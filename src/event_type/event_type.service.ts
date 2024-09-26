import { Injectable } from "@nestjs/common";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { EventType } from "./models/event_type.model";

@Injectable()
export class EventTypeService {
    constructor(
        @InjectModel(EventType) private eventTypeModel: typeof EventType
    ) {}

    create(createEventTypeDto: CreateEventTypeDto) {
        return this.eventTypeModel.create(createEventTypeDto);
    }

    findAll() {
        return this.eventTypeModel.findAll({ include: { all: true } });
    }

    findOne(id: number) {
        return `This action returns a #${id} eventType`;
    }

    update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
        return `This action updates a #${id} eventType`;
    }

    remove(id: number) {
        return `This action removes a #${id} eventType`;
    }
}
