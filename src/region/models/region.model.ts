import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "src/district/models/district.model";
import { Venue } from "src/venue/models/venue.model";

interface IRegionCreationAttributes {
    name: string;
}

@Table({ tableName: "region", timestamps: true })
export class Region extends Model<Region, IRegionCreationAttributes> {
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

    @HasMany(() => Venue)
    venues: Venue[];

    @HasMany(() => District)
    districts: District[];
}
