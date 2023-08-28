import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitorService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVisitorDto: UpdateVisitorDto) {
    return this.visitorService.update(id, updateVisitorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitorService.remove(id);
  }
}
