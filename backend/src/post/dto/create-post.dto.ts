import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Title of the post', example: 'My First Post' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Categories of the post', example: ['Tech', 'NestJS'] })
  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @ApiProperty({
    description: 'Summary of the post',
    example: 'This is a brief summary of the post.',
  })
  @IsString()
  summary: string;

  @ApiProperty({ description: 'Content of the post', example: 'This is the body of the post.' })
  @IsString()
  body: string;

  @ApiPropertyOptional({
    description: 'Publication status of the post',
    type: Boolean,
    example: true,
  })
  published: boolean;
}
