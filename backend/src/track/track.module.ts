import { FileService } from './../file/file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackSevice } from './track.service';
import { TrackController } from './track.controller';
import { Module } from '@nestjs/common';
import { Track, TrackSchema } from './schemas/track.schema';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { AlbumModule } from '../album/album.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    AlbumModule,
  ],
  controllers: [TrackController],
  providers: [TrackSevice, FileService],
  exports: [TrackSevice, MongooseModule],
})
export class TrackModule {}
