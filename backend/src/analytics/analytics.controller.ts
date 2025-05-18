import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import {
  FilterAnalyticsWithMultiFieldDtoPaginated,
  FilterAnalyticsWithPaginationDto,
} from './dto/filter-analytics.dto';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator';
import { UniqueIdDTO } from 'src/common/dto/unique_id.dto';

@Controller('analytics')
@ApiTags('Analytics')
@ApiOkResponse({ description: 'Success' })
@ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
@ApiBadRequestResponse({ description: 'Invalid Parameters' })
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new analytics event' })
  @Auth()
  async create(@Body() createAnalyticsDto: CreateAnalyticsDto) {
    return await this.analyticsService.create(createAnalyticsDto);
  }

  @Post('/multi-field-search')
  @ApiOperation({ summary: 'Advanced OR search with pagination' })
  async findWithMultiField(@Body() filter: FilterAnalyticsWithMultiFieldDtoPaginated) {
    return await this.analyticsService.multiFieldSearch(filter);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all analytics with pagination' })
  async findAll(@Query() filter: FilterAnalyticsWithPaginationDto) {
    return await this.analyticsService.findAll(filter);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Retrieve an analytics event by ID' })
  async findOne(@Param() uniqueIdDTO: UniqueIdDTO) {
    return await this.analyticsService.findOne({ _id: uniqueIdDTO.id });
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update an existing analytics event' })
  @Auth()
  async update(@Param() uniqueIdDTO: UniqueIdDTO, @Body() updateAnalyticsDto: UpdateAnalyticsDto) {
    return await this.analyticsService.update(uniqueIdDTO.id, updateAnalyticsDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete an analytics event' })
  @Auth()
  async remove(@Param() uniqueIdDTO: UniqueIdDTO) {
    return await this.analyticsService.remove(uniqueIdDTO.id);
  }
}
