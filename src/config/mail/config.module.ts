import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { MailConfigService } from './config.service';
import { ConfigModule } from '@nestjs/config';
/**
 * Import and provide mariadb configuration related classes.
 *
 * @module
 */
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                EMAIL_HOST: Joi.string().default('smtp.gmail.com'),
                EMAIL_USER: Joi.string().default('user'),
                EMAIL_PASS: Joi.string().default('pass'),
                EMAIL_NOREPLY: Joi.string().default('noreply@gmail.com'),
                EMAIL_SECURE: Joi.string().default(false),
                EMAIL_PORT: Joi.string().default(465),
            }),
        }),
    ],
    providers: [ MailConfigService],
    exports: [MailConfigService]
})
export class MailConfigModule {}