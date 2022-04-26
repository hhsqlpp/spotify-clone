import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Comment } from './comment.schema';
import { Album } from 'src/album/schemas/album.schema';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Album' })
  album_id: Album;

  @Prop()
  album_name: string;

  @Prop()
  lyrics: string;

  @Prop()
  audio: string;

  @Prop()
  picture: string;

  @Prop()
  listens: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);
