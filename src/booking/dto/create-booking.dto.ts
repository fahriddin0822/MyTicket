import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingDto {
    @ApiProperty({
        example: "Booking",
        description: "Bu yerda Booking card id kiritiladi",
    })
    cartId: number;
    @ApiProperty({
        example: "Booking",
        description: "Bu yerda Booking createdAt kiritiladi",
    })
    createdAt: number;
    @ApiProperty({
        example: "Booking",
        description: "Bu yerda Booking finished kiritiladi",
    })
    finished: number;
    @ApiProperty({
        example: "Booking",
        description: "Bu yerda Booking paymentMethodId kiritiladi",
    })
    paymentMethodId: number;
    @ApiProperty({
        example: "Booking",
        description: "Bu yerda Booking deliveryMethodId kiritiladi",
    })
    deliveryMethodId: number;
    @ApiProperty({
        example: "Booking",
        description: "Bu yerda Booking discountCuponId kiritiladi",
    })
    discountCuponId: number;
    @ApiProperty({
        example: "Booking",
        description: "Bu yerda Booking statusId kiritiladi",
    })
    statusId: number;
}

