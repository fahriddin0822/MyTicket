import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: "MySecretKey",
            signOptions: { expiresIn: "1h" },
        }),
        UsersModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtService],
    exports: [JwtService],
})
export class AuthModule {}
