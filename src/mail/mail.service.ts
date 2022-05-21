import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, Injectable } from '@nestjs/common';
import { AppConfigService } from 'src/config/app/config.service';
import { ReadUserDto } from './dto/read-user.dto';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class MailService {
    constructor(
        private appConfigService: AppConfigService,
        private mailerService: MailerService
    ) {}

    async sendUserConfirmation(user: ReadUserDto, token: string ) {
        const url = `${this.appConfigService.url}/auth/confirm?token=${token}`;

        await this.mailerService.sendMail({
            to: user.email,
            // from: '"Support Team" <support@example.com>', // override default from
            subject: 'Welcome to aqua! Confirm your Email',
            template: './confirmation', // `.hbs` extension is appended automatically
            context: { // ✏️ filling curly brackets with content
                name: user.firstName,
                url,
            }
        });
    }
    async sendTestEmail({email}: SendEmailDto) {        ;
        await this.mailerService.sendMail({
            to: email,
            subject: 'Test Email',
            text: 'This is a test',
            html:'<html>This a email test</html>',
        })
        .then((success) => {
            console.debug(success);
        })
        .catch((fail) => {
            console.error(fail);
            throw new HttpException('Error sending email',500);
        });
    }
}