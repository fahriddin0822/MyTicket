import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';

@Injectable()
export class CustomerService {
    constructor(
        @InjectModel(Customer)
        private customerModel: typeof Customer
    ) {}
    create(createCustomerDto: CreateCustomerDto) {
        return this.customerModel.create(createCustomerDto);
    }

    findAll() {
        return this.customerModel.findAll({include:{all:true}});
    }

    findOne(id: number) {
        return `This action returns a #${id} customer`;
    }

    update(id: number, updateCustomerDto: UpdateCustomerDto) {
        return `This action updates a #${id} customer`;
    }

    remove(id: number) {
        return `This action removes a #${id} customer`;
    }
}
