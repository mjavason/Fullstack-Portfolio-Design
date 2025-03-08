import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, postSchema } from './post.schema';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: postSchema }])],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
