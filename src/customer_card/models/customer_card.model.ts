import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "src/customer/models/customer.model";

interface ICustomerCardCreationAttr {
    customerId: number;
    name: string;
    phone: string;
    number: number;
    year: number;
    month: number;
    isActive: boolean;
    isMain: boolean;
}

@Table({ tableName: "customer_card" })
export class CustomerCard extends Model<
    CustomerCard,
    ICustomerCardCreationAttr
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
    })
    customerId: number;
    @BelongsTo(() => Customer)
    customer: Customer;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @Column({
        type: DataType.STRING,
    })
    phone: string;

    @Column({
        type: DataType.INTEGER,
    })
    number: number;

    @Column({
        type: DataType.INTEGER,
    })
    year: number;

    @Column({
        type: DataType.INTEGER,
    })
    month: number;

    @Column({
        type: DataType.BOOLEAN,
    })
    isActive: boolean;

    @Column({
        type: DataType.BOOLEAN,
    })
    isMain: boolean;
}
