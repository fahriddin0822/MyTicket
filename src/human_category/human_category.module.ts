import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { HumanCategoryController } from "./human_category.controller";
import { HumanCategoryService } from "./human_category.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { HumanCategory } from "./models/human_category.model";
import { LoggerMiddleware } from "./middlewares/logger.middleware";

@Module({
    imports: [
        SequelizeModule.forFeature([HumanCategory]),
        SequelizeModule.forFeature([HumanCategory]),
    ],
    controllers: [HumanCategoryController],
    providers: [HumanCategoryService],
})
export class HumanCategoryModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes("human-category");
    }
}
