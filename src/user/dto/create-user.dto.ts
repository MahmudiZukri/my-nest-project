import { IsEmail, IsInt, IsOptional, MinLength } from "class-validator";

export class CreateUserDto {
    @MinLength(3)
    readonly name: string;

    @IsOptional()
    @IsInt()
    readonly age?: number;

    @IsEmail()
    readonly email: string;
}
