import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsEmail,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  name: string;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'Password Should have atleast 6 characters' })
  password: string;

  @IsNotEmpty()
  @MinLength(6, {
    message: 'Confirm password Should have atleast 6 characters',
  })
  confirmPassword: string;
}
