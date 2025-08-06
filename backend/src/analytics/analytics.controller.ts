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
import { generateDummyData } from './analytics.seed';

@Controller('analytics')
@ApiTags('Analytics')
@ApiOkResponse({ description: 'Success' })
@ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
@ApiBadRequestResponse({ description: 'Invalid Parameters' })
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  // @Post('/seed')
  // @ApiOperation({ summary: 'Create dummy analytics entry' })
  // async seed() {
  //   const seedData = await generateDummyData(500);
  //   return await this.analyticsService.createMultiple(seedData);
  // }

  @Post()
  @ApiOperation({ summary: 'Create analytics entry' })
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
  @ApiOperation({ summary: 'Retrieve analytics by ID' })
  async findOne(@Param() uniqueIdDTO: UniqueIdDTO) {
    return await this.analyticsService.findOne({ _id: uniqueIdDTO.id });
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update analytics entry' })
  @Auth()
  async update(@Param() uniqueIdDTO: UniqueIdDTO, @Body() updateAnalyticsDto: UpdateAnalyticsDto) {
    return await this.analyticsService.update(uniqueIdDTO.id, updateAnalyticsDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete analytics entry' })
  @Auth()
  async remove(@Param() uniqueIdDTO: UniqueIdDTO) {
    return await this.analyticsService.remove(uniqueIdDTO.id);
  }

  @Get('/dashboard/unique-visitors')
  @ApiOperation({ summary: 'Get unique visitors per month' })
  async getUniqueVisitors() {
    const data = await this.analyticsService.getUniqueVisitorsPerMonth();
    return { data };
  }

  @Get('/dashboard/top-locations')
  @ApiOperation({ summary: 'Get top visitor locations' })
  async getTopLocations() {
    const data = await this.analyticsService.getTopLocations();
    return { data };
  }

  @Get('/dashboard/content-clicks')
  @ApiOperation({ summary: 'Get content clicks per month' })
  async getContentClicks() {
    const data = await this.analyticsService.getContentClicks();
    return { data };
  }

  @Get('/dashboard/project-vs-post')
  @ApiOperation({ summary: 'Get clicks comparison: projects vs posts' })
  async getProjectVsPostClicks() {
    const data = await this.analyticsService.getProjectVsPostClicks();
    return { data };
  }

  @Get('/dashboard/summary')
  @ApiOperation({ summary: 'Get all analytics dashboard data' })
  async getDashboardSummary() {
    const [uniqueVisitors, topLocations, contentClicks, projectVsPostClicks] = await Promise.all([
      this.analyticsService.getUniqueVisitorsPerMonth(),
      this.analyticsService.getTopLocations(),
      this.analyticsService.getContentClicks(),
      this.analyticsService.getProjectVsPostClicks(),
    ]);

    return {
      uniqueVisitors,
      topLocations,
      contentClicks,
      projectVsPostClicks,
    };
  }
}
