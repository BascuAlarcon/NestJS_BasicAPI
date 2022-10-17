import { Items, ItemsDocument } from './schema/items.schema';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Model } from 'mongoose';
export declare class ItemsService {
    private ItemsModule;
    constructor(ItemsModule: Model<ItemsDocument>);
    create(createItemDto: CreateItemDto): Promise<Items & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(Items & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: number): string;
    update(id: number, updateItemDto: UpdateItemDto): string;
    remove(id: number): string;
}
