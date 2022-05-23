import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class CacheConfigService {
    constructor(private configService: ConfigService) {}

    get ttl(): number {
        return Number(this.configService.get<number>('cache.ttl'));
    }
    get max(): number {
        return Number(this.configService.get<number>('cache.max'));
    }
}