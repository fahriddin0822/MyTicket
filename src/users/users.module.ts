import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './models/users.model';
import { UsersRoles } from './models/users-role.model';
import { Roles } from 'src/roles/models/roles.model';

@Module({
  imports:[SequelizeModule.forFeature([Users, UsersRoles, Roles])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
