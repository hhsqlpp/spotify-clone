import { Track } from 'src/track/schemas/track.schema';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type AlbumDocument = Album & Document;
export declare class Album {
    name: string;
    tracks: Track[];
    picture: string;
    artist: string;
    listens: number;
}
export declare const AlbumSchema: mongoose.Schema<Document<Album, any, any>, mongoose.Model<Document<Album, any, any>, any, any, any>, {}, {}>;
