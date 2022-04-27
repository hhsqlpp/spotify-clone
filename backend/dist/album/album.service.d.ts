import { Album, AlbumDocument } from './schemas/album.schema';
import { Model } from 'mongoose';
import { FileService } from 'src/file/file.service';
import { CreateAlbumDto } from './dto/create-album.dto';
export declare class AlbumService {
    private albumModel;
    private fileService;
    constructor(albumModel: Model<AlbumDocument>, fileService: FileService);
    getAlbums(): Promise<Album[]>;
    createAlbum(dto: CreateAlbumDto, image: string): Promise<Album>;
    getAlbum(id: any): Promise<Album>;
}
