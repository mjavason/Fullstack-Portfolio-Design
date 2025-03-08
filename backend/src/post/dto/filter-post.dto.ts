import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsArray, Min } from 'class-validator';
import { ConvertToInt } from 'src/common/decorators/util.decorator';

export class FilterPostDto {
  @ApiPropertyOptional({ description: 'Title of the post', example: 'My First Post' })
  @IsOptional()
  @IsString()
  title: string;

  @ApiPropertyOptional({ description: 'Categories of the post', example: ['Tech'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @ApiPropertyOptional({
    description: 'Publication status of the post',
    type: Boolean,
    example: true,
  })
  published: boolean;
}

export class FilterPostWithOrDto {
  @ApiPropertyOptional({ description: 'Titles of posts', example: ['Post 1', 'Post 2'] })
  @IsOptional()
  @IsString({ each: true })
  title: string[];

  @ApiPropertyOptional({ description: 'Categories of posts', example: ['Tech', 'NestJS'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories: string[];
}

export class FilterPostWithPaginationDto extends FilterPostDto {
  @ApiPropertyOptional({ description: 'Number of objects per page', type: Number, default: 10 })
  @ConvertToInt()
  @Min(1)
  pagination_size: number = 10;

  @ApiPropertyOptional({ description: 'Page number', type: Number, default: 1 })
  @ConvertToInt()
  @Min(1)
  pagination_page: number = 1;
}

export class FilterPostWithOrAndPaginationDto extends FilterPostWithOrDto {
  @ApiPropertyOptional({ description: 'Number of objects per page', type: Number, default: 10 })
  @ConvertToInt()
  @Min(1)
  pagination_size: number = 10;

  @ApiPropertyOptional({ description: 'Page number', type: Number, default: 1 })
  @ConvertToInt()
  @Min(1)
  pagination_page: number = 1;
}
