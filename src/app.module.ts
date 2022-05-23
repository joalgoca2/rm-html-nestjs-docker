import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { CacheConfigModule } from './config/cache/config.module';
import { CacheProviderModule } from './providers/cache/provider.module';
import { ThrottlerProviderModule } from './providers/throttler/provider.module';

@Module({
  imports: [
    AppConfigModule,
    CacheProviderModule,
    ThrottlerProviderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
