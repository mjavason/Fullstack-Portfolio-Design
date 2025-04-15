import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, Min } from 'class-validator';
import { ConvertToInt } from 'src/common/decorators/util.decorator';
import { projectFieldOptions } from '../project.interface';

export class FilterProjectDto {
  @ApiPropertyOptional({ description: 'Filter by category', type: String, example: 'Technology' })
  @IsOptional()
  @IsString()
  category: string;

  @ApiPropertyOptional({ description: 'Filter by title', type: String, example: 'AI Development' })
  @IsOptional()
  @IsString()
  title: string;

  @ApiPropertyOptional({
    description: 'Publication status of the project',
    type: Boolean,
    example: true,
  })
  published: boolean;
}

export class FilterProjectWithMultiFieldDto {
  @ApiPropertyOptional({ description: 'Search term for multiple fields', example: 'JavaScript' })
  @IsOptional()
  @IsString()
  searchTerm: string;

  @ApiPropertyOptional({
    description: 'Fields to search in',
    example: projectFieldOptions,
  })
  @IsOptional()
  @IsArray()
  fields: string[];
}

export class FilterProjectWithPaginationDto extends FilterProjectDto {
  @ApiPropertyOptional({ description: 'Number of projects per page', type: Number, default: 10 })
  @ConvertToInt()
  @Min(1)
  pagination_size: number = 10;

  @ApiPropertyOptional({ description: 'Page number', type: Number, default: 1 })
  @ConvertToInt()
  @Min(1)
  pagination_page: number = 1;
}

export class FilterProjectWithMultiFieldDtoPaginated extends FilterProjectWithMultiFieldDto {
  @ApiPropertyOptional({ description: 'Number of objects per page', type: Number, default: 10 })
  @ConvertToInt()
  @Min(1)
  pagination_size: number = 10;

  @ApiPropertyOptional({ description: 'Page number', type: Number, default: 1 })
  @ConvertToInt()
  @Min(1)
  pagination_page: number = 1;
}
