import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class ThrottlerConfigService {
    constructor(private configService: ConfigService) {}

    get active(): boolean {
        return (this.configService.get<string>('throttler.active')==='true');
    }
    get ttl(): number {
        return Number(this.configService.get<number>('throttler.ttl'));
    }
    get limit(): number {
        return Number(this.configService.get<number>('throttler.limit'));
    }
}