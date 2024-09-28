import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.models";
import { Event } from "../../event/models/event.model";
import { Seat } from "../../seat/models/seat.model";

interface ITiketCreationAttr {
    eventId: number;
    seatId: number;
    price: number;
    serviceFee: number;
    statusId: number;
    ticketType: number;
}

@Table({ tableName: "tickets" })
export class Ticket extends Model<Ticket, ITiketCreationAttr> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(()=>Event)
    @Column({ type: DataType.INTEGER })
    eventId: number;
    @BelongsTo(() => Event)
    event: Event;

    @ForeignKey(()=>Seat)
    @Column({ type: DataType.INTEGER })
    seatId: number;
    @BelongsTo(() => Seat)
    seat: Seat;

    @Column({ type: DataType.INTEGER })
    price: number;

    @Column({ type: DataType.INTEGER })
    serviceFee: number;

    @Column({ type: DataType.INTEGER })
    statusId: number;

    @Column({ type: DataType.INTEGER })
    ticketType: number;

    @HasOne(() => Cart)
    cart: Cart;
}
