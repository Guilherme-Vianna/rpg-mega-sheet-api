import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  controllers: [AuthController],
  providers: [UserService],
})
export class AuthModule { }
