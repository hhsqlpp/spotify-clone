import { FileService } from './../file/file.service';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model } from 'mongoose';
import { CreateTrackDto } from './dto/create-track.dto';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { AlbumDocument } from '../album/schemas/album.schema';
export declare class TrackSevice {
    private trackModel;
    private commentModel;
    private fileService;
    private albumModel;
    constructor(trackModel: Model<TrackDocument>, commentModel: Model<CommentDocument>, fileService: FileService, albumModel: Model<AlbumDocument>);
    create(dto: CreateTrackDto, picture: any, audio: any): Promise<Track>;
    getAll(count?: number, offset?: number): Promise<Track[]>;
    getOne(id: ObjectId): Promise<Track>;
    delete(id: ObjectId): Promise<any>;
    addComment(dto: CreateCommentDto): Promise<Comment>;
    listen(id: ObjectId): Promise<void>;
    search(query: string): Promise<Track[]>;
}
