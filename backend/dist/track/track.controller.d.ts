import { CreateCommentDto } from './dto/create-comment.dto';
import { ObjectId } from 'mongoose';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackSevice } from './track.service';
export declare class TrackController {
    private trackService;
    constructor(trackService: TrackSevice);
    create(dto: CreateTrackDto, files: any): Promise<import("./schemas/track.schema").Track>;
    getAll(count: number, offset: number): Promise<import("./schemas/track.schema").Track[]>;
    search(query: string): Promise<import("./schemas/track.schema").Track[]>;
    getOne(id: ObjectId): Promise<import("./schemas/track.schema").Track>;
    delete(id: ObjectId): Promise<any>;
    addComment(dto: CreateCommentDto): Promise<import("./schemas/comment.schema").Comment>;
    listen(id: ObjectId): Promise<void>;
}
