import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import { Users } from "src/users/models/users.model";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { SignInDto } from "./dto/signIn.dto";

@ApiTags("AUTH")
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ summary: "Yangi foydalanuvchini ro'yhatdan o'tkazish." })
    @Post("signup")
    async signUp(@Body() createUserDto: CreateUserDto) {
        return this.authService.signUp(createUserDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post("signin")
    async signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto);
    }
}
