import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const passwordValid = await this.userService.verifyPassword(email, password);

    if (!passwordValid) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };

    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '1d',
    });

    return {
      access_token: token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }
}
