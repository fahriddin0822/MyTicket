import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { CustomValidationPipe } from "./pipes/validation.pipe";

async function start() {
    try {
        const PORT = process.env.PORT || 3030;
        const app = await NestFactory.create(AppModule);
        app.useGlobalPipes(new CustomValidationPipe)
        await app.listen(PORT, () => {
            console.log(`Server started at: ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();
