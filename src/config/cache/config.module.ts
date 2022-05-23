import * as Joi from 'joi';
import { Global, Module } from '@nestjs/common';
import configuration from './configuration';
import { CacheConfigService } from './config.service';
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
                CACHE_TTL: Joi.number().default(5),
                CACHE_MAX: Joi.number().default(100)
            }),
        }),
    ],
    providers: [ CacheConfigService],
    exports: [ CacheConfigService]
})
export class CacheConfigModule {}