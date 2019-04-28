import { ITimestampDocument } from './serverDictionary';
import { Schema, Model, model } from 'mongoose';

const TimestampSchema: Schema<ITimestampDocument> = new Schema({
  timestamp: {
    type: String,
    required: 'Each movie dump requires a timestamp'
  }
});

export const Timestamp: Model<ITimestampDocument> = model<ITimestampDocument>(
  'Movie',
  TimestampSchema
);
