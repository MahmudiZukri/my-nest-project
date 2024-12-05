import { Inject, Injectable } from "@nestjs/common";
import { USER_REPOSITORY } from "src/constants";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";


@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) { }


  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }

  async createUser(createUser: CreateUserDto): Promise<User> {
    return await this.userRepository.create<User>(createUser);
  }
}