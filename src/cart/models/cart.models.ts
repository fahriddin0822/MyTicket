import { Router } from "express";
import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from "sequelize-typescript";
import { Booking } from "../../booking/models/booking.model";
import { Customer } from "../../customer/models/customer.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface ICartCreationAttr {
    ticketId: number;
    customerId: number;
    statusId: number;
}

@Table({ tableName: "cart" })
export class Cart extends Model<Cart, ICartCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Ticket)
    @Column({ type: DataType.INTEGER })
    ticketId: number;
    @BelongsTo(() => Ticket)
    ticket: Ticket;

    @ForeignKey(() => Customer)
    @Column({ type: DataType.INTEGER })
    customerId: number;
    customer: Customer;

    @Column({ type: DataType.INTEGER })
    statusId: number;

    @Column({
        type: DataType.INTEGER,
    })
    createdAt: number;

    @Column({
        type: DataType.INTEGER,
    })
    finished: number;

    @HasMany(() => Booking)
    bookings: Booking[];
}
