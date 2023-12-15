import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3, { message: 'Name must have atleast 3 characters' })
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide valid Email' })
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
