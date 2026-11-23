import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { configurationValidationSchema } from './config/configuration.validation.js';
import { DatabaseModule } from './database/database.module.js';
import { RedisModule } from './redis/redis.module.js';
  
export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
       validationSchema: configurationValidationSchema,
    }),

    DatabaseModule,
    RedisModule,

    // HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
