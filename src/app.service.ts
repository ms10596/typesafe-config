import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './env.validation';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}
  getHello(): string {
    const nodeEnv = this.configService.get('NODE_ENV', {
      //    ^?
      infer: true,
    });
    const port = process.env.PORT;
    //    ^?
    console.log(nodeEnv, port);
    return 'Hello World!';
  }
}
