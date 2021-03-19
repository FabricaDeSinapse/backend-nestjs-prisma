import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
