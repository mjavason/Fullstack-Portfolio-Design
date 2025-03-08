import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './post.schema';
import { IPostDocument } from './post.interface';
import { GenericService } from 'src/common/providers/generic.service';

@Injectable()
export class PostService extends GenericService<IPostDocument> {
  constructor(@InjectModel(Post.name) private postModel: Model<IPostDocument>) {
    super(postModel);
  }
}
