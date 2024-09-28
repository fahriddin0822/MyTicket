import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from "sequelize-typescript";
import { Region } from "../../region/models/region.model";
import { Venue } from "../../venue/models/venue.model";

interface IDistrictCreationAttr {
    name: string;
    regionId: number;
}

@Table({ tableName: "district" })
export class District extends Model<District, IDistrictCreationAttr> {
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

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    regionId: number;

    @BelongsTo(() => Region)
    region: Region;

    @HasMany(() => Venue)
    venues: Venue[];
}
