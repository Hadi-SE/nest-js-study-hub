import { Injectable, ConflictException } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {


constructor(private usersService: UsersService) {}

   async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (user && await bcrypt.compare(password, user.password)) {
        const { password, ...result } = user;
        return result; 
    }

    return null; // Invalid login
    }

    async signup(signupDto: SignupDto) {
        const { email, password, ...rest } = signupDto;

        const existingUser = await this.usersService.findByEmail(email);
        if (existingUser) {
            throw new ConflictException('Email already registered');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            email,
            password: hashedPassword,
            ...rest,
        };

        return this.usersService.createUser(newUser);
        }


}
