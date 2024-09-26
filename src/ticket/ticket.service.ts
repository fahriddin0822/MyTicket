import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Ticket } from "./models/ticket.model";

@Injectable()
export class TicketService {
    constructor(@InjectModel(Ticket) private ticketModel: typeof Ticket) {}

    create(createTicketDto: CreateTicketDto) {
        return this.ticketModel.create(createTicketDto);
    }

    findAll() {
        return this.ticketModel.findAll({ include: { all: true } });
    }

    findOne(id: number) {
        return `This action returns a #${id} ticket`;
    }

    update(id: number, updateTicketDto: UpdateTicketDto) {
        return `This action updates a #${id} ticket`;
    }

    remove(id: number) {
        return `This action removes a #${id} ticket`;
    }
}
