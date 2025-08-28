import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoalsController } from './goals/goals.controller';
import { ConfigModule } from '@nestjs/config';
import ormConfig from './config/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfigProd from './config/orm.config.prod';
import { Goal } from './goals/entities/goal/goal';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
      expandVariables: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd
    }),
    TypeOrmModule.forFeature([Goal])
  ],
  controllers: [AppController, GoalsController],
  providers: [AppService],
})
export class AppModule {}
