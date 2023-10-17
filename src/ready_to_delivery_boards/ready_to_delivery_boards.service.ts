import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReadyToDeliveryBoardDto } from './dto/create-ready_to_delivery_board.dto';
import { UpdateReadyToDeliveryBoardDto } from './dto/update-ready_to_delivery_board.dto';
import { ready_to_delivery_boards } from './entities/ready_to_delivery_board.entity';
import { createClient } from '@supabase/supabase-js';
import { Database } from '../../lib/database.types';

@Injectable({ scope: Scope.REQUEST })
export class ReadyToDeliveryBoardsService {
  async create(createReadyToDeliveryBoardDto: CreateReadyToDeliveryBoardDto) {
    const supabaseUrl = 'https://fqdidtasapbenlxznosc.supabase.co';
    const supabaseKey =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZGlkdGFzYXBiZW5seHpub3NjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjkxNjgyOSwiZXhwIjoyMDA4NDkyODI5fQ.plqHiuGF1heVtvEw7r-NodIHKPvXrUwTA_3sTw3If7Y';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('ready_to_delivery_boards')
      .insert({
        type: createReadyToDeliveryBoardDto.type,
        size: createReadyToDeliveryBoardDto.size,
        width: createReadyToDeliveryBoardDto.width,
        fluctuation: createReadyToDeliveryBoardDto.fluctuation,
        volume: createReadyToDeliveryBoardDto.volume,
        block: createReadyToDeliveryBoardDto.block,
      })
      .select()
      .returns<UpdateReadyToDeliveryBoardDto>();

    return data;
  }

  async uploadCreatedBoardImgs(board, id) {
    const supabaseUrl = 'https://fqdidtasapbenlxznosc.supabase.co';
    const supabaseKey =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZGlkdGFzYXBiZW5seHpub3NjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjkxNjgyOSwiZXhwIjoyMDA4NDkyODI5fQ.plqHiuGF1heVtvEw7r-NodIHKPvXrUwTA_3sTw3If7Y';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('ready_to_delivery_boards')
      .update([board[0]])
      .eq('id', id)
      .returns<UpdateReadyToDeliveryBoardDto>();

    return data;
  }

  async findAll() {
    const supabaseUrl = 'https://fqdidtasapbenlxznosc.supabase.co';
    const supabaseKey =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZGlkdGFzYXBiZW5seHpub3NjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjkxNjgyOSwiZXhwIjoyMDA4NDkyODI5fQ.plqHiuGF1heVtvEw7r-NodIHKPvXrUwTA_3sTw3If7Y';
    const supabase = createClient<Database>(supabaseUrl, supabaseKey);

    const { data: boards, error } = await supabase
      .from('ready_to_delivery_boards')
      .select()
      .returns<UpdateReadyToDeliveryBoardDto>();

    return boards;
  }

  async findOne(id: number): Promise<UpdateReadyToDeliveryBoardDto> {
    const supabaseUrl = 'https://fqdidtasapbenlxznosc.supabase.co';
    const supabaseKey =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZGlkdGFzYXBiZW5seHpub3NjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjkxNjgyOSwiZXhwIjoyMDA4NDkyODI5fQ.plqHiuGF1heVtvEw7r-NodIHKPvXrUwTA_3sTw3If7Y';
    const supabase = createClient<Database>(supabaseUrl, supabaseKey);

    const { data: boards, error } = await supabase
      .from('ready_to_delivery_boards')
      .select()
      .eq('id', id)
      .returns<UpdateReadyToDeliveryBoardDto>();

    return boards;
  }

  async update(updateReadyToDeliveryBoardDto) {
    const supabaseUrl = 'https://fqdidtasapbenlxznosc.supabase.co';
    const supabaseKey =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZGlkdGFzYXBiZW5seHpub3NjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjkxNjgyOSwiZXhwIjoyMDA4NDkyODI5fQ.plqHiuGF1heVtvEw7r-NodIHKPvXrUwTA_3sTw3If7Y';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('ready_to_delivery_boards')
      .update([updateReadyToDeliveryBoardDto])
      .eq('id', updateReadyToDeliveryBoardDto.id)
      .returns<UpdateReadyToDeliveryBoardDto>();

    return data;
  }

  async remove(id: number) {
    const supabaseUrl = 'https://fqdidtasapbenlxznosc.supabase.co';
    const supabaseKey =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZGlkdGFzYXBiZW5seHpub3NjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjkxNjgyOSwiZXhwIjoyMDA4NDkyODI5fQ.plqHiuGF1heVtvEw7r-NodIHKPvXrUwTA_3sTw3If7Y';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from('ready_to_delivery_boards')
      .delete()
      .eq('id', id);

    console.log(error);
  }
}
