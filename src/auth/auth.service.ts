import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    // const passwordz = '!3v1d3nc3_SURF_b04rds_4dm1n?';
    // // Hash the users password
    // // Generate a salt
    // const salt = randomBytes(8).toString('hex');
    // // Hash the salt and the pw together
    // const hash = (await scrypt(passwordz, salt, 32)) as Buffer;
    // // Join the hashed result and the salt together
    // const result = salt + '.' + hash.toString('hex');
    // console.log(result);
    const user = await this.usersService.find(email);

    if (!user) throw new NotFoundException('User not found!');

    const [salt, storedHash] = user[0].password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Bad password!');
    }

    const payload = { sub: user.id, username: user.email };

    const res = {
      access_token: await this.jwtService.signAsync(payload),
      ok: true,
    };

    return res;
  }
}
