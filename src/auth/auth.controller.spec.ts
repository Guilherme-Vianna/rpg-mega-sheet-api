import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

describe('AuthController (integração)', () => {
  let authController: AuthController;
  let userService: UserService;
  let prismaService: PrismaService;
  let jwtService: JwtService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      controllers: [AuthController],
      providers: [UserService, PrismaService, JwtService],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    userService = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  beforeEach(async () => {
    // Limpa a tabela user antes de cada teste
    await prismaService.users.deleteMany();
  });

  afterAll(async () => {
    await prismaService.$disconnect();
  });

  describe('login', () => {
    it('deve fazer login e retornar token e usuário', async () => {
      const email = 'testuser@example.com';
      const password = 'testpassword123';

      // Cria usuário real no banco
      await userService.create({
        email,
        password,
        name: 'Test User',
      });

      const result = await authController.login(email, password);

      expect(result).toHaveProperty('access_token');
      expect(result).toHaveProperty('user');
      expect(result.user.email).toBe(email);

      // opcional: validar o token
      const decoded = jwtService.verify(result.access_token, {
        secret: process.env.JWT_SECRET,
      });
      expect(decoded.email).toBe(email);
    });

    it('deve lançar UnauthorizedException para usuário inexistente', async () => {
      await expect(
        authController.login('wronguser@example.com', 'password123'),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('deve lançar UnauthorizedException para senha errada', async () => {
      const email = 'anotheruser@example.com';
      const password = 'correctpassword';

      await userService.create({
        email,
        password,
        name: 'Another User',
      });

      await expect(
        authController.login(email, 'wrongpassword'),
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});
