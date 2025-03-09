import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {
  FilterPostWithOrAndPaginationDto,
  FilterPostWithPaginationDto,
} from './dto/filter-post.dto';
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

@Controller('posts')
@ApiTags('Posts')
@ApiOkResponse({ description: 'Success' })
@ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
@ApiBadRequestResponse({ description: 'Invalid Parameters' })
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  // @Auth()
  async create(@Body() createPostDto: CreatePostDto) {
    return await this.postService.create(createPostDto);
  }

  @Post('/advanced-search')
  @ApiOperation({ summary: 'Advanced OR search with pagination' })
  async findAllWithOr(@Body() filter: FilterPostWithOrAndPaginationDto) {
    return await this.postService.findWithMultipleOrFields(filter);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all posts with pagination' })
  async findAll(@Query() filter: FilterPostWithPaginationDto) {
    return await this.postService.findAll(filter);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Retrieve a post by ID' })
  async findOne(@Param() uniqueIdDTO: UniqueIdDTO) {
    return await this.postService.findOne({ _id: uniqueIdDTO.id });
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update an existing post' })
  // @Auth()
  async update(@Param() uniqueIdDTO: UniqueIdDTO, @Body() updatePostDto: UpdatePostDto) {
    return await this.postService.update(uniqueIdDTO.id, updatePostDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete a post' })
  // @Auth()
  async remove(@Param() uniqueIdDTO: UniqueIdDTO) {
    return await this.postService.remove(uniqueIdDTO.id);
  }
}
