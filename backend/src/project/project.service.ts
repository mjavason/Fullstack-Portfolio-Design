import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './project.schema';
import { IProjectDocument } from './project.interface';
import { GenericService } from 'src/common/providers/generic.service';

@Injectable()
export class ProjectService extends GenericService<IProjectDocument> {
  constructor(@InjectModel(Project.name) private projectModel: Model<IProjectDocument>) {
    super(projectModel);
  }
}
