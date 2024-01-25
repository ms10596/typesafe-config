import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { validate } from './env.validation';

@Module({
  imports: [ConfigModule.forRoot({ validate })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
