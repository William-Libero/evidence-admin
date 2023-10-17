/* eslint-disable prettier/prettier */
import { IsInt } from 'class-validator';

export class FindOneUserDto {
  @IsInt()
  id: number;
}
