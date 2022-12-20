import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type RecordDocument = Records & Document;

@Schema()
export class Records{
    @Prop({required: true})
    convertTo: string;
    @Prop({required: true})
    crypto: string;
    @Prop({required: true})
    amount: number;
    @Prop()
    result: string;
    @Prop()
    date: string;
}

export const RecordSchema = SchemaFactory.createForClass(Records);