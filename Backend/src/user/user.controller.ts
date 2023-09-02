import { Controller, Get, Req, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { getMetadataStorage } from 'class-validator';
import { get } from 'http';
import { userInfo } from 'os';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    @Get('me')
    getMe(@GetUser('') user: User) {
        return user ;
    }
}