import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from './models/language.model';

@Injectable()
export class LanguageService {
  constructor(@InjectModel(Language) private languageModel: typeof Language){}
  create(createLanguageDto: CreateLanguageDto) {
    return this.languageModel.create(createLanguageDto);
  }

  findAll() {
    return `This action returns all language`;
  }

  findOne(id: number) {
    return `This action returns a #${id} language`;
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
