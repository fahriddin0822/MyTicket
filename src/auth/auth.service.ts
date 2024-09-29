import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { Users } from "../users/models/users.model";
import * as bcrypt from "bcryptjs";
import { SignInDto } from "./dto/signIn.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async signUp(createUserDto: CreateUserDto) {
        const candidate = await this.userService.findUserByEmail(
            createUserDto.email
        );

        if (candidate) {
            throw new BadRequestException("Bunday foydalanuvchi mavjud");
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
        const newUser = await this.userService.create({
            ...createUserDto,
            password: hashedPassword,
        });

        // return this.generateToken(newUser);
        return newUser;
    }

    async signIn(signInDto: SignInDto) {
        const user = await this.userService.findUserByEmail(signInDto.email);
        console.log(user.password);
        
        if (!user) {
            throw new UnauthorizedException("User not found")
        }

        const validPassword = await bcrypt.compare(signInDto.password, user.password);
        if (!validPassword) {
            throw new UnauthorizedException("User not found");
        }
        return this.generateToken(user);
    }

    async generateToken(user: Users) {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.roles,
        };

        return this.jwtService.sign(payload);
    }
}
