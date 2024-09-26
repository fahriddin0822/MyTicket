import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from "sequelize-typescript";
import { District } from "src/district/models/district.model";
import { Event } from "src/event/models/event.model";
import { Region } from "src/region/models/region.model";
import { Seat } from "src/seat/models/seat.model";
import { VenuePhoto } from "src/venue_photo/models/venue_photo.model";
import { VenueType } from "src/venue_type/models/venue_type.model";
import { VenueVenueType } from "src/venue_venue_type/models/venue_venue_type.model";

interface IVenueCreationAttr {
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    venueTypeId: number;
    schema: string[];
    regionId: number;
    districtId: number;
}

@Table({ tableName: "venue" })
export class Venue extends Model<Venue, IVenueCreationAttr> {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.STRING })
    name: string;

    @Column({ type: DataType.STRING })
    address: string;

    @Column({ type: DataType.STRING })
    location: string;

    @Column({ type: DataType.STRING })
    site: string;

    @Column({ type: DataType.STRING })
    phone: string;

    @Column({ type: DataType.INTEGER })
    venueTypeId: number;

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    schema: string[];

    @ForeignKey(() => Region)
    @Column({ type: DataType.INTEGER })
    regionId: number;

    @BelongsTo(() => Region, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    region: Region;

    @ForeignKey(() => District)
    @Column({ type: DataType.INTEGER })
    districtId: number;

    @BelongsTo(() => District)
    district: District;

    @HasMany(() => VenuePhoto)
    photos: VenuePhoto[];

    @HasMany(() => Seat)
    seats: Seat[];

    @BelongsToMany(() => VenueType, () => VenueVenueType)
    venue_types: VenueType[];

    // @HasMany(() => Event)
    // events: Event[];
}
