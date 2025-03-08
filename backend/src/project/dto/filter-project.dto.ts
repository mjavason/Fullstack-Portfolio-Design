import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, Min } from 'class-validator';
import { ConvertToInt } from 'src/common/decorators/util.decorator';

export class FilterProjectDto {
  @ApiPropertyOptional({ description: 'Filter by category', type: String, example: 'Technology' })
  @IsOptional()
  @IsString()
  category: string;

  @ApiPropertyOptional({ description: 'Filter by title', type: String, example: 'AI Development' })
  @IsOptional()
  @IsString()
  title: string;
}

export class FilterProjectWithOrDto {
  @ApiPropertyOptional({
    description: 'Filter by multiple categories',
    type: [String],
    example: ['Tech', 'Science'],
  })
  @IsOptional()
  @IsString({ each: true })
  category: string[];

  @ApiPropertyOptional({
    description: 'Filter by multiple titles',
    type: [String],
    example: ['AI', 'Blockchain'],
  })
  @IsOptional()
  @IsString({ each: true })
  title: string[];
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

export class FilterProjectWithOrAndPaginationDto extends FilterProjectWithOrDto {
  @ApiPropertyOptional({ description: 'Number of projects per page', type: Number, default: 10 })
  @ConvertToInt()
  @Min(1)
  pagination_size: number = 10;

  @ApiPropertyOptional({ description: 'Page number', type: Number, default: 1 })
  @ConvertToInt()
  @Min(1)
  pagination_page: number = 1;
}
