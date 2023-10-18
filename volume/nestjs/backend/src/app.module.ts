import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameGatewayModule } from './gateway/gamegateway.module';

@Module({
  imports: [GameGatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
