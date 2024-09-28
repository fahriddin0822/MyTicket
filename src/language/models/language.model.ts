import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";

interface ILanguageCreationAttr{
    name: string;
}

@Table({ tableName: "language" })
export class Language extends Model<Language, ILanguageCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    name: string;

    @HasMany(() => Event)
    events: Event[];
}

