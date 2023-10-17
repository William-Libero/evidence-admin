import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constant';
import { UsersService } from 'src/users/users.service';
import { ReadyToDeliveryBoardsModule } from '../ready_to_delivery_boards/ready_to_delivery_boards.module';

@Module({
  imports: [
    UsersModule,
    ReadyToDeliveryBoardsModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
  exports: [AuthService, UsersService],
})
export class AuthModule {}
