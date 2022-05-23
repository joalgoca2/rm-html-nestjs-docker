import { Injectable } from '@nestjs/common';
import { IUser } from './common/interfaces/user.interface';
import { users } from './database/user/data';

@Injectable()
export class AppService {
  getReady(): string {
    return 'OK!';
  }

  getUser(id:number): IUser {
    var response:IUser=null;
    users.forEach(function(user:IUser) {
      if(user.id==id){
          response=user;
      }
    });
    return response;
  }
}
