import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { HumanCategoryModule } from "./human-category/human-category.module";
import { HumanCategory } from "./human-category/models/human_category.model";
import { VenueModule } from "./venue/venue.module";
import { Venue } from "./venue/models/venue.model";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { VenuePhoto } from "./venue_photo/models/venue_photo.model";
import { EventModule } from "./event/event.module";
import { RegionModule } from "./region/region.module";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { Region } from "./region/models/region.model";
import { DistrictModule } from "./district/district.module";
import { District } from "./district/models/district.model";
import { SeatModule } from "./seat/seat.module";
import { SeatType } from "./seat_type/models/seat_type.model";
import { Seat } from "./seat/models/seat.model";
import { VenueVenueTypeModule } from "./venue_venue_type/venue_venue_type.module";
import { VenueVenueType } from "./venue_venue_type/models/venue_venue_type.model";
import { VenueType } from "./venue_type/models/venue_type.model";
import { RolesModule } from "./roles/roles.module";
import { Roles } from "./roles/models/roles.model";
import { UsersModule } from './users/users.module';
import { Users } from "./users/models/users.model";
import { UsersRoles } from "./users/models/users-role.model";
import { Event } from "./event/entities/event.entity";

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [
                HumanCategory,
                Venue,
                VenuePhoto,
                Region,
                District,
                SeatType,
                Seat,
                VenueVenueType,
                VenueType,
                // Roles,
                // Users,
                // UsersRoles,
                // Event
            ],
            autoLoadModels: true,
            sync: { alter: true },
            logging: true,
            synchronize: true,
        }),
        HumanCategoryModule,
        VenueModule,
        VenuePhotoModule,
        // EventModule,
        RegionModule,
        SeatTypeModule,
        VenueTypeModule,
        DistrictModule,
        SeatModule,
        VenueVenueTypeModule,
        // RolesModule,
        // UsersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
