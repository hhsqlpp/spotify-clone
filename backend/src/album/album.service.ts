import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schemas/album.schema';
import { Model } from 'mongoose';
import { FileService, FileType } from 'src/file/file.service';
import { CreateAlbumDto } from './dto/create-album.dto';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
    private fileService: FileService,
  ) {}

  async getAlbums(): Promise<Album[]> {
    const albums = await this.albumModel.find();

    return albums;
  }

  async createAlbum(dto: CreateAlbumDto, image: string): Promise<Album> {
    const imagePath = this.fileService.createFile(FileType.IMAGE, image);

    const album = this.albumModel.create({
      ...dto,
      listens: 0,
      picture: imagePath,
    });

    return album;
  }

  async getAlbum(id): Promise<Album> {
    const album = await this.albumModel.findById(id);

    return album;
  }
}
