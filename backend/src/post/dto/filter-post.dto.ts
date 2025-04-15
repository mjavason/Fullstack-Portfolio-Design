import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsArray, Min } from 'class-validator';
import { ConvertToInt } from 'src/common/decorators/util.decorator';
import { postFieldOptions } from '../post.interface';

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

export class FilterPostWithMultiFieldDto {
  @ApiPropertyOptional({ description: 'Search term for multiple fields', example: 'JavaScript' })
  @IsOptional()
  @IsString()
  searchTerm: string;

  @ApiPropertyOptional({
    description: 'Fields to search in',
    example: postFieldOptions,
  })
  @IsOptional()
  @IsArray()
  fields: string[];
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

export class FilterPostWithMultiFieldDtoPaginated extends FilterPostWithMultiFieldDto {
  @ApiPropertyOptional({ description: 'Number of objects per page', type: Number, default: 10 })
  @ConvertToInt()
  @Min(1)
  pagination_size: number = 10;

  @ApiPropertyOptional({ description: 'Page number', type: Number, default: 1 })
  @ConvertToInt()
  @Min(1)
  pagination_page: number = 1;
}
