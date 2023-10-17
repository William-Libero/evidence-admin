import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  HttpStatus,
  UseGuards,
  Delete,
  Param,
  Patch,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ReadyToDeliveryBoardsService } from './ready_to_delivery_boards.service';
import { CreateReadyToDeliveryBoardDto } from './dto/create-ready_to_delivery_board.dto';
import { UpdateReadyToDeliveryBoardDto } from './dto/update-ready_to_delivery_board.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('readyToDeliveryBoards')
export class ReadyToDeliveryBoardsController {
  constructor(
    private readonly readyToDeliveryBoardsService: ReadyToDeliveryBoardsService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('/addBoard')
  async create(
    @Res() response,
    @Body() createReadyToDeliveryBoardDto: CreateReadyToDeliveryBoardDto,
  ) {
    try {
      createReadyToDeliveryBoardDto.img = 'null';

      const board = await this.readyToDeliveryBoardsService.create(
        createReadyToDeliveryBoardDto,
      );
      response.status(HttpStatus.OK).json({
        board,
      });

      return board[0];
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @UseGuards(AuthGuard)
  @Post('/uploadCreatedBoardImgs/:id')
  @UseInterceptors(FilesInterceptor('files'))
  async upload(
    @Res() response,
    @UploadedFiles() files: Express.Multer.File,
    @Param('id') id: number,
  ) {
    try {
      const base64BufferArray = [];
      for (const [, value] of Object.entries(files)) {
        for (const [key1, value1] of Object.entries(value)) {
          if (key1 === 'buffer') {
            const base64Buffer = Buffer.from(value1 as Buffer).toString(
              'base64',
            );
            base64BufferArray.push(base64Buffer);
          }
        }
      }

      const board = await this.readyToDeliveryBoardsService.findOne(id);
      board[0].img = '';
      board[0].img2 = '';
      board[0].img3 = '';
      board[0].img4 = '';
      board[0].img5 = '';
      board[0].img6 = '';
      board[0].img7 = '';
      board[0].img8 = '';

      response.status(HttpStatus.OK).json({
        board,
      });

      // eslint-disable-next-line prefer-const, no-var
      base64BufferArray.forEach((img, i) => {
        switch (i) {
          case 0:
            board[0].img = img;
            break;
          case 1:
            board[0].img2 = img;
            break;
          case 2:
            board[0].img3 = img;
            break;
          case 3:
            board[0].img4 = img;
            break;
          case 4:
            board[0].img5 = img;
            break;
          case 5:
            board[0].img6 = img;
            break;
          case 6:
            board[0].img7 = img;
            break;
          case 7:
            board[0].img8 = img;
            break;
        }
      });

      return await this.readyToDeliveryBoardsService.uploadCreatedBoardImgs(
        board,
        id,
      );
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @UseGuards(AuthGuard)
  @Get('/boards')
  async findAll(@Res() response) {
    try {
      const boards = await this.readyToDeliveryBoardsService.findAll();
      response.status(HttpStatus.OK).json({
        boards,
      });
      return boards;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @UseGuards(AuthGuard)
  @Get('/board/:id')
  async findOne(@Res() response, @Param('id') boardId: number) {
    try {
      const board = await this.readyToDeliveryBoardsService.findOne(boardId);
      response.status(HttpStatus.OK).json({
        board,
      });

      return board;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @UseGuards(AuthGuard)
  @Patch('/editBoard')
  async update(
    @Res() response,
    @Param('id') id: number,
    @Body() updateReadyToDeliveryBoardDto: UpdateReadyToDeliveryBoardDto,
  ) {
    try {
      let board = await this.readyToDeliveryBoardsService.findOne(id);
      response.status(HttpStatus.OK).json({
        board,
      });
      board = updateReadyToDeliveryBoardDto;

      return this.readyToDeliveryBoardsService.update(board);
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @UseGuards(AuthGuard)
  @Delete('/deleteBoard/:id')
  remove(@Res() response, @Param('id') boardId: number) {
    try {
      const deletedBoard = this.readyToDeliveryBoardsService.remove(boardId);

      response.status(HttpStatus.OK).json({
        deletedBoard,
      });
      return deletedBoard;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
