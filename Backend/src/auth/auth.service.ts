import { ForbiddenException, Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { signinDto, signupDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService
{
    constructor(private prisma: PrismaService, private jwt:JwtService, private config: ConfigService)
    {}
    async signin(dto: signinDto)
    {
        const user = await this.prisma.user.findUnique({
            where: {
                login : dto.login,
            },
        });
        if (!user)
            throw new ForbiddenException("credentials incorrect");
        
        const pwMatches = await argon.verify(user.hash, dto.password);
        if (!pwMatches)
            throw new ForbiddenException("credentials incorrect");
        return this.signToken(user.id, user.login);

    }

    async signup(dto: signupDto)
    {
        const hash = await argon.hash(dto.password);
        try
        {
            const user = await this.prisma.user.create({
                data: {
                    login: dto.login,
                    hash,
                },
                select: {
                    id: true,
                    login: true,
                    createdAt: true,
                }
            })
            return this.signToken(user.id, user.login);
        }
        catch(error)
        {
            if (error instanceof Prisma.PrismaClientKnownRequestError)
            {
                if (error.code === "P2002")
                	throw new ForbiddenException("Credentials taken")
            }
            throw error 
          }	
    }
    async signToken(userId: number, login: string): Promise<{access_token: string}>
    {
        const payload = {
            sub: userId,
            login,
        };
        const secret = this.config.get("JWT_SECRET");
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: secret
        },);
        return { access_token: token };
    }
}