import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;
  @IsEnum(['Stars', 'Nunchucks'], {
    message: 'Weapon must be either Stars or Nunchucks',
  })
  weapon: 'Stars' | 'Nunchucks';
}
