import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from "sequelize-typescript";
import { Cart } from "src/cart/models/cart.models";

interface IBookingCreationAttr {
    cartId: number;
    createdAt: number;
    finished: number;
    paymentMethodId: number;
    deliveryMethodId: number;
    discountCuponId: number;
    statusId: number;
}

@Table({ tableName: "booking" })
export class Booking extends Model<Booking, IBookingCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Cart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cartId: number;
    @BelongsTo(() => Cart)
    cart: Cart;

    @Column({
        type: DataType.INTEGER,
    })
    createdAt: number;

    @Column({
        type: DataType.INTEGER,
    })
    finished: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    paymentMethodId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    deliveryMethodId: number;

    @Column({
        type: DataType.INTEGER,
    })
    discountCuponId: number;

    @Column({
        type: DataType.INTEGER,
    })
    statusId: number;
}
