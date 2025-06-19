
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }
    create(user: Partial<User>): Promise<User> {
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }

    findOne(id: number): Promise<User | null> {
        return this.usersRepository.findOneBy({ id });
    }

    update(id: number, user: Partial<User>): Promise<User| null> {
        
        this.usersRepository.update(id, user);
        const updated =  this.usersRepository.findOneBy({ id });

        if (!updated) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return updated;
        }
    

        remove(id: number): Promise<User | null> {
            const user =  this.usersRepository.findOneBy({ id });
            if (!user) {
                throw new NotFoundException(`User with ID ${id} not found`);
            }
            this.usersRepository.delete(id);
            return user;
        }
}
