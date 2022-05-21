import * as Joi from 'joi';
import { Global, Module } from '@nestjs/common';
import configuration from './configuration';
import { AppConfigService } from './config.service';
import { ConfigModule } from '@nestjs/config';
/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
        load: [configuration],
        validationSchema: Joi.object({
            APP_NAME: Joi.string().default('ExchangeMoney'),
            APP_ENV: Joi.string()
            .valid('development', 'production', 'test', 'provision')
            .default('development'),
            APP_URL: Joi.string().default('http://localhost:5000'),
            APP_PORT: Joi.number().default(5000)
        }),
        }),
    ],
    providers: [ AppConfigService],
    exports: [ AppConfigService]
})
export class AppConfigModule {}