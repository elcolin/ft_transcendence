import { IsEmail, IsNotEmpty, IsString} from "class-validator"

export class signinDto
{
    @IsString()
    @IsNotEmpty()
    login: string

    @IsString()
    @IsNotEmpty()
    password: string
}