import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { ThrottlerConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
/**
 * Import and provide throttler configuration related classes.
 *
 * @module
 */
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                THROTTLER_ACTIVE: Joi.boolean().default(true),
                THROTTLER_TTL: Joi.number().default(60),
                THROTTLER_LIMIT: Joi.number().default(100)
            }),
        }),
    ],
    providers: [ThrottlerConfigService],
    exports: [ThrottlerConfigService],
})
export class ThrottlerConfigModule {}