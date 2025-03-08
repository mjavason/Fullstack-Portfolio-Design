import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ description: 'Title of the project', type: String, example: 'AI Development' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Category of the project', type: String, example: 'Technology' })
  @IsString()
  category: string;

  @ApiProperty({
    description: 'Cover image URL',
    type: String,
    example: 'https://example.com/image.jpg',
  })
  @IsString()
  coverImage: string;

  @ApiProperty({
    description: 'Short summary of the project',
    type: String,
    example: 'A project about AI advancements',
  })
  @IsString()
  summary: string;

  @ApiProperty({
    description: 'Detailed body content of the project',
    type: String,
    example: 'Full project description...',
  })
  @IsString()
  body: string;

  @ApiPropertyOptional({
    description: 'Publication status of the project',
    type: Boolean,
    example: true,
  })
  published: boolean;
}
