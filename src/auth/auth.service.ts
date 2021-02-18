import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createConnection, getConnection, getConnectionManager } from 'typeorm';
import TenantOrm = require('../config/tenantOrm.config');
import { User } from '../config/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
  ){}

  async createTenantSchema(tenantName: string): Promise<void> {
    try {
      const connection = await getConnection();
      await connection.manager.query(`CREATE SCHEMA IF NOT EXISTS ${tenantName}`);
      await connection.close();
      const tenantConnection = await createConnection({
        ...TenantOrm,
        name: 'abc',
        type: 'postgres',
        schema: tenantName,
      });
    }  catch(error) {
      throw new InternalServerErrorException(`Failed to connect to database. Error --- ${error}`);
    }
  }
}
