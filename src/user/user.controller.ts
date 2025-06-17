import { Controller,Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

   constructor(private readonly _userService: UserService) {}


    @Get()
    getUser() {        // Logic to get user details
        return this._userService.getUser();
    }
}
