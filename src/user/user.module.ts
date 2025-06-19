import { Module, Res } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseModule } from 'src/response/response.module';


@Module({
    imports: [TypeOrmModule.forFeature([User]),ResponseModule],
    controllers: [UserController],
    providers:[UsersService],
     exports: [UsersService], // Add your controllers here
})

export class UserModule {}
