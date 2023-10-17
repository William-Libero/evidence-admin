/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';
import { AfterInsert, AfterRemove, AfterUpdate } from 'typeorm';

export class UpdateReadyToDeliveryBoardDto {
  @IsNumber()
  id: number;

  @IsString()
  img: any;

  @IsString()
  img2: any;

  @IsString()
  img3: any;

  @IsString()
  img4: any;

  @IsString()
  img5: any;

  @IsString()
  img6: any;

  @IsString()
  img7: any;

  @IsString()
  img8: any;

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

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemoved() {
    console.log('Removed User with id', this.id);
  }
}
