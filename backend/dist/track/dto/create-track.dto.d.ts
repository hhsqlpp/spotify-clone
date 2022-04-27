import { ObjectId } from 'mongoose';
export declare class CreateTrackDto {
    readonly name: string;
    readonly artist: string;
    readonly lyrics: string;
    readonly album_id: ObjectId;
}
