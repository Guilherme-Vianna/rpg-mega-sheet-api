import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

describe('UserService Integration Tests', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  describe('create', () => {
    it('should create a user with hashed password', async () => {
      const createUserDto: CreateUserDto = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      };

      const result = await service.create(createUserDto);

      expect(result).toBeDefined();
      expect(result.email).toBe(createUserDto.email);
      expect(result.name).toBe(createUserDto.name);

      const userInDb = await prisma.user.findUnique({
        where: { email: createUserDto.email },
      });

      // Verifica se o usuário existe
      expect(userInDb).not.toBeNull();

      // Agora podemos fazer a verificação com segurança
      if (userInDb) {
        expect(userInDb.email).toBe(createUserDto.email);

        // Verifica se a senha foi hasheada
        const isPasswordValid = await bcrypt.compare(
          createUserDto.password,
          userInDb.password
        );
        expect(isPasswordValid).toBe(true);
      }
    });
  });

  describe('findAll', () => {
    it('should return all users', async () => {
      const user1 = await service.create({
        email: 'test1@example.com',
        password: 'password123',
        name: 'Test User 1',
      });

      const user2 = await service.create({
        email: 'test2@example.com',
        password: 'password123',
        name: 'Test User 2',
      });

      const result = await service.findAll();

      expect(result).toHaveLength(2);
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ email: user1.email }),
          expect.objectContaining({ email: user2.email }),
        ]),
      );
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const createdUser = await service.create({
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      });

      const result = await service.findOne(createdUser.id);

      expect(result).not.toBeNull();

      if (result) {
        expect(result.email).toBe(createdUser.email);
        expect(result.name).toBe(createdUser.name);
      }
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const createdUser = await service.create({
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      });

      const updateUserDto: UpdateUserDto = {
        name: 'Updated Name',
        password: 'newPassword',
      };

      const result = await service.update(createdUser.id, updateUserDto);

      expect(result).toBeDefined();
      expect(result.name).toBe(updateUserDto.name);

      const updatedUser = await prisma.user.findUnique({
        where: { id: createdUser.id },
      });

      expect(updatedUser).not.toBeNull();

      if (updatedUser && updateUserDto.password) {
        const isPasswordValid = await bcrypt.compare(
          updateUserDto.password,
          updatedUser.password
        );
        expect(isPasswordValid).toBe(true);
      }
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      const createdUser = await service.create({
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      });

      await service.remove(createdUser.id);

      const deletedUser = await prisma.user.findUnique({
        where: { id: createdUser.id },
      });

      expect(deletedUser).toBeNull();
    });
  });

  describe('verifyPassword', () => {
    it('should verify password correctly', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      await service.create({
        email,
        password,
        name: 'Test User',
      });

      const result = await service.verifyPassword(email, password);
      expect(result).toBe(true);
    });

    it('should return false if user not found', async () => {
      const result = await service.verifyPassword(
        'nonexistent@example.com',
        'password123',
      );
      expect(result).toBe(false);
    });
  });
});