import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
import { Venue } from "../../venue/models/venue.model";

interface IRegionCreationAttributes {
    name: string;
}

@Table({ tableName: "region", timestamps: false })
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
