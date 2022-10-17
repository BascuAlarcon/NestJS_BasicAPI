import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  name: string;

  @IsInt()
  price: number;

  @IsNotEmpty()
  description: string;
}
