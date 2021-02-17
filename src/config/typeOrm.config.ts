import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { join } from 'path';
import { TenantInformation } from '../auth/tenant-information.entity';

export const TypeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  synchronize: false,
  migrationsRun: true,
  entities: [TenantInformation],
  migrations: [join(__dirname, '../db/public/migrations/**/*{.ts,.js}',)],
  cli: {
    migrationsDir: 'src/db/public/migrations',
  }
})
