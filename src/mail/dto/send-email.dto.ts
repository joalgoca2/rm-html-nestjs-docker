import {IsEmail, IsNotEmpty,IsString} from 'class-validator';

export class SendEmailDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    name: string;
}