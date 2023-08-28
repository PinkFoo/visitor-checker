import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVisitorDto } from '../dto/create-visitor.dto';
import { UpdateVisitorDto } from '../dto/update-visitor.dto';
import { Visitor, VisitorDocument } from '../schema/visitor.schema';

@Injectable()
export class VisitorService {
  constructor(
    @InjectModel(Visitor.name)
    private readonly visitorModel: Model<VisitorDocument>,
  ) {}

  async create(createVisitorDto: CreateVisitorDto): Promise<VisitorDocument> {
    const visitor = new this.visitorModel(createVisitorDto);
    return visitor.save();
  }

  async findAll(): Promise<VisitorDocument[]> {
    return this.visitorModel.find().exec();
  }

  async findOne(id: string) {
    return this.visitorModel.findById(id);
  }

  async update(
    id: string,
    updateVisitorDto: UpdateVisitorDto,
  ): Promise<VisitorDocument> {
    return this.visitorModel.findByIdAndUpdate(id, updateVisitorDto);
  }

  async remove(id: string) {
    return this.visitorModel.findByIdAndRemove(id);
  }
}
