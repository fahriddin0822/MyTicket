import {
    Body,
    Controller,
    Param,
    Post,
    Get,
    Delete,
    Patch,
    Query,
} from "@nestjs/common";
import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";

@Controller("human-category")
export class HumanCategoryController {
    constructor(private readonly humanCategoryServise: HumanCategoryService) {}

    @Post("create")
    async createHumanCategory(
        @Body() createHumanCategoryDto: CreateHumanCategoryDto
    ) {
        return this.humanCategoryServise.createHumanCategory(
            createHumanCategoryDto
        );
    }

    @Get("all")
    async getAllHumanCategories() {
        return this.humanCategoryServise.getAllHumanCategories();
    }

    @Get("name/:name")
    async getHumanCategoryByName(@Param("name") name: string) {
        return this.humanCategoryServise.getHumanCategoryByName(name);
    }

    @Get("search")
    async getHumanCategoryByNameInQuery(@Query("name") name: string) {
        return this.humanCategoryServise.getHumanCategoryByNameInQuery(name);
    }

    @Get("id/:id")
    async getHumanCategoryById(@Param("id") id: number) {
        return this.humanCategoryServise.getHumanCategoryById(id);
    }

    @Delete("delete/:id")
    async deleteHumanCategory(@Param("id") id: number) {
        return this.humanCategoryServise.deleteHumanCategory(id);
    }

    @Patch("update/:id")
    async updateHumanCategory(
        @Param("id") id: number,
        @Body() updateHumanCategoryDto: UpdateHumanCategoryDto
    ) {
        return this.humanCategoryServise.updateHumanCategory(
            id,
            updateHumanCategoryDto
        );
    }
}
