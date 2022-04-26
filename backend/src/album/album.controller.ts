import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';

@Controller('/albums')
export class AlbumController {
  constructor(private albumService: AlbumService) {}

  @Get()
  getAlbums() {
    return this.albumService.getAlbums();
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  createAlbum(@Body() dto: CreateAlbumDto, @UploadedFiles() files) {
    return this.albumService.createAlbum(dto, files.picture[0]);
  }

  @Get(':id')
  getAlbum(@Param('id') id) {
    return this.albumService.getAlbum(id);
  }
}
