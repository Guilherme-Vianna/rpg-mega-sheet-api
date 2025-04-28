import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  const mockUserService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const createUserDto: CreateUserDto = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      };

      const expectedResult = {
        id: 1,
        email: 'test@example.com',
        name: 'Test User',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockUserService.create.mockResolvedValue(expectedResult);

      const result = await controller.create(createUserDto);
      expect(result).toEqual(expectedResult);
      expect(mockUserService.create).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const expectedResult = [
        {
          id: 1,
          email: 'test@example.com',
          name: 'Test User',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockUserService.findAll.mockResolvedValue(expectedResult);

      const result = await controller.findAll();
      expect(result).toEqual(expectedResult);
      expect(mockUserService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const expectedResult = {
        id: 1,
        email: 'test@example.com',
        name: 'Test User',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockUserService.findOne.mockResolvedValue(expectedResult);

      const result = await controller.findOne(1);
      expect(result).toEqual(expectedResult);
      expect(mockUserService.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const updateUserDto: UpdateUserDto = {
        name: 'Updated Name',
      };

      const expectedResult = {
        id: 1,
        email: 'test@example.com',
        name: 'Updated Name',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockUserService.update.mockResolvedValue(expectedResult);

      const result = await controller.update(1, updateUserDto);
      expect(result).toEqual(expectedResult);
      expect(mockUserService.update).toHaveBeenCalledWith(1, updateUserDto);
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      const expectedResult = {
        id: 1,
        email: 'test@example.com',
        name: 'Test User',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockUserService.remove.mockResolvedValue(expectedResult);

      const result = await controller.remove(1);
      expect(result).toEqual(expectedResult);
      expect(mockUserService.remove).toHaveBeenCalledWith(1);
    });
  });
}); 