import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
    BelongsTo,
} from "sequelize-typescript";
import { Country } from "../../country/models/country.model";
import { Customer } from "../../customer/models/customer.model";
import { District } from "../../district/models/district.model";
import { Region } from "../../region/models/region.model";


interface ICustomerAddressAttr {
    customerId: number;
    name: string;
    countryId: number;
    regionId: number;
    districtId: number;
    street: string;
    house: string;
    flat: number;
    location: string;
    postIndex: number;
    info: string;
}

@Table({ tableName: "customer_address" })
export class CustomerAddress extends Model<
    CustomerAddress,
    ICustomerAddressAttr
> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    customerId: number;

    @BelongsTo(() => Customer)
    customer: Customer;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @ForeignKey(() => Country)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    countryId: number;
    @BelongsTo(() => Country)
    country: Country;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    regionId: number;
    @BelongsTo(() => Region)
    region: Region;

    @ForeignKey(() => District)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    districtId: number;

    @BelongsTo(() => District)
    district: District;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    street: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    house: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    flat: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    location: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    postIndex: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    info: string;
}
