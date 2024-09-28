import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from "sequelize-typescript";
import { EventType } from "../../event_type/models/event_type.model";
import { HumanCategory } from "../../human-category/models/human_category.model";
import { Language } from "../../language/models/language.model";
import { Ticket } from "../../ticket/models/ticket.model";
import { Venue } from "../../venue/models/venue.model";

interface IEventCreationAttr {
    name: string;
    photo: string;
    startDate: string;
    startTime: string;
    finishDate: string;
    finishTime: string;
    info: string;
    eventTypeId: number;
    humanCategoryId: number;
    venueId: number;
    langId: number;
    releaseDate: string;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, IEventCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    photo: string;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    startDate: string;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    startTime: string;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    finishDate: string;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    finishTime: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    info: string;

    @ForeignKey(() => EventType)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    eventTypeId: number;
    @BelongsTo(() => EventType)
    event_type: EventType;

    @ForeignKey(() => HumanCategory)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    humanCategoryId: number;
    @BelongsTo(() => HumanCategory)
    human_category: HumanCategory;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    venueId: number;
    @BelongsTo(() => Venue)
    venue: Venue;

    @ForeignKey(() => Language)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    langId: number;
    @BelongsTo(() => Language)
    language: Language;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    releaseDate: string;

    @HasMany(() => Ticket)
    tickets: Ticket[];
}
