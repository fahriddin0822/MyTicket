export class CreateCustomerAddressDto {
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
