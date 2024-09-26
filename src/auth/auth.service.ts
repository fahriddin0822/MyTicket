import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async signUp(createUserDto: CreateUserDto) {
        const candidate = await this.userService.findUserByEmail(
            createUserDto.email
        );
    }
}
