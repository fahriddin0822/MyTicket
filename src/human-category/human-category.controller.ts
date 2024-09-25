import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from "@nestjs/common";
import { HumanCategoryService } from "./human-category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";

@Controller("human-category")
export class HumanCategoryController {
    constructor(
        private readonly human_category_service: HumanCategoryService
    ) {}

    @Post("create")
    async createHumanCategory(
        @Body() createHumanCategoryDto: CreateHumanCategoryDto
    ) {
        return this.human_category_service.createHumanCategory(
            createHumanCategoryDto
        );
    }

    @Get("all")
    async getAllHumanCategory() {
        return this.human_category_service.getAllHumanCategory();
    }

    @Get(":id")
    async getById(@Param("id") id: number) {
        return this.human_category_service.getById(id);
    }

    @Get("name/:name")
    async getHumanCategoryByName(@Param("name") name: string) {
        return this.human_category_service.getHumancategoryByName(name);
    }

    @Patch("update/:id")
    async updateHumanCategory(
        @Param("id") id: number,
        @Body() updateHumanCategoryDto: UpdateHumanCategoryDto
    ) {
        return this.human_category_service.updateHumanCategory(
            id,
            updateHumanCategoryDto
        );
    }

    @Delete("delete/:id")
    async deleteHumanCategory(@Param("id") id: number) {
        return this.human_category_service.deleteHumanCategory(id);
    }
}
