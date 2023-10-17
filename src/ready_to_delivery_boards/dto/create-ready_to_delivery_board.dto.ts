import { IsJSON, IsObject, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateReadyToDeliveryBoardDto {
  @IsJSON()
  img: any;

  @IsString()
  type: string;

  @IsString()
  size: string;

  @IsString()
  width: string;

  @IsString()
  fluctuation: string;

  @IsString()
  volume: string;

  @IsString()
  block: string;
}
