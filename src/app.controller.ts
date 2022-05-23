import { CacheInterceptor, Controller, Get, ParseIntPipe, Query, Render, UseInterceptors,    } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getReady();
  }

  @UseInterceptors(CacheInterceptor)
  @Get('carpeta')
  @Render('layouts/index')
  getUser(@Query('id',ParseIntPipe) id:string) {
    const user= this.appService.getUser(+id);
    return { message: 'Welcome!', user:user};
  }
}
