import { join } from 'path';
import { User } from './entities/user.entity';

const TenantOrm = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  migrationsRun: true,
  entities: [User],
  migrations: [join(__dirname, '../db-tenant/migrations/**/*{.ts,.js}',)],
  cli: {
    migrationsDir: '/src/db-tenant/migrations'
  }
}
export = TenantOrm;
