import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users as users } from './users.entity';
import { Scope } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  async find(email: string): Promise<any> {
    const supabaseUrl = 'https://fqdidtasapbenlxznosc.supabase.co';
    const supabaseKey =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZGlkdGFzYXBiZW5seHpub3NjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjkxNjgyOSwiZXhwIjoyMDA4NDkyODI5fQ.plqHiuGF1heVtvEw7r-NodIHKPvXrUwTA_3sTw3If7Y';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: users, error } = await supabase
      .from('users')
      .select()
      .eq('id', 1);

    return users;
  }
}
