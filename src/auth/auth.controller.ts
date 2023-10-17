import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async signIn(@Body() signInDto: Record<string, any>): Promise<object> {
    const logged = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );

    return logged;
  }
}
