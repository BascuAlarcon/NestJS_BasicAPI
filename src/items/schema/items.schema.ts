/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemsDocument = Items & Document;

@Schema()
export class Items {
  @Prop({required: true})
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);
