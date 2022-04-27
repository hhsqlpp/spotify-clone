import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Comment } from './comment.schema';
import { Album } from 'src/album/schemas/album.schema';
export declare type TrackDocument = Track & Document;
export declare class Track {
    id: number;
    name: string;
    artist: string;
    album_id: Album;
    album_name: string;
    lyrics: string;
    audio: string;
    picture: string;
    listens: number;
    comments: Comment[];
}
export declare const TrackSchema: mongoose.Schema<Document<Track, any, any>, mongoose.Model<Document<Track, any, any>, any, any, any>, {}, {}>;
