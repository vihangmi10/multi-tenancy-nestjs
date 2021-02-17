import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createConnection, getConnection } from 'typeorm';
import TenantOrm = require('../config/tenantOrm.config');

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
  ){}

  async createTenantSchema(tenantName: string): Promise<void> {
    try {
      const connection = await getConnection();
      connection.manager.query(`CREATE SCHEMA IF NOT EXISTS ${tenantName}`)
      await connection.close();
      const tenantConnection = await createConnection({
        ...TenantOrm,
        name: tenantName,
        type: 'postgres',
        schema: tenantName
      });
      await tenantConnection.close();
    }  catch(error) {
      throw new InternalServerErrorException(`Failed to connect to database. Error --- ${error}`);
    }


  }
}
