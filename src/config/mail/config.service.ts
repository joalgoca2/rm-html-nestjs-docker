import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class MailConfigService {
    constructor(private configService: ConfigService) {}

    get host(): string {
        return this.configService.get<string>('nodemailer.host');
    }
    get user(): string {
        return this.configService.get<string>('nodemailer.user');
    }
    get pass(): string {
        return this.configService.get<string>('nodemailer.pass');
    }
    get noreply(): string {
        return this.configService.get<string>('nodemailer.noreply');
    }
    get secure(): boolean {
        return (this.configService.get<string>('nodemailer.secure')==='true');
    }
    get port(): number {
        return Number(this.configService.get<number>('nodemailer.port'));
    }
}