import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  getAll(): Promise<User[]> {
    // console.log('tes');
    return this.userRepository.find();
  }

  async create(userData: CreateUserDto) {
    const user: User = new User();
    user.name = userData.name;
    user.email = userData.email;
    user.password = userData.password;
    return await this.userRepository.save(user);
  }
}
