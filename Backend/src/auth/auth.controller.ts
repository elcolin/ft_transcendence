import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { signinDto, signupDto } from "./dto";
import { dot } from "node:test/reporters";

@Controller('auth')
export class AuthController
{
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(@Body() dto: signupDto) {
        return this.authService.signup(dto);
    }

	@HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() dto: signinDto)
    {
        return this.authService.signin(dto) ;
    }

}