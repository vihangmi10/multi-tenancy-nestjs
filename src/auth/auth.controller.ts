import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ){}

  @Get('/')
 async createTenantSchema(@Query('tenant') tenantName: string): Promise<void> {
    await this.authService.createTenantSchema(tenantName);
  }
}
