import { Album } from './../album/schemas/album.schema';
import { FileService, FileType } from './../file/file.service';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model } from 'mongoose';
import { CreateTrackDto } from './dto/create-track.dto';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { AlbumDocument } from '../album/schemas/album.schema';

@Injectable()
export class TrackSevice {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService,
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
  ) {}

  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const imagePath = this.fileService.createFile(FileType.IMAGE, picture);

    const album = await this.albumModel.findById(dto.album_id);

    const track = await this.trackModel.create({
      ...dto,
      listens: 0,
      picture: imagePath,
      audio: audioPath,
      album_name: album.name,
    });

    if (album) {
      album.tracks.push(track._id);
      album.save();
    }

    return track;
  }

  async getAll(count = 100, offset = 0): Promise<Track[]> {
    const tracks = await this.trackModel
      .find({})
      .skip(Number(offset))
      .limit(Number(count));

    return tracks;
  }

  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id).populate('comments');

    return track;
  }

  async delete(id: ObjectId) {
    const track = await this.trackModel.findByIdAndDelete(id);

    return track._id;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({ ...dto });

    track.comments.push(comment._id);
    await track.save();

    return comment;
  }

  async listen(id: ObjectId) {
    const track = await this.trackModel.findById(id);

    track.listens += 1;
    track.save();
  }

  async search(query: string): Promise<Track[]> {
    const tracks = await this.trackModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });

    return tracks;
  }
}
