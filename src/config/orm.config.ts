import { join } from 'path';
import { TenantInformation } from '../auth/tenant-information.entity';

const OrmConfig = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  migrationsRun: true,
  entities: [TenantInformation],
  migrations: [join(__dirname, '../db/public/migrations/**/*{.ts,.js}',)],
  cli: {
    migrationsDir: 'src/db/public/migrations',
  }
};
export = OrmConfig;
