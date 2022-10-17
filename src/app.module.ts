import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://node_app_user:e87bCVT0zgodqGmw@cluster0.cdjwv.mongodb.net/NestJSDB',
    ),
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
