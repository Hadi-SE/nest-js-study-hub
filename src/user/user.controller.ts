import { Body, Controller,Get, Post,Req,Delete  } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { Request } from 'express';
import { ApiResponse } from 'src/response/ApiResponse';
import { Param, ParseIntPipe } from '@nestjs/common';



@Controller('user')
export class UserController {

   constructor(
    private readonly _userService: UsersService,
) {}


    @Get()
    getUser() { 
        return this._userService.findAll();       
    }

    @Post('create')
    async createUser(@Body() CreateUserDto:CreateUserDto ) {
    console.log('Request body received:', CreateUserDto);
    const user = await this._userService.create(CreateUserDto); 
    return new ApiResponse(true,'User created successfully',user);
    }


    @Post('update/:id')
    async updateUser(
     @Param('id', ParseIntPipe) id: number,
     @Body() updateData: Partial<CreateUserDto>
    ) {
        console.log('Update request received for ID:', id);
        const updatedUser = await this._userService.update(id, updateData);
        return new ApiResponse(true,'User updated successfully', updatedUser);
    }

     @Delete('delete/:id')
     async deleteUser(@Param('id', ParseIntPipe) id: number) {
        await this._userService.remove(id);
        return new ApiResponse(true,'User deleted successfully');
     }

    @Post('test-raw')
    testRaw(@Req() req: Request) {
    console.log('HEADERS:', req.headers);

    console.log('RAW BODY:', req.body);
    return req.body;
    }

   


}
