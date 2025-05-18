import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsArray, Min } from 'class-validator';
import { analyticsFieldOptions } from '../analytics.interface';
import { ConvertToInt } from 'src/common/decorators/util.decorator';

export class FilterAnalyticsDto {
  @ApiPropertyOptional({ description: 'Fingerprint of the user/device', type: String })
  @IsOptional()
  @IsString()
  fingerprint: string;

  @ApiPropertyOptional({ description: 'State of the user/device', type: String })
  @IsOptional()
  @IsString()
  state: string;

  @ApiPropertyOptional({ description: 'Type of analytics event', type: String })
  @IsOptional()
  @IsString()
  type: string;

  @ApiPropertyOptional({ description: 'Content category', type: String })
  @IsOptional()
  @IsString()
  content: string;
}

export class FilterAnalyticsWithMultiFieldDto {
  @ApiPropertyOptional({ description: 'Search term for multiple fields', example: 'click' })
  @IsOptional()
  @IsString()
  searchTerm: string;

  @ApiPropertyOptional({ description: 'Fields to search in', example: analyticsFieldOptions })
  @IsOptional()
  @IsArray()
  fields: string[];
}

export class FilterAnalyticsWithPaginationDto extends FilterAnalyticsDto {
  @ApiPropertyOptional({ description: 'Number of objects per page', type: Number, default: 10 })
  @ConvertToInt()
  @Min(1)
  pagination_size: number = 10;

  @ApiPropertyOptional({ description: 'Page number', type: Number, default: 1 })
  @ConvertToInt()
  @Min(1)
  pagination_page: number = 1;
}

export class FilterAnalyticsWithMultiFieldDtoPaginated extends FilterAnalyticsWithMultiFieldDto {
  @ApiPropertyOptional({ description: 'Number of objects per page', type: Number, default: 10 })
  @ConvertToInt()
  @Min(1)
  pagination_size: number = 10;

  @ApiPropertyOptional({ description: 'Page number', type: Number, default: 1 })
  @ConvertToInt()
  @Min(1)
  pagination_page: number = 1;
}
