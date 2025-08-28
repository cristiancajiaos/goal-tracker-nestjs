import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { registerAs } from '@nestjs/config';
import { Goal } from "src/goals/entities/goal/goal";

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'goaltracker_db',
    password: 'goaltracker_db',
    database: 'goaltracker_db',
    entities: [Goal],
    synchronize: false
  })
);