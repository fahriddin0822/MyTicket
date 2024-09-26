import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CustomerAddress } from "src/customer_address/models/customer_address.model";

interface ICountryCreationAttr {
    name: string;
}

@Table({ tableName: "country" })
export class Country extends Model<Country, ICountryCreationAttr> {
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

    @HasMany(() => CustomerAddress)
    customerAddresses: CustomerAddress[];
}
