import { Module } from '@nestjs/common';
import { VisitorService } from './visitors.service';
import { VisitorController } from './visitors.controller';
import { Visitor, VisitorSchema } from '../schema/visitor.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Visitor.name,
        schema: VisitorSchema,
      },
    ]),
  ],
  controllers: [VisitorController],
  providers: [VisitorService],
})
export class VisitorsModule {}
