import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    getUser() {        // Logic to get user details
        return "Hello Muhammad Hadi";
    }
}
