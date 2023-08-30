import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { VisitorService } from './visitors.service';
import { CreateVisitorDto } from '../dto/create-visitor.dto';
import { UpdateVisitorDto } from '../dto/update-visitor.dto';

@Controller('visitor')
export class VisitorController {
  constructor(private readonly visitorService: VisitorService) {}

  @Post()
  create(@Body() createVisitorDto: CreateVisitorDto) {
    return this.visitorService.create(createVisitorDto);
  }

  @Get()
  findAll() {
    return this.visitorService.findAll();
  }

  @Get('report')
  async generateReport() {
    const visitorsCount = await this.visitorService.visitorsCount();
    const scrolledCount = await this.visitorService.scrolledCount();
    let percentageScrolled = 0;

    if (visitorsCount > 0 && scrolledCount > 0) {
      percentageScrolled = parseFloat(
        ((scrolledCount / visitorsCount) * 100).toFixed(2),
      );
    }

    return { visitorsCount, percentageScrolled };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitorService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVisitorDto: UpdateVisitorDto) {
    return this.visitorService.update(id, updateVisitorDto);
  }
}
