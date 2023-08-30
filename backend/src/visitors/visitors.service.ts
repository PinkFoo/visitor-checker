import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVisitorDto } from '../dto/create-visitor.dto';
import { UpdateVisitorDto } from '../dto/update-visitor.dto';
import { Visitor, VisitorDocument } from '../schema/visitor.schema';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class VisitorService {
  constructor(
    @InjectModel(Visitor.name)
    private readonly visitorModel: Model<VisitorDocument>,
    private readonly httpService: HttpService,
  ) {}

  async create(createVisitorDto: CreateVisitorDto): Promise<VisitorDocument> {
    const visitor = new this.visitorModel(createVisitorDto);
    const url = 'https://random-data-api.com/api/v2/users';
    const response = await firstValueFrom(this.httpService.get(url));
    visitor.visitorId = response.data.uid;
    visitor.avatarSrc = response.data.avatar;
    visitor.scrolled = false;
    return visitor.save();
  }

  async findAll(): Promise<VisitorDocument[]> {
    return this.visitorModel.find().exec();
  }

  async getVisitorsCount(): Promise<number> {
    return this.visitorModel.count().exec();
  }

  async getEngagedVisitorsCount(): Promise<number> {
    return this.visitorModel.count({ scrolled: true }).exec();
  }

  async findOne(id: string) {
    return this.visitorModel.findOne({ visitorId: id }).exec();
  }

  async update(
    id: string,
    updateVisitorDto: UpdateVisitorDto,
  ): Promise<VisitorDocument> {
    return this.visitorModel.findByIdAndUpdate(id, updateVisitorDto);
  }
}
