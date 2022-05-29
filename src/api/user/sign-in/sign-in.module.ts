import { Module } from '@nestjs/common';
import { SignInController } from './sign-in.controller';

@Module({
  controllers: [SignInController]
})
export class SignInModule {}
