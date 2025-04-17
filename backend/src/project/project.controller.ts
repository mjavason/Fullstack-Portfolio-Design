import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import {
  FilterProjectWithMultiFieldDtoPaginated,
  FilterProjectWithPaginationDto,
} from './dto/filter-project.dto';
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

@Controller('project')
@ApiTags('Project')
@ApiOkResponse({ description: 'Success' })
@ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
@ApiBadRequestResponse({ description: 'Invalid Parameters' })
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
// @UseInterceptors(DynamicCacheInterceptor)
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new project' })
  @Auth()
  async create(@Body() createProjectDto: CreateProjectDto) {
    return await this.projectService.create(createProjectDto);
  }

  @Post('/multi-field-search')
  @ApiOperation({ summary: 'Advanced OR search with pagination' })
  async findWithMultiField(@Body() filter: FilterProjectWithMultiFieldDtoPaginated) {
    return await this.projectService.multiFieldSearch(filter);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all projects with pagination' })
  async findAll(@Query() filter: FilterProjectWithPaginationDto) {
    return await this.projectService.findAll(filter);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Retrieve a project by ID' })
  async findOne(@Param() uniqueIdDTO: UniqueIdDTO) {
    return await this.projectService.findOne({ _id: uniqueIdDTO.id });
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update an existing project' })
  @Auth()
  async update(@Param() uniqueIdDTO: UniqueIdDTO, @Body() updateProjectDto: UpdateProjectDto) {
    return await this.projectService.update(uniqueIdDTO.id, updateProjectDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete a project' })
  @Auth()
  async remove(@Param() uniqueIdDTO: UniqueIdDTO) {
    return await this.projectService.remove(uniqueIdDTO.id);
  }
}
