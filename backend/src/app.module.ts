import { TrackModule } from './track/track.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(
      'mongodb+srv://hhsqlp:78531903b@cluster0.nqfys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    FileModule,
    AlbumModule,
    ServeStaticModule.forRoot({ rootPath: resolve(__dirname, 'static') }),
  ],
})
export class AppModule {}
