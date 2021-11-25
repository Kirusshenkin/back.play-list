import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AlbumModule } from './album/album.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static')}),
    MongooseModule.forRoot(
      process.env.MONGO_URI
    ),
    TrackModule,
    FileModule,
    AuthModule,
    UsersModule,
    AlbumModule
  ],
})
export class AppModule {}
