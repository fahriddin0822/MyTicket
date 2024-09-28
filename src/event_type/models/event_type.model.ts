import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";

interface IEventType {
    name: string;
    parentEventTypeId?: number;
}

@Table({ tableName: "event-type" })
export class EventType extends Model<EventType, IEventType> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    parentEventTypeId?: number;

    @HasMany(() => Event)
    events: Event[];
}
