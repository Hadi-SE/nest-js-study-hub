import { Controller, Post, Request, UseGuards, Body } from '@nestjs/common';  // Add Body here
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { ApiResponse } from 'src/response/ApiResponse';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}  // lowercase 'authService'

  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    const user = await this.authService.signup(signupDto);
    const { password, ...result } = user;
    if (!result) {
        return new ApiResponse(false, 'User registration failed', null);
    }
    return new ApiResponse(true,'User registered successfully', result);
  }

//   @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {

    if(!req.user) {
        return new ApiResponse(false, 'Invalid email or password', null);
    }
    return new ApiResponse(true,'User Loginsuccessfully', req.user);
  }
}
