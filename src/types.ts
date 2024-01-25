import { EnvironmentVariables } from './env.validation';

export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends EnvironmentVariables {}
  }
}
