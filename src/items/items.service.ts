import { InjectModel } from '@nestjs/mongoose';
import { Items, ItemsDocument } from './schema/items.schema';
import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Items.name) private ItemsModule: Model<ItemsDocument>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const itemCreated = await this.ItemsModule.create(createItemDto);
    return itemCreated;
  }

  async findAll() {
    const list = await this.ItemsModule.find({});
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
