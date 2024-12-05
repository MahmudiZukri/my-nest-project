import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, InternalServerErrorException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }


  @Get()
  public async getUsers(): Promise<User[]> {
    return this.userService.getAllUsers()
  }

  @Post()
  public async createUser(@Body(new ValidationPipe()) body: CreateUserDto): Promise<User> {
    try {
      return await this.userService.createUser(body);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create user', error.message);
    }
  }
}
