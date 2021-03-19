import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessageDto } from './MessageDto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id) {
    return this.messagesService.findById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    return this.messagesService.create(messageDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id, @Body() messageDto: MessageDto) {
    return this.messagesService.update(id, messageDto).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id) {
    return this.messagesService.delete(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
