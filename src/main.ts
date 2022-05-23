import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { join } from 'path';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const appConfig: AppConfigService = app.get(AppConfigService);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.setGlobalPrefix("api");
  if(appConfig.env==='production')
  {
    var corsWhitelist = [
      'http://localhost:'+appConfig.port,
      'subdominio.dominio.com'
    ];
    app.enableCors({
      origin: function (origin, callback) {
        if (!origin || corsWhitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      },
    });
    app.use(helmet());
  }
  await app.listen(appConfig.port);
}
bootstrap();
