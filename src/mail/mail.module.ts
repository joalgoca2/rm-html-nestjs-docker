import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
import { MailConfigModule } from 'src/config/mail/config.module';
import { MailConfigService } from 'src/config/mail/config.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [MailConfigModule],
      useFactory: async (mailConfigService: MailConfigService) => ({
        transport: {
          host: mailConfigService.host,
          secure: mailConfigService.secure,
          port: mailConfigService.port,
          auth: {
            user: mailConfigService.user,
            pass: mailConfigService.pass,
          },
        },
        defaults: {
          from: `"No Reply" <${mailConfigService.noreply}>`,
        },
        template: {
          dir: join(__dirname, '/template/'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [MailConfigService],
    }),
  ],
  providers: [MailService]
})
export class MailModule {}