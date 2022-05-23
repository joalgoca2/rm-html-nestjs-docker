import { CacheModule, Module } from "@nestjs/common";
import { CacheConfigModule } from "src/config/cache/config.module";
import { CacheConfigService } from "src/config/cache/config.service";

@Module({
    imports: [
        CacheModule.registerAsync(
        {
            imports: [CacheConfigModule],
            useFactory: async (cacheConfigService: CacheConfigService) =>
            ({
                ttl: cacheConfigService.ttl,
                max: cacheConfigService.max
            }),
            inject: [CacheConfigService],
        })
    ],
    exports:[CacheModule]
})
export class CacheProviderModule {}