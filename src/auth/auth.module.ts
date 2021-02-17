import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { TenantInformation } from './tenant-information.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([TenantInformation])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
