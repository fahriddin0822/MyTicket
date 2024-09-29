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
import { Event } from "./event/models/event.model";
import { TicketModule } from './ticket/ticket.module';
import { EventTypeModule } from './event_type/event_type.module';
import { LanguageModule } from './language/language.module';
import { AuthModule } from './auth/auth.module';
import { EventType } from "./event_type/models/event_type.model";
// import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { Customer } from "./customer/models/customer.model";
import { Ticket } from "./ticket/models/ticket.model";
import { CountryModule } from './country/country.module';
import { Booking } from "./booking/models/booking.model";
import { Cart } from "./cart/models/cart.models";
import { Country } from "./country/models/country.model";
import { CustomerAddress } from "./customer_address/models/customer_address.model";
import { CustomerCard } from "./customer_card/models/customer_card.model";
import { Language } from "./language/models/language.model";

@Module({
    imports: [
        // ServeStaticModule.forRoot({
        //     rootPath:join(__dirname, "static")
        // }),
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
                Roles,
                Users,
                UsersRoles,
                Event,
                EventType,
                Customer,
                Ticket,
                Booking,
                Cart,
                Country,
                CustomerAddress,
                CustomerCard,
                Language,
                
            ],
            autoLoadModels: true,
            sync: { alter: true },
            logging: true,
            synchronize: true,
        }),
        HumanCategoryModule,
        VenueModule,
        VenuePhotoModule,
        EventModule,
        RegionModule,
        SeatTypeModule,
        VenueTypeModule,
        DistrictModule,
        SeatModule,
        VenueVenueTypeModule,
        TicketModule,
        RolesModule,
        UsersModule,
        EventTypeModule,
        LanguageModule,
        AuthModule,
        CountryModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
