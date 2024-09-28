import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerAddress } from './models/customer_address.model';

@Injectable()
export class CustomerAddressService {
  constructor(@InjectModel(CustomerAddress) private customerAddress: typeof CustomerAddress){}
  create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddress.create(createCustomerAddressDto);
  }

  findAll() {
    return this.customerAddress.findAll({ include:{all:true}});
  }

  findOne(id: number) {
    return `This action returns a #${id} customerAddress`;
  }

  update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return `This action updates a #${id} customerAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerAddress`;
  }
}
