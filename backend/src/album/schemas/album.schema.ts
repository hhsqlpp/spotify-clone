import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Track } from 'src/track/schemas/track.schema';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type AlbumDocument = Album & Document;

@Schema()
export class Album {
  @Prop()
  name: string;

  @Prop()
  tracks: Track[];

  @Prop()
  picture: string;

  @Prop()
  artist: string;

  @Prop()
  listens: number;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
