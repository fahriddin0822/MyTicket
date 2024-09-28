import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.models";
import { CustomerCard } from "../../customer_card/models/customer_card.model";

interface ICustomerCreationAttr {
    first_name: string;
    last_name: string;
    phone: string;
    hashed_password: string;
    email: string;
    birth_date: string;
    gender: number;
    langId: number;
    hashed_refresh_token: string;
}

@Table({ tableName: "customer" })
export class Customer extends Model<Customer, ICustomerCreationAttr> {
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
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    phone: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    hashed_password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email: string;

    @Column({
        type: DataType.DATEONLY,
        allowNull: true,
    })
    birth_date: string;

    @Column({
        type: DataType.SMALLINT,
        allowNull: false,
    })
    gender: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    langId: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    hashed_refresh_token: string;

    @HasMany(() => Cart)
    carts: Cart[];

    @HasMany(() => CustomerCard)
    cards: CustomerCard[];
}
