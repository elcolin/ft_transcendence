import { AuthService } from "./auth.service";
import { signinDto, signupDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: signupDto): Promise<{
        access_token: string;
    }>;
    signin(dto: signinDto): Promise<{
        access_token: string;
    }>;
}
