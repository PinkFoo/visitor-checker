import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type VisitorDocument = Visitor & Document;

@Schema()
export class Visitor {
  @Prop({ alias: 'avatar_id' })
  visitorId: string;

  @Prop()
  scrolled: boolean;

  @Prop({ alias: 'avatar_src' })
  avatarSrc: string;
}

export const VisitorSchema = SchemaFactory.createForClass(Visitor);
