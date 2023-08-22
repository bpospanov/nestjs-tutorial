import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({ example: 'example@my.com', description: 'email пользователя' })
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({ example: 'mypassword', description: 'пароль пользователя' })
  @Prop({ required: true })
  password: string;

  @ApiProperty({ example: true, description: 'Забанен пользователь или нет' })
  @Prop({ default: false })
  banned: boolean;

  @ApiProperty({
    example: 'громко разговаривал',
    description: 'Причина блокировки',
  })
  @Prop({ default: '' })
  banReason: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
