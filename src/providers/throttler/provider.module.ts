import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { ThrottlerConfigModule } from "src/config/throttler/config.module";
import { ThrottlerConfigService } from "src/config/throttler/config.service";

@Module({
    imports: [
        ThrottlerModule.forRootAsync(
        {
            imports: [ThrottlerConfigModule],
            useFactory: async (throttlerConfigService: ThrottlerConfigService) =>
            ({
                active: throttlerConfigService.active,
                ttl: throttlerConfigService.ttl,
                limit: throttlerConfigService.limit,
            }),
            inject: [ThrottlerConfigService],
        })
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
    ]
})
export class ThrottlerProviderModule {}