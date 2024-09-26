import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    HasOne,
    Model,
    Table,
} from "sequelize-typescript";
import { SeatType } from "src/seat_type/models/seat_type.model";
import { Ticket } from "src/ticket/models/ticket.model";
import { Venue } from "src/venue/models/venue.model";

interface ISeatCreationAttr {
    sector: number;
    rowNumber: number;
    number: number;
    venueId: number;
    seatTypeId: number;
    locationInSchema: string;
}

@Table({ tableName: "seat" })
export class Seat extends Model<Seat, ISeatCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
    })
    sector: number;

    @Column({
        type: DataType.INTEGER,
    })
    rowNumber: number;

    @Column({
        type: DataType.INTEGER,
    })
    number: number;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
    })
    venueId: number;

    @ForeignKey(() => SeatType)
    @Column({
        type: DataType.INTEGER,
    })
    seatTypeId: number;

    @Column({
        type: DataType.STRING,
    })
    locationInSchema: string;

    @BelongsTo(() => SeatType)
    seatType: SeatType;

    @BelongsTo(() => Venue)
    venue: Venue;

    @HasOne(() => Ticket)
    ticket: Ticket;
}
