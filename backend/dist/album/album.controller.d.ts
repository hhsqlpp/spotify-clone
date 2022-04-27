import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
export declare class AlbumController {
    private albumService;
    constructor(albumService: AlbumService);
    getAlbums(): Promise<import("./schemas/album.schema").Album[]>;
    createAlbum(dto: CreateAlbumDto, files: any): Promise<import("./schemas/album.schema").Album>;
    getAlbum(id: any): Promise<import("./schemas/album.schema").Album>;
}
