import { Module } from '@nestjs/common';
import { ReadyToDeliveryBoardsService } from './ready_to_delivery_boards.service';
import { ReadyToDeliveryBoardsController } from './ready_to_delivery_boards.controller';

@Module({
  controllers: [ReadyToDeliveryBoardsController],
  providers: [ReadyToDeliveryBoardsService],
})
export class ReadyToDeliveryBoardsModule {}
