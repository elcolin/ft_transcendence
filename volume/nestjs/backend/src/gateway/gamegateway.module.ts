import {Module} from "@nestjs/common"
import { GameGateway } from "./gamegateway";

@Module({
    providers: [GameGateway]
})
export class GameGatewayModule{}