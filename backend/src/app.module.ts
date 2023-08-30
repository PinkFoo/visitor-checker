import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VisitorsModule } from './visitors/visitors.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user:[DATABASE PASSWORD]@cluster0.gvdptna.mongodb.net/?retryWrites=true&w=majority',
    ),
    VisitorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
