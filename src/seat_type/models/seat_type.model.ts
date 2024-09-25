import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Seat } from "src/seat/models/seat.model";

interface ISeatType {
    name: string;
}

@Table({ tableName: "seat_type" })
export class SeatType extends Model<SeatType, ISeatType> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;
    @Column({
        type: DataType.STRING,
    })
    name: string;

    @HasMany(() => Seat)
    seats: Seat[];
}
