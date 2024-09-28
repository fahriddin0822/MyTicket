import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VenueVenueType } from "../../venue_venue_type/models/venue_venue_type.model";

interface IVenueTypeCreationAttr {
    name: string;
}

@Table({ tableName: "venue_type", timestamps: false })
export class VenueType extends Model<VenueType, IVenueTypeCreationAttr> {
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

    @BelongsToMany(() => Venue, () => VenueVenueType)
    venues: Venue[];
}
