import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum TODO_STATUS {
  DONE,
  PENDING,
  IN_PROGRESS,
}

export type TodosDocument = Todos & Document;

@Schema()
export class Todos {
  @Prop()
  name: string;

  @Prop()
  status: number;
}

export const TodosSchema = SchemaFactory.createForClass(Todos);
