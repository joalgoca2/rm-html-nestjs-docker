import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class ReadUserDto {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MaxLength(64)
    firstName: string;

    @MaxLength(64)
    lastName?: string;
}