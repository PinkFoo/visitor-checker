import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type VisitorDocument = Visitor & Document;

@Schema()
export class Visitor {
  @Prop()
  visitor_id: string;

  @Prop()
  scrolled: boolean;

  @Prop()
  avatar_src: string;
}

export const VisitorSchema = SchemaFactory.createForClass(Visitor);
